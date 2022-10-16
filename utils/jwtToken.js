// Creating token and saving cookie
// To write instead of more code is saving the code space.
const sendToken = (user,statusCode,res)=>{
    const token=user.getJWTToken();

    //options for cookie
    const options={
      //Adding expire date to cookie
        expires:new Date(
            Date.now() +process.env.COOKIE_EXPIRE *24 *60 * 60 * 1000
        ),
        httpOnly:true,
    };
    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        user,
        token,
    });
};

module.exports= sendToken;