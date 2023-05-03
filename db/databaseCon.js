import mongoose from "mongoose";
import "dotenv/config"

let connection = async function(){
    try{
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected");
    }catch(err){
        console.log(err);
    }
}

export default connection;