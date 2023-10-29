import { bwish } from '$db/tutorials';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function () {
	const data = await bwish
		.find({}, { limit: 50, projection: { title: 1, from: 1, _id: 0 } })
		.toArray();
	console.log(data);
	return {
		bwish: data
	};
};
