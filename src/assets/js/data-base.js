export const connectDB = () => {
	let database = firebase.firestore();
	const settings = { timestampsInSnapshots : true};
	database.settings(settings);

	return database;
}