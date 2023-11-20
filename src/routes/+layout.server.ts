import { bwish } from '$db/tutorials';
import type { PageServerLoad } from './$types';
import { start_mongo, close_mongo } from '$db/mongo';

export const load: PageServerLoad = async function () {
	try {
		await start_mongo().then(() => {
			console.log('Mongo started');
		});
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
		tutorials: { tutorials: data } ///
	};
};
