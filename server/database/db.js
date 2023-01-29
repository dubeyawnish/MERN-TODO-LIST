import mongoose from "mongoose";
import dotenv from 'dotenv';
mongoose.set('strictQuery', false);
dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;


const Connection=()=>{

    const MONGODB_URI=`mongodb+srv://${username}:${password}@todo-app.hcyistg.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(MONGODB_URI,{useNewUrlParser:true});

    mongoose.connection.on('connected',()=>{
        console.log(`Database Connected Successfully`);
    })

    mongoose.connection.on('disconnected',()=>{
        console.log(`Database disconnected`);
    })
    mongoose.connection.on('error',()=>{
        console.log(`Error while connectig with database`,error.message);
    })
}

export default Connection;