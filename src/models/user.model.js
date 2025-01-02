import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true,"Username is required"],
        unique: true
    },
    email:{
        type : String,
        required : [true,"Email is required"],
        unique: true
    },
    password:{
        type: String,
        required: [true,"Password is required"]
    },
    forgetPasswordToken: String,
    forgetPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date

})
const User = mongoose.models.users || mongoose.model("User",userSchema)

export default User