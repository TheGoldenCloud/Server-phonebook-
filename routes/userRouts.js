import express from "express"
import { getUser, createUser,getUserById,updateUser,deleteUser,loginUser,verifyToken } from "../controllers/userController.js";

let rout = express.Router();

rout.route('/users/login').post(loginUser);

rout.route('/users').get(verifyToken).get(getUser);

rout.route('/users/create').post(createUser);

rout.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);

export default rout;
