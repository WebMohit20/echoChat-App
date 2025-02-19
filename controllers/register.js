const customResponse = require("../utils/customResponse");
const User = require("../models/user");

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

        customResponse(res,201,true,"User Added",newUser,null);
    }catch(err){
        console.log(`login error`,err);
        customResponse(res,500,false,"Registration error",null,err);
    }
}

module.exports = register