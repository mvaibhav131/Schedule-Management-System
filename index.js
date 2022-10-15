
// import useful libraries and frameworks

const express=require('express');
const dotenv= require("dotenv");
const cors= require("cors");
const connection = require("./database");
const cookieParser= require("cookie-parser");
const bodyParser = require('body-parser');
const userroute= require("./routes/userRoute");
const scheduleroute= require("./routes/scheduleRoutes");

// set up server

const app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

// set up the body parser for handling form data
// submitted by the user
app.use(bodyParser.urlencoded({ extended: false }));
// set up the session


// set up path of config
dotenv.config({path:'config/config.env'});

// set up routes
app.use("/api/v1",userroute);
app.use("/api/v1",scheduleroute);
app.get('/',(req,res)=>res.send('Hello'));


// start the server and listen for requests

app.listen(process.env.PORT,async()=>{
    try{
        await connection();
        console.log("connected to MongoDB");
    }
    catch(e){
        console.log("error",e);
    }
console.log(`server started port ${process.env.PORT} `);
});