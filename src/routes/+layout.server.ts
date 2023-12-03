import { bwish } from '$db/tutorials';
import type { PageServerLoad } from './$types';
import { start_mongo, close_mongo } from '$db/mongo';

// Predefined date in the format "YYYY-MM-DD"
const predefinedDate = '2024-01-08';

// Get the current date
const currentDate = new Date();
const currentDateString = currentDate.toISOString().split('T')[0]; // Format as "YYYY-MM-DD"

// Compare dates

export const load: PageServerLoad = async function () {
	try {
		if (currentDate < new Date(predefinedDate)) {
			console.log('Today is before the predefined date.');
			return {
				notIntime: true,
				tutorials: undefined ///
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

	const data = bwish
		.find(
			{},
			{
				projection: {
					_id: 0
				}
			}
		)
		.sort({ _id: -1 })
		.toArray();

	console.log(data);
	setTimeout(() => {
		close_mongo().then(() => {
			console.log('Mongo Closed');
		});
	}, 5000);
	console.log('Code Closed');
	return {
		birthdayWishes: { birthdayWishes: data } ///
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
