import { MongoClient } from 'mongodb';
import { MONGO_URL } from '$env/static/private';

const cilent = new MongoClient(MONGO_URL);

export function start_mongo() {
	console.log('Starting mongo');
	return cilent.connect();
}

export default cilent.db();

export function close_mongo() {
	return cilent.close();
}
