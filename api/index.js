// back end file
// npm i express
// node api/index.js to start server
// nodemon install
// npm i mongoose
// npm i dotenv

// npm run dev to start server on nodemon
// npm run start to start server on node


import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to DB");
    }).catch((err) =>{
        console.log("did not connect");
    });


const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});
