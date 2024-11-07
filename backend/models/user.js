import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    verificationCode: { type: String }  // Ensure this field is defined here
});

const usermodel = mongoose.model("User", userSchema);
export default usermodel;

