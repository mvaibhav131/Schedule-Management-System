
const mongoose= require("mongoose");

const scheduleSchema= new mongoose.Schema({
    schedule:{
        meetings:[
            {
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
            },
        ],
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
});

module.exports= mongoose.model("schedule",scheduleSchema);