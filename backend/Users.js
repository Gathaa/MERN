const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Fname:String,
    Lname:String,
    Email:String,
    Password:String,

})

const userModel = mongoose.model("Users",userSchema)


module.exports=userModel;