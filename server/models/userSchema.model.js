const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,require:true,unique:true
    },
    fullName:{
         type:String,require:true,
    },
    password:{
        type:String,require:true
    },
    profilepic:{
        type:String,default:""
    },
},
{timestamps:true})

const User = mongoose.model('User',userSchema)

module.exports = User;