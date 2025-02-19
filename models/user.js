const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type:String,
        requuired:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    }

});

userSchema.pre("save",async function(next){
    this.password = await bcrypt.hash(this.password,10);
    next();
})

module.exports = mongoose.model("User",userSchema);

