const { signInModel, signUpModel, otpModel } = require("../model/auth.model");
const asyncWrapper = require("../middleware/async");

const signIn = asyncWrapper(async (req, res, next) => {
	res.status(201).json({ status: 'success', data: "Sign in successful" });
});
const signOut = asyncWrapper(async (req, res, next) => {
	res.status(201).json({ status: 'success', data: "Sign Out successful" });
});
const signUp = asyncWrapper(async (req, res, next) => {
	res.status(201).json({ status: 'success', data: "Registration successful" });
});
const sendOtp = asyncWrapper(async (req, res, next) => {
	res.status(201).json({ status: 'success', data: "OTP sent successful" });
});
const verifyOtp = asyncWrapper(async (req, res, next) => {
	res.status(201).json({ status: 'success', data: "OTP verified successful" });
});
const forgotPassword = asyncWrapper(async (req, res, next) => {
	res.status(201).json({ status: 'success', data: "forgot Password successful" });
});
const changePassword = asyncWrapper(async (req, res, next) => {
	res.status(201).json({ status: 'success', data: "change password successful" });
});

module.exports = {
	signIn,
	signOut,
	signUp,
	sendOtp,
	verifyOtp,
	forgotPassword,
	changePassword,
};
