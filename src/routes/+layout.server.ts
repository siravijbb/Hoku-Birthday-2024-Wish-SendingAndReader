import { bwish } from '$db/tutorials';
import type { PageServerLoad } from './$types';
import { start_mongo, close_mongo } from '$db/mongo';
import { P } from 'flowbite-svelte';
// Predefined date and time in the format "YYYY-MM-DDTHH:mm:ss"
const predefinedDateTime = '2024-01-08T18:00:00';

// Get the current date and time

// Compare dates

export const load: PageServerLoad = async function () {
	// Predefined date and time in the format "YYYY-MM-DDTHH:mm:ss" in ISO time
	// this code make faster by chatGPT, Sory im not good javascript dev
	const predefinedDateTime = '2024-01-08T13:00:00';
	const formClose = '2024-01-08T12:55:00';

	// Get the current date and time in UTC
	const currentDateTime = new Date();
	const currentDateTimeUTC = new Date(currentDateTime.toISOString());

	// Convert the predefined date and time to UTC
	const predefinedDateTimeObject = new Date(predefinedDateTime + 'Z');
	const formCloseObject = new Date(formClose + 'Z');
	let formStillopen;
	console.log('Now', currentDateTime.getTime());
	console.log('Defined', predefinedDateTimeObject.getTime());
	try {
		if (currentDateTimeUTC.getTime() <= predefinedDateTimeObject.getTime()) {
			start_mongo().then(() => {
				console.log('Today is before the predefined date, But will open for count');
			});
			let count = bwish.countDocuments();
			console.log('Code Closed (return count)');
			const Releasehours =
				Number(String(predefinedDateTimeObject.getUTCHours()).padStart(2, '0')) + 7;
			const Releaseminutes = String(predefinedDateTimeObject.getUTCMinutes()).padStart(2, '0');
			const Releaseseconds = String(predefinedDateTimeObject.getUTCSeconds()).padStart(2, '0');
			const Formclosehours = Number(String(formCloseObject.getUTCHours()).padStart(2, '0')) + 7;
			const Formcloseminutes = String(formCloseObject.getUTCMinutes()).padStart(2, '0');
			const Formcloseseconds = String(formCloseObject.getUTCSeconds()).padStart(2, '0');
			if (currentDateTimeUTC.getTime() <= formCloseObject.getTime()) {
				formStillopen = true;
			} else {
				formStillopen = false;
			}
			return {
				notIntime: true,
				tutorials: undefined, ///
				Total: { count: count },
				openDate:
					predefinedDateTimeObject.toLocaleDateString() +
					'  ' +
					Releasehours +
					':' +
					Releaseminutes +
					':' +
					Releaseseconds,
				formStillopen: formStillopen,
				formCloseDate:
					formCloseObject.toLocaleDateString() +
					'  ' +
					Formclosehours +
					':' +
					Formcloseminutes +
					':' +
					Formcloseseconds
			};
		} else {
			await start_mongo().then(() => {
				console.log('Today at and after the predefined date.');
			});
		}
	} catch (error) {
		console.error(error);
		return {
			dataFailed: true,
			tutorials: undefined ///
		};
	}
	formStillopen = true;
	let count = bwish.countDocuments();
	const data = bwish
		.find(
			{},
			{
				projection: {
					_id: 0
				}
			}
		)
		.sort({ count: 1 })
		.toArray();

	console.log(data);

	console.log('Code Closed');
	return {
		birthdayWishes: { birthdayWishes: data }, ///
		Total: { count: count },
		formStillopen: formStillopen,
	};
};
// import { bwish } from '$db/tutorials';
// import type { PageServerLoad } from './$types';
// import { start_mongo, close_mongo } from '$db/mongo';

// export const load: PageServerLoad = async function () {
// 	try {
// 		await start_mongo().then(() => {
// 			console.log('Mongo started');
// 		});
// 	} catch (error) {
// 		console.error(error);
// 		return {
// 			dataFailed: true,
// 			tutorials: undefined ///
// 		};
// 	}

// 	const data = bwish
// 		.find(
// 			{},
// 			{
// 				projection: {
// 					_id: 0
// 				}
// 			}
// 		)
// 		.sort({ _id: -1 })
// 		.toArray();

// 	console.log(data);
// 	setTimeout(() => {
// 		close_mongo().then(() => {
// 			console.log('Mongo Closed');
// 		});
// 	}, 5000);
// 	console.log('Code Closed');
// 	return {
// 		birthdayWishes: { birthdayWishes: data } ///
// 	};
// };
