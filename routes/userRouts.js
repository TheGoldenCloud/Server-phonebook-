import express from "express"
import { getUser, createUser,getUserById,updateUser,deleteUser,loginUser } from "../controllers/userController.js";

let rout = express.Router();

rout.route('/users/login').post(loginUser);

rout.route('/users').get(getUser).post(createUser);

rout.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);

export default rout;
