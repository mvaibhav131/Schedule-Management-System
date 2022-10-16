
// import necessary files

const Schedule= require("../models/scheduleModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const { set } = require("mongoose");


 // add the new schedule to the database
 const newSchedule= catchAsyncError(async(req,res)=>{
    // Checking Room  availability
    const available = {
        R1: req.body.R1,
        R2: req.body.R2,
        R3: req.body.R3,
        R4: req.body.R4,
        R5: req.body.R5,
    };
    // if You want to set your meeting in R2 then showing R2 is true and remaining rooms is false;
    for (var key of Object.keys(available)) {
        if (available[key] === undefined) {
          available[key] = false;
        }
      }
      const {date,startTime,endTime,user}= req.body;
       var MeetingData=[];
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
         // the user is access those  are login (containing id parameters)
         user:req.user.id,
      });
      // Checking conditions of Time and date collapsing
    
      schedule.modifiedPaths((elem,ind)=>{ 
        let scheduleDate=elem.date.trim().split(":");
        let scheduleStartTime=elem.startTime.trim().split("+");
        let scheduleEndTime=elem.endTime.trim().split("+");
  
        let  currentDate=scheduleDate[0];
        let currentStartTime=scheduleStartTime[1];
        let currentEndTime=scheduleEndTime[1];

        let setStartTime= currentStartTime.trim().split(":");
        let startTimeHours=setStartTime[0];
        let startTimeMinutes=setStartTime[1];

        let setEndTime= currentEndTime.trim().split(":");
        let endTimeHours=setEndTime[0];
        let endTimeMinutes=setEndTime[1];
  
        for(let i=0;i<MeetingData.length;i++){
            // Check condition if date and startTime is equal
           if(MeetingData[i][0]===currentDate && MeetingData[i][1]===currentStartTime ){
             return res.status(500).json({
                  success:false,
                  message:"These Schedule Time is Not Available Please Schedule Diffrent Time"
              });
           }
           // Check condition as same date but time changes in hours
           else if(MeetingData[i][0]===currentDate && Number(MeetingData[i][2][0])>Number(startTimeHours)){
            return res.status(500).json({
                success:false,
                message:"These Schedule Time is Not Available Please Schedule Diffrent Time"
            });
           }
           // condition is checking the meeting end time before starting the start time of another meetings.
           else if(MeetingData[i][0]===currentDate && Number(MeetingData[i][1][0])>Number(endTimeHours)<Number(startTimeHours)){
            return res.status(500).json({
                success:false,
                message:"These Schedule Time is Not Available Please Schedule Diffrent Time"
            });
           }
           // condition checking for start time is same but diffrence in minutes
           else if(MeetingData[i][0]===currentDate && Number(MeetingData[i][1][0])===Number(startTimeHours) && (Number(MeetingData[i][1][1])>Number(endTimeMinutes) || Number(MeetingData[i][2][1])<Number(startTimeMinutes))){
            return res.status(500).json({
                success:false,
                message:"These Schedule Time is Not Available Please Schedule Diffrent Time"
            });
           }
           else{
           let Data=[];
           Data.push(currentDate,currentStartTime,currentEndTime);
           MeetingData.push(Data);
          };
        };
    });
    res.status(200).json({
        success:true,
        message:"New Meeting Schedule Successfully",
        schedule,
     });
});

 // Those person is login these (Get Request) showing all schedule of those person.
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
// if you want to change the schedule date,startTime,endTime.

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
//If you want delete schedule meeting.

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