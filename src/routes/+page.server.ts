import { bwish } from '$db/tutorials';
import type { PageServerLoad } from './$types';
import { start_mongo, close_mongo } from '$db/mongo';

export const load: PageServerLoad = async function () {
	await start_mongo().then(() => {
		console.log('Mongo started');
	});

	const data = await bwish
		.find(
			{},
			{
				projection: {
					_id: 0,
					name: 1,
					comment: 1,
					DMY: 1,
					time: 1,
					gift: {
						id: null,
						name: 1,
						desc: 1,
						imgURL: 1,
						bgColorCode: 1,
						borderColor: 1,
						order: null
					}
				}
			}
		)
		.toArray();

	console.log(data);
	close_mongo().then(() => {
		console.log('Mongo Closed');
	});


	return {
		tutorials: data
	};
};
