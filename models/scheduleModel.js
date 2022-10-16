/**
 * Contains a schema for a schedule Meeting
 */

// import necessary libraries
const mongoose= require("mongoose");

//Creating Schedule Schema.
const scheduleSchema= new mongoose.Schema({
    
                date:{
                    type:Date,
                    required:true,
                },
                startTime:{
                    type:Date,
                    required:true,
                },
                endTime:{
                    type:Date,
                    required:true,
                },
                availability:{
                    rooms:{
                        R1:{
                            type:Boolean,
                            required:true,
                            },
                        R2:{
                            type:Boolean,
                            required:true,
                        },
                        R3:{
                            type:Boolean,
                            required:true,
                        },
                        R4:{
                            type:Boolean,
                            required:true,
                        },
                        R5:{
                            type:Boolean,
                            required:true,
                        },
                    },
                },
                user:{
                    type:mongoose.Schema.ObjectId,
                    ref:"User",
                    required:true
                },
});

// Exporting scheduleSchema
module.exports= mongoose.model("schedule",scheduleSchema);