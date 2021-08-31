const express = require("express");
const router = express.Router();
const {
	signIn,
	signOut,
	signUp,
	sendOtp,
	verifyOtp,
	forgotPassword,
	changePassword,
} = require("../controller/auth.controller");

router.post("/signIn", signIn);
router.get("/signOut", signOut);
router.post("/signUp", signUp);

router.post("/SendOTP", sendOtp);
router.post("/verifyOTP", verifyOtp);

router.post("/forgotPassword", forgotPassword);
router.post("/changePassword", changePassword);

module.exports = router;
