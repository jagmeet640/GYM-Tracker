// back end file
// npm i express
// node api/index.js to start server
// nodemon install
// npm i mongoose
// npm i dotenv

// npm run dev to start server on nodemon
// npm run start to start server on node


// run serverside code on a different port as compared to the front end for example run back end on 3001 and front end on 3000 local host simontanously 
// when accessing db from front end we will post/get/put data ( we can use axios lib )


import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to DB");
    }).catch((err) =>{
        console.log("did not connect");
    });


const app = express();

app.use(express.json()); // so that our back end server can read json objects

app.listen(3001, () => {
    console.log('Server is running on port 3001!');
});


// api route 
// sends a get request to the '/' path and then expects a response from the client side
// localhost:3001/test will return hello world

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);