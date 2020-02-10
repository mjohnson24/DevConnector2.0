const mongoClient = require('mongo-client');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
	try {
		await mongoClient(db);
		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
