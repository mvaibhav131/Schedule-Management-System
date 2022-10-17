
// These are advance implementation of diffrent person (p1,p2,p3,p4,p5)

/**
 * Contains a schema for a person Meeting
 */

// import necessary libraries
const mongoose= require("mongoose");

const personMeetingSchema=  new mongoose.Schema({
    person:{
        // Each person is containing the name,email,phoneNumber parameter
        p1:{
            name:{
                type:String,
                required:[true,"Please  Enter Your Name"],
                maxLength:[30,"Name cannot exceed 30 charachers"],
                minLength:[3,"Name should have min 3 charachers"]
            },
            email:{
                type:String,
                required:[true,"Please  Enter Your Emails"],
                unique:true,
                validate:[validator.isEmail,"Please Enter valid Email"]
            },
            phone:{
                type:String,
                required:[true,"Please  Enter Your Phone Number"],
             },
        },
        p2:{
            name:{
                type:String,
                required:[true,"Please  Enter Your Name"],
                maxLength:[30,"Name cannot exceed 30 charachers"],
                minLength:[3,"Name should have min 3 charachers"]
            },
            email:{
                type:String,
                required:[true,"Please  Enter Your Emails"],
                unique:true,
                validate:[validator.isEmail,"Please Enter valid Email"]
            },
            phone:{
                type:String,
                required:[true,"Please  Enter Your Phone Number"],
             },
        },
        p3:{
            name:{
                type:String,
                required:[true,"Please  Enter Your Name"],
                maxLength:[30,"Name cannot exceed 30 charachers"],
                minLength:[3,"Name should have min 3 charachers"]
            },
            email:{
                type:String,
                required:[true,"Please  Enter Your Emails"],
                unique:true,
                validate:[validator.isEmail,"Please Enter valid Email"]
            },
            phone:{
                type:String,
                required:[true,"Please  Enter Your Phone Number"],
             },
        },
        p4:{
            name:{
                type:String,
                required:[true,"Please  Enter Your Name"],
                maxLength:[30,"Name cannot exceed 30 charachers"],
                minLength:[3,"Name should have min 3 charachers"]
            },
            email:{
                type:String,
                required:[true,"Please  Enter Your Emails"],
                unique:true,
                validate:[validator.isEmail,"Please Enter valid Email"]
            },
            phone:{
                type:String,
                required:[true,"Please  Enter Your Phone Number"],
             },
        },
        p5:{
            name:{
                type:String,
                required:[true,"Please  Enter Your Name"],
                maxLength:[30,"Name cannot exceed 30 charachers"],
                minLength:[3,"Name should have min 3 charachers"]
            },
            email:{
                type:String,
                required:[true,"Please  Enter Your Emails"],
                unique:true,
                validate:[validator.isEmail,"Please Enter valid Email"]
            },
            phone:{
                type:String,
                required:[true,"Please  Enter Your Phone Number"],
             },
        },
    },
    // is containing the Meeting id as the reference schedule
    Meeting:{
        type:mongoose.Schema.ObjectId,
        ref:"Schedule",
        required:true
    },
 });

 module.exports= mongoose.Schema("personMeet",personMeetingSchema);

 //tips to avoid person collapsing same time

 //these schema is containing the  reference of schedule .
 //when you attached the any person in meeting then check that person schedule using the get request (/schedule).
 //its check that the user is busy in another meeting or not .
