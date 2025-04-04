const { default: axios } = require("axios");
const Users = require("../models/authModel");
const bcrypt = require("bcrypt");
const jwt = require ("jsonwebtoken")


// Register
//Login (only validating payload for these three)
//Forgot Password
//payload

const loginFxn =  async(request, response)=>{

    try {
      // if(!request.user){
  
      //   return response.status(401).json({message: "Access Denied, Invalid Authentication"})    }
    
    //payload
      const { email, password } = request.body
  
    const user = await Users.findOne({email})
  //generate a token 9754
    if(!user){
      return response.status(404).json({message:"user account not found"})
    }
  const  isMatched = bcrypt.compare(user.password, password)
  
    if(!isMatched){
      return response.status(400).json({message: "Incorrect password or email"})
    }
  // Generating Tokens
  //Access Token
   user.token = token
   await user.save()
   if(user.token && user.token === token){

   }
  const OTP =Math.floor( Math.random() * 100)
  const accessToken = jwt.sign({user},`${process.env.ACCESS_TOKEN}`,{expiresIn:"30m"})
  const refreshToken = jwt.sign({user},`${process.env.REFRESH_TOKEN}`,{expiresIn:"30m"})
  
  //await sendUserEmail(email)
   return response.status(200).json({message : "Login Successful", accessToken, refreshToken, OTP })
  
  
   return response.status(200).json({
    message: "Login Successful",
    accessToken, 
    user
   }) 
   
  
    } catch (error) {
      return response.status(500).json({message : error.message})
    }
   };

   const getAllCountries = async(request, response)=>{

   try {
    
      const responsxe = await axios.get("https://api.first.org/data/v1/countries", {headers:{Authorization: `Bearer`}
      })
    
      return response.status(200).json({
        message: "Successful",
       countries: responsxe.data
      })
    
   } catch (error) {
    return response.status(500).json({message: error.message})
   }
  };

  module.exports = {
    loginFxn,
    getAllCountries
  }