
const express = require("express");
const { newSchedule, getSchedule, updateSchedule, deleteSchedule } = require("../controllers/schedul̥eController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.post("/schedule",isAuthenticatedUser,newSchedule);
router.get("/schedule",getSchedule);
router.put("/schedule/:id",isAuthenticatedUser,updateSchedule);
router.delete("/schedule/:id",isAuthenticatedUser,deleteSchedule);

module.exports=router;