import asyncHandler from "express-async-handler"
import jwt from "jsonwebtoken"
import "dotenv/config";

let verifyToken = asyncHandler (async (req, res, next) => {
    let token;
    let oathHeader = req.headers.Auth;
    if(oathHeader && oathHeader.startsWith("Bearer")){
        token = oathHeader.split(" ")[1];
        jwt.verify(token,process.env.JWT_TOKEN,(err,user) => {
            if(err) {
                res.status(401);
                //I ERROR TREBA DA SE STAVI
            }else{
                req.body = user;
                next();
            }
        });
        if (!token) {
            res.status(401);
            //throw new Error("User is not authorized or token is missing");    ERROR stavi
        }
    }
})

export { verifyToken }