import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

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

export const signin = async (req, res, next) =>{

    const {email, password} = req.body;


    try {

        // we import the user model from mongo db and then use the function findOne({item to find}) to search the database to find if email exsists
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404, 'User not found !'));

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401, 'Wrong credentials !'));

        // jwt for creating web token in form of hash values // cookies
        const token = jwt.sign({id: validUser.id}, process.env.JWT_SECRET);

        // the below takes the password out of the object and returns the rest of the object 
        const {password : pass, ...rest} = validUser._doc;

        // expires to add time out for the cookie
        res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);

    } catch (error) {
        next(error);
    }

};