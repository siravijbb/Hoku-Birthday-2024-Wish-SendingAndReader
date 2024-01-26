import { json } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';

let storedData = 0;
let NextStation = true;
let wish = [];

export const POST = async ({ request }) => {
	const { normalOP, Station, Next } = await request.json();

	console.log('Plus station:', Station);
	storedData = storedData + Station;
	NextStation = Next;
	console.log('Now station:', storedData);
	console.log('Arriving', NextStation);
	return new Response(
		JSON.stringify({ message: 'Success', Station: storedData, Next: NextStation }),
		{ status: 201 }
	);
};
export const PUT = async ({ request }) => {
	const { normalOP, Station, Next } = await request.json();
	console.log('Plus station:', Station);
	storedData = Station;
	NextStation = Next;
	console.log('Now station:', storedData);
	console.log('Arriving', NextStation);
	return new Response(
		JSON.stringify({ message: 'Success', body: { Station: storedData, NextStation: NextStation } }),
		{ status: 201 }
	);
};
export const GET = async ({}) => {
    const response = await fetch('/hokubirth.bwishnodup.json');
    if (response.ok) {
        const json = await response.json();
		wish = json
    }
    
    
    return new Response(
		JSON.stringify({body:{wish}}
	));
};
