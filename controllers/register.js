const customResponse = require("../utils/customResponse");
const User = require("../models/user");
const JWT = require("jsonwebtoken");
require("dotenv").config();

const register = async (req,res)=>{
    try{
        const {username,email,password} = req.body;
        const foundUser = await User.findOne({email});
        if(foundUser){
            return customResponse(res,404,false,"user already exist",null,null);
        }
        const newUser = await User.create({
            username,
            email,
            password
        });
        // const savedUser = await newUser.save();

        const token = JWT.sign({
            userId:newUser._id,
            email
        },
        process.env.JWTOKEN_KEY ,
        {
            expiresIn : "1h"
        })
        // newUser.token = token

        customResponse(res,201,true,"User Added",{newUser,token},null);
    }catch(err){
        console.log(`login error`,err);
        customResponse(res,500,false,"Registration error",null,err);
    }
}

module.exports = register