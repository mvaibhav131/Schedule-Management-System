const mongoose= require("mongoose");

const connectdb=()=>{
    mongoose.connect(process.env.DB,(error)=>{
        if(error) console.log("Error Occure Connecting DB");
        else console.log("DB Connected");
    })
}

module.exports=connectdb;