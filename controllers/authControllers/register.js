const customResponse = require("../../utils/customResponse");

const register = (req,res)=>{
    customResponse(res,200,true,"working",null,null);
}

module.exports = register