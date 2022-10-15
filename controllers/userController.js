
// import necessary files
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorhandalers");
const catchAsyncError= require("../middleware/catchAsyncError");
const sendToken = require("../utils/jwtToken");


//register User
const registerUser=catchAsyncError(async(req,res)=>{
  const {name,email,password}= req.body;
  const user = await User.create({
    name,
    email,
    password,
 });
  sendToken(user,201,res);
});

//Login User

const loginUser= catchAsyncError(async(req,res,next)=>{

  const {email,password}=req.body;
  //checking if user has given password and email both
  if(!email || !password){
    return next(new ErrorHandler("Please Enter Email & Password",400))
  }
  const user= await User.findOne({email}).select("+password");
  
  if(!user){
    return next(new ErrorHandler("Invalid Email or Password",401))
  }
  const isPasswordMatched= await user.comparePassword(password);
  if(!isPasswordMatched){
    return next(new ErrorHandler("Invalid Email or Password",401))
  }
    sendToken(user,200,res);
});

// Logout User
const logout= catchAsyncError(async(req,res,next)=>{
  res.cookie("token",null,{
    expires:new Date(Date.now()),
    httpOnly:true,
  });
  res.status(200).json({
    success:true,
    message:"Logged Out Succesfully"
  });
});

module.exports={registerUser,loginUser,logout};