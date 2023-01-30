import mongoose from 'mongoose'

export function Connect(dbName: string) {
	const DB = (process.env.DB_URL || 'mongodb://127.0.0.1/') + dbName;

	const con = mongoose.createConnection(DB);
	con.on('error', console.error.bind(console, 'setting DB connection error:'));
	con.once('open', () => console.log('setting DB connection successful'));

	return con
}