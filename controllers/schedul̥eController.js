
// import necessary files

const Schedule= require("../models/scheduleModel");
const catchAsyncError = require("../middleware/catchAsyncError");




 // add the new schedule to the database

 const newSchedule= catchAsyncError(async(req,res)=>{
    const available = {
        R1: req.body.R1,
        R2: req.body.R2,
        R3: req.body.R3,
        R4: req.body.R4,
        R5: req.body.R5,
    };
    for (var key of Object.keys(available)) {
        if (available[key] === undefined) {
          available[key] = false;
        }
      }
      const {date,startTime,endTime,user}= req.body;
       
      const schedule= await Schedule.create({
        date,
        startTime,
        endTime,
        availability:{
            rooms:{
                R1:available.R1,
                R2:available.R2,
                R3:available.R3,
                R4:available.R4,
                R5:available.R5,
            },
         },
         user:req.user.id,
      });
   
     res.status(200).json({
        success:true,
        schedule,
     });
 });

 // schedule => GET (if user is Authenticated)
const getSchedule = catchAsyncError(async(req, res, next)=>{
const schedules = await Schedule.find();

if(!schedules){
    res.status(500).json({
        success:false,
        message:"Schedule Not Found"
    });
 }
  res.status(200).json({
    success:true,
    schedules,
 });
});

//Update Schedule
 
const updateSchedule=catchAsyncError(async(req,res)=>{
    let schedule= await Schedule.findById(req.params.id);
    if(!schedule){
       return res.status(404).json({
           success:false,
           message:"Product not found"
       })
    }
    updateSchedule = await Schedule.findByIdAndUpdate(req.params.id,req.body,{
       new:true,
       runValidators:true,
       useFindAndModify:false
   });
   res.status(200).json({
       success:true,
       updateSchedule,
   });
   });

// Delete Schedule
const deleteSchedule=catchAsyncError(async(req,res)=>{
    const schedule= await Schedule.findById(req.params.id);
    if(!schedule){
        return res.status(500).json({
            success:false,
            message:"Schedule not found"
        })
    }
   await schedule.remove();
   res.status(200).json({
    success:true,
    message:"Scheduled deleted successfully"
   });
});
 


 module.exports={newSchedule,getSchedule,updateSchedule,deleteSchedule}