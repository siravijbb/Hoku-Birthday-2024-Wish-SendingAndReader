import type { Actions, RequestEvent, Redirect } from '@sveltejs/kit';
import { bwish } from '$db/tutorials';
import type { wishSender } from '../../types/form';
import { start_mongo, close_mongo } from '$db/mongo';
import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import { SECRET_KEYS } from '$env/static/private';

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
				message: true
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

		if (picture === '1') {
			picturename = 'hamham';
			desc = 'ผู้ฝันใฝ่ธรรมดา ที่รัก และคิดถึงคุณบากุมาก ๆ';
			imgURL = '/img/icon/20230727153257-10f56244-bd4b-47d2-90db-b5ee7c2cc743.png';
			bgColorCode = '#e1d7ed';
			borderColor = '#524973';
		} else if (picture === '2') {
			picturename = 'hamham';
			desc = '#หนูบากุน่ารักที่สุดในโลก';
			imgURL = '/img/icon/20230727153227-31419e74-c30d-4662-ba3b-7fc77ab28968.png';
			bgColorCode = '#FFFFFF';
			borderColor = '#eabdb4';
		} else if (picture === '3') {
			picturename = 'banana';
			desc = 'กล้วยน้อย ขนาดแมวดำยังชอบเล่นกล้วย แล้วใครล่ะจะไม่ชอบ';
			imgURL = '/img/icon/20230727152958-f08c0f94-dcc0-4366-9eec-13b1c5c5d6e7.png';
			bgColorCode = '#ffe8a8';
			borderColor = '#aeb84c';
		} else {
			picturename = 'heart';
			desc = 'ความรักที่มีต่อคุณบากุ';
			imgURL = '/img/icon/20230727153149-141a60ce-e086-4f4a-b624-966315f86c46.png';
			bgColorCode = '#ffbaab';
			borderColor = '#ffbaab';
		}

		await start_mongo().then(() => {
			console.log('Mongo started');
		});
		await bwish.insertOne({
			name: name,
			comment: wish, // Use the 'name' value as the 'comment'
			giftId: null,
			DMY: UTCDMY,
			time: THTIME,
			agreed: agreed,
			gift: {
				id: null,
				name: 'tapir',
				desc: desc,
				imgURL: imgURL,
				bgColorCode: bgColorCode,
				borderColor: borderColor,
				order: null
			}
		});
		await close_mongo().then(() => {
			console.log('Mongo Closed');
		});
		throw redirect(301, `/`);
	}
};
