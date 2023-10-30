// src/routes/signup/signup.ts

import type { Actions, RequestEvent, ActionFailure, Redirect } from '@sveltejs/kit';
import { bwish } from '$db/tutorials'; // Import your data module
import type { wishSender } from '../../types/form'; // Import your data module
import { start_mongo } from '$db/mongo';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	sendwish: async ({ request }: RequestEvent): Promise<wishSender> => {
		const signupFormData = await request.formData();
		const name = signupFormData.get('name') ?? '';
		const wish = signupFormData.get('wish') ?? '';
		start_mongo().then(() => {
			console.log('Mongo started');
		});

		bwish.insertOne({
			data: {
				name: name,
				comment: wish,
				giftId: null,
				createdAt: new Date(Date.now())
			},
			gift: {
				id: null,
				name: null,
				desc: null,
				imgURL: null,
				bgColorCode: null,
				borderColor: null,
				order: null
			}
		});
		throw redirect(301, `/sendwish/completed`);
	}
};
