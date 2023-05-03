import express from 'express';
import conntion from './db/databaseCon.js'
import "dotenv/config";

import contactRoute from './routes/contactRours.js'
import userRoute from './routes/userRouts.js'
import bodyParser from 'body-parser';

const app = express();
conntion()

app.use(bodyParser.json())   //Da bi se dobio req.body od klijenta
// app.use(bodyParser.urlencoded({'extended': true}))   //

app.use(contactRoute);
app.use(userRoute);

app.listen(process.env.PORT,()=>{
    console.log("Server started at port 4000");
})