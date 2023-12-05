import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

// npm i bcryptjs ~ this is for encrypting the passwords to make it more secure and keep the useres data safe


export const signup = async (req, res, next) => {
    // srtoring data from the get req as a const object 
    const {username, email, password} = req.body;
    // now storing this data in the mongodb database

    // need to hash/encryp the password before storing
    const hashPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({username, email, password: hashPassword});
    // saving the user info
    // when using await means that wait till the data has been saved we need to change the function to a async function
    // try catch block added to handle the error caused in server

    // middle ware

    try{
        await newUser.save();
        res.status(201).json("user created success!!!");
    }catch(error){
        // res.status(500).json(error.message);
        next(error); // sending error from the server
        // next(errorHandler(550, "error from error handler function"))
    }
};