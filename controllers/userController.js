import "dotenv/config";
import asyncHandler from "express-async-handler"
import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
//Dodaj enkripciju!!!

let loginUser = asyncHandler(async (req,res) =>{
    let { username, password } = req.body;

    let user = await userModel.findOne({ username: username, password: password });
    
    if(!user){
        console.log(user);
        res.status(400).json({ message: "User not found"});
    }else{
        // res.status(200).json({ message: "Login successful"});
        
        let accT = jwt.sign({    
            user:{
                username: user.username,
                password: user.password
            }
        },process.env.JWT_TOKEN,{ expiresIn: "2m"});
        res.status(200).json(accT); 
    }

});

let verifyToken = asyncHandler (async (req, res, next) => {
    let token;
    let oathHeader = req.headers.authorization
    if(oathHeader && oathHeader.startsWith("Bearer")){
        token = oathHeader.split(" ")[1];
        jwt.verify(token,process.env.JWT_TOKEN,(err,user) => {
            if(err) {
                res.status(401);
            }else{
                req.body = user;
                next();
            }
        });
        
         
    }
})

let getUser = asyncHandler(async (req,res)=>{   //Get users
    res.json(req.body.user);
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

export { getUser,createUser,getUserById,updateUser,deleteUser,loginUser,verifyToken }