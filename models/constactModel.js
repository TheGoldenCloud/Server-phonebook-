import mongoose from "mongoose";

let constactShema = new mongoose.Schema({
        username: {
            type: String,
            required: [true, "Please add the contact usename"] 
        },
        email:{
            type: String,
            required: [true, "Please add the contact email"]
        },
        phone:{
            type: String,
            required: [true, "Please add the contact phone number"]
        }
    },
    { 
        timestamp: true 
    }
)

let ContactModel = mongoose.model('Contacts',constactShema);

export default ContactModel; 