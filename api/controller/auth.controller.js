import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

// npm i bcryptjs ~ this is for encrypting the passwords to make it more secure and keep the useres data safe


export const signup = async (req, res) => {
    // srtoring data from the get req as a const object 
    const {username, email, password} = req.body;
    // now storing this data in the mongodb database

    // need to hash/encryp the password before storing
    const hashPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({username, email, hashPassword});
    // saving the user info
    // when using await means that wait till the data has been saved we need to change the function to a async function
    await newUser.save();
    res.status(201).json("user created success!!!");

};