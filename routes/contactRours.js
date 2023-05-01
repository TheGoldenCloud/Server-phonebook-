import express from "express";
import { getContacts,createContact,getContactById,deleteContact,changeContact } from "../controllers/contactController.js";

let rout = express.Router();

rout.route('/contacts').get(getContacts).post(createContact);

rout.route('/contacts/:id').get(getContactById).delete(deleteContact).put(changeContact);

// rout.route('/contacts/:id');


export default rout;