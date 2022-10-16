
// import necessary libraries
const express =require("express");

// import necessary files
const { registerUser, loginUser, logout } = require("../controllers/userController");

// handle HTTP requests
const router= express.Router();

// routing for all /user requests

// /register => POST
router.post("/register",registerUser);
// /login => POST
router.post("/login",loginUser);
// /logout => GET
router.get("/logout",logout);

module.exports=router;