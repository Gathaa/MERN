const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const Joi=require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
        firstname:{type:String,required:true},
        lastname:{type:String,required:true},
        email:{type:String,Required:true},
        password:{type:String,Required:true}
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id:this._id},process.send.token1,{expiresIn:"7d"})
    return token;
};


const User = mongoose.model("user",userSchema);
const validate = (data) =>{
const schema =Joi.object ({
    firstname:Joi.string().required().label("First Name"),
    lastname:Joi.string().required().label("Last Name"),
    Email:Joi.string().email().required().label("Email"),
    Password:passwordComplexity().required().label("Password")
});
    return schema.validate(data)
}


module.exports=={User,validate}