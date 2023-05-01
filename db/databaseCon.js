import mongoose from "mongoose";

let connection = async function(){
    try{
        await mongoose.connect('mongodb+srv://Admin:admin123@cluster123.pezdpf0.mongodb.net/?retryWrites=true&w=majority');
        console.log("Database connected");
    }catch(err){
        console.log(err);
    }
}

export default connection;