import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    full_name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    phone_no: {
        type: String,
    },
    password: {
        type: String
    },
    profile_pic: {
        type: String
    },
    userType: {
        type: String,
        enum: ["Admin", "Agency", "Customer"],
        default: "Customer"
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }
},
    { timestamps: true }
);
const User = mongoose.model("user", UserSchema)
export default User;