import type { Actions, RequestEvent, Redirect } from '@sveltejs/kit';
import { bwish } from '$db/tutorials';
import { start_mongo, close_mongo } from '$db/mongo';
import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import { SECRET_KEYS } from '$env/static/private';

const predefinedDate = '2024-01-08';

// Get the current date
const currentDate = new Date();
const currentDateString = currentDate.toISOString().split('T')[0]; // Format as "YYYY-MM-DD"

export interface TokenValidateResponse {
	'error-codes': string[];
	success: boolean;
	action: string;
	cdata: string;
}

async function validateToken(token: string, secret: string) {
	const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			response: token,
			secret: secret
		})
	});

	const data: TokenValidateResponse = await response.json();

	return {
		success: data.success,
		errors: data['error-codes']?.length ? data['error-codes'][0] : null
	};
}

export const actions: Actions = {
	default: async ({ request }) => {
		const signupFormData = await request.formData();

		const token = signupFormData.get('cf-turnstile-response') as string;
		const secret = SECRET_KEYS;
		const { success, errors } = await validateToken(token, secret);

		if (!success) {
			return fail(400, {
				errors: errors,
				message: true,
				reCapchaFalse: true,
				complete: false
			});
		}
		console.log(signupFormData);

		const name = signupFormData.get('name') ?? '';
		const wish = signupFormData.get('wish') ?? '';
		const picture = signupFormData.get('picture');
		const agreed = signupFormData.get('agreement');
		let desc = '';
		let imgURL = '';
		let bgColorCode = '';
		let borderColor = '';
		let picturename = '';
		console.log(picture);
		const date = new Date();

		const day = String(date.getUTCDate()).padStart(2, '0');
		const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
		const year = date.getUTCFullYear();
		date.setUTCHours(date.getUTCHours() + 7);
		const hours = String(date.getUTCHours()).padStart(2, '0');
		const minutes = String(date.getUTCMinutes()).padStart(2, '0');
		const seconds = String(date.getUTCSeconds()).padStart(2, '0');
		const UTCDMY = `${day} ${month} ${year}`;
		const THTIME = `${hours}:${minutes} GMT+7`;
		try {
			await start_mongo().then(() => {
				console.log('Mongo started');
			});
		} catch (error) {
			console.error(error);
			return {
				errors: errors,
				message: true,
				reCapchaFalse: false,
				complete: false
			};
		}

		let count = await bwish.countDocuments();
		console.log(count);
		await bwish.insertOne({
			name: name,
			comment: wish, // Use the 'name' value as the 'comment'
			giftId: null,
			DMY: UTCDMY,
			time: THTIME,
			agreed: agreed,
			count: count + 1,
			picture: picture
		});
		await close_mongo();
		console.log('Code Closed');
		if (currentDate < new Date(predefinedDate)) {
			console.log('Sended before the predefined date.');
			return {
				completeBefore: true
			};
		} else {
			return { complete: true };
		}
	}
};
