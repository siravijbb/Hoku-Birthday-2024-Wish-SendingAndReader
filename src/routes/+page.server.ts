import { bwish } from '$db/tutorials';
import type { PageServerLoad } from './$types';
import { start_mongo, close_mongo } from '$db/mongo';


export const load: PageServerLoad = async function () {
	start_mongo().then(() => {
		console.log('Mongo started');
	});

	const data = await bwish
		.find(
			{},
			{
				limit: 50,
				projection: {
					_id: 0,
					name: 1,
					comment: 1,
					createdAt: 1,
					updatedAt: 1
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
