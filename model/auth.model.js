const mongoose = require('mongoose');
 const signInSchema = new mongoose.Schema({
    userName: {
        type:String,
        required: [true, 'must provide User Name'],

    },
    password: {
        type:String,
        required: [true, 'must provide Password'],
        minlength: [8, 'Password length at least more than 8 character '],
    }
 });
 const SchemaSignIn =  mongoose.model("signInModel", signInSchema);

 const signUpSchema = new mongoose.Schema({
    userName: {
        type:String,
        required: [true, 'must provide User Name'],

    },
    password: {
        type:String,
        required: [true, 'must provide Password'],
        minlength: [8, 'Password length at least more than 8 character '],
    },
    email: {
        type:String,
        required: [true, 'must provide Email'],
    }
 });
 const SchemaSignUp =  mongoose.model("signUpModel", signUpSchema);

 const otpSchema = new mongoose.Schema({
    userName: {
        type:String,
        required: [true, 'must provide User Name'],

    },
    otp: {
        type:String,
        required: [true, 'must provide Password'],
    }
 });
 const SchemaOtp =  mongoose.model("otpModel", otpSchema);

 module.exports = {
    SchemaSignIn,
    SchemaSignUp,
    SchemaOtp
 }