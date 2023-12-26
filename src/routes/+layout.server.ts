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
	const predefinedDateTime = '2024-01-08T13:30:00';

	// Get the current date and time in UTC
	const currentDateTime = new Date();
	const currentDateTimeUTC = new Date(currentDateTime.toISOString());

	// Convert the predefined date and time to UTC
	const predefinedDateTimeObject = new Date(predefinedDateTime + 'Z');

	console.log(currentDateTime.getTime());
	console.log(predefinedDateTimeObject.getTime());
	try {
		if (currentDateTimeUTC.getTime() <= predefinedDateTimeObject.getTime()) {
			start_mongo().then(() => {
				console.log('Today at and before the predefined date, But will open for count');
			});
			let count = bwish.countDocuments();
			console.log('Code Closed (return count)');
			const hours = Number(String(predefinedDateTimeObject.getUTCHours()).padStart(2, '0')) + 7;
			const minutes = String(predefinedDateTimeObject.getUTCMinutes()).padStart(2, '0');
			const seconds = String(predefinedDateTimeObject.getUTCSeconds()).padStart(2, '0');
			return {
				notIntime: true,
				tutorials: undefined, ///
				Total: { count: count },
				openDate:
					predefinedDateTimeObject.toLocaleDateString() +
					' เวลา ' +
					hours + ':' + minutes + ':' + seconds
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
		.sort({ count: -1 })
		.toArray();

	console.log(data);

	console.log('Code Closed');
	return {
		birthdayWishes: { birthdayWishes: data }, ///
		Total: { count: count }
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
