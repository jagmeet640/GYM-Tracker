import User from "../models/user.model.js";


export const signup = async (req, res) => {
    // srtoring data from the get req as a const object 
    const {username, email, password} = req.body;
    // now storing this data in the mongodb database
    const newUser = new User({username, email, password});
    // saving the user info
    // when using await means that wait till the data has been saved we need to change the function to a async function
    await newUser.save();
    res.status(201).json("user created success!!!");

};