import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect(DB_NAME) {
    try {
        await connect(MONGODB_URI, {
            dbName: DB_NAME,
        });
        console.log(`📚 You have connected to the ${DB_NAME} DB in MongoDB!`);
    } catch (error) {
        console.log(`❌❌❌ ERROR CONNECTING TO DB`);
        throw error;
    }
}
export default dbConnect;