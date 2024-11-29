import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function conectaDataBase(){
    mongoose.connect(process.env.DB_CONNCENTION_STRING)
    return mongoose.connection;
}

export default conectaDataBase;
