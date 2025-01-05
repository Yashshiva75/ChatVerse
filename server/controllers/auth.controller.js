const bcrypt = require('bcrypt')
const Users = require('../models/userSchema.model')
const jwtToken = require('jsonwebtoken')
export const signup = async (req,res) =>{
  try{
  const {email,fullname,password,profilepic} = req.body
  const user = await Users.findOne({email})
  if(user){
    res.status(401).json({
        message:'Email already exists'
    })
    const newUser = await Users({email,fullname,password,profilepic})
    const Passhash = await bcrypt.hash(password,10)
    await newUser.save()
    res.status(200).json({message:'User registered success',success:true})  
  }
  }catch(error){
    res.status(500).json({message:'Error in server',cause:error.message,success:false})
  }
}

export const login =async () =>{
   try{
      const {email,password} = req.body
      const user = await Users.findOne({email})
      const pass = await bcrypt.compare(password,user.password)
      if(!user){
        return res.status(404).json({message:'User email not found'})
      }
      if(!pass){
        return res.status(403).json({message:'Password is incorrect'})
      }
      const token = jwtToken.sign({email:user.email,id:user._id},jwtSecret,{expiresIn:'24h'})
      res.cookie('yashToken',token,{
        httpOnly:true
      })
      return res.status(200).json({message:'Login success',success:true,token,name:user.name,email})
   }catch(error){
      return res.status(500).json({message:'Error in login server'})
   }
}

export const logout =async ()=>{
    try{
       res.clearCookie('yashtoken',{
        httpOnly:true,

       })
       res.status(200),json({message:'Logout success',success:true})
    }catch(error){
       res.status(500).json({message:'Error in logout server'})
    }
}

module.export = {signup,login,logout}