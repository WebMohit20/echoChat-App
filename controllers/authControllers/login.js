const customResponse = require("../../utils/customResponse");

const login = (req,res)=>{
    customResponse(res,200,true,"working",null,null);
}

module.exports = login;