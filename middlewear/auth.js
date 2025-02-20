const customResponse = require("../utils/customResponse");
const config = process.env;
const JWT = require("jsonwebtoken");

const verifyToken = (req,res,next)=>{
    let token =  req.headers.authorization;
    
    if(!token){
        return customResponse(res,400,false,"user not register",null,"authentication fail");
    }
    try{

        token = token.replace("Bearer ","");
        const decoded = JWT.verify(token,config.JWTOKEN_KEY);
        req.user = decoded
        
        next();
    }catch(err){
        console.log("error",err);
        customResponse(res,400,false,"Something went wrong in auth",null,err);
    }
   
}

module.exports = verifyToken;