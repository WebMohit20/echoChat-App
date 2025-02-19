const customResponse = require("../utils/customResponse");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const foundUser = await User.findOne({email});
        if(foundUser && (await bcrypt.compare(password , foundUser.password)) ){
            return customResponse(res,200,true,"User exist",foundUser,null);
        }
        customResponse(res,404,false,"user not found",null,"wrong credintials")
        
    }catch(err){
        customResponse(res,500,false,"Server error",null,err);
    }
}

module.exports = login;