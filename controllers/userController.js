import "dotenv/config";
import asyncHandler from "express-async-handler"
import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"

let loginUser = async (req,res) =>{
    let { username, password } = req.body;
    if(!username || !password){
        res.status(400);
    }
    let user = await userModel.findOne({ username: username, password: password });
    
    if(!user){
        console.log(user);
        res.status(400).json({ message: "User not found"});
    }else{
        res.status(200).json({ message: "Login successful"});
        let accT = jwt.sign({    
            user:{
                username: user.username,
                password: user.password,
                email: user.email
            }
        },process.env.JWT_TOKEN,{ expiresIn: "3m"});
    }

}

let getUser = asyncHandler(async (req,res)=>{
    // let all = await userModel.find();

    res.send(JSON.stringify(all));
    //res.send(process.env.NAME_USERNAME);
})

let createUser = asyncHandler(async (req,res)=>{
    let user = await userModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    
    res.status(200).json({
        message: "User created"
    })
})

let getUserById = asyncHandler(async(req,res)=>{
    let user = await userModel.findById(req.params.id);
    console.log(user);
    res.status(200).json({
        message: "User created"
    })

})

let updateUser = asyncHandler(async(req,res)=>{
    let user = userModel.findById(req.params.id);
    let newOne = {
        username: "User zamena",
        email: "User email",
        password: "Pass zamena"
    }

    await userModel.findOneAndReplace(user,newOne);

    res.send(200).json({
        message: "User updated"
    })
})

let deleteUser = asyncHandler(async(req,res)=>{
    let user = await userModel.findById(req.params.id);
    await userModel.findOneAndDelete(user);

    res.status(200).json({
        message: "User deleted"
    })

})

export { getUser,createUser,getUserById,updateUser,deleteUser,loginUser }