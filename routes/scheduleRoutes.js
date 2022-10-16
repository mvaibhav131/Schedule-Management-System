
// import necessary libraries
const express = require("express");

// import necessary files
const { newSchedule, getSchedule, updateSchedule, deleteSchedule } = require("../controllers/schedul̥eController");

//isAuthenticatedUser cheching the user is login or not before creating schedule
const { isAuthenticatedUser } = require("../middleware/auth");

// handle HTTP requests
const router = express.Router();

// routing for all /schedule requests

// /schedule => POST
router.post("/schedule",isAuthenticatedUser,newSchedule);
// /schedule => GET
router.get("/schedule",isAuthenticatedUser,getSchedule);
// /schedule/:id => PUT
router.put("/schedule/:id",isAuthenticatedUser,updateSchedule);
// /schedule/:id => DELETE
router.delete("/schedule/:id",isAuthenticatedUser,deleteSchedule);

module.exports=router;