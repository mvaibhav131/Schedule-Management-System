const mongoose= require("mongoose");

const connectdb=()=>{
    mongoose.connect(process.env.DB,(error)=>{
        if(error) console.log("Error Occure Connecting Database");
        else console.log("Database Connected");
    })
}

module.exports=connectdb;