import { sendverficationcode } from "../middleware/Email.js";
import usermodel from "../models/user.js";

const register = async (req, res) => {
    try {
        const { email, password, name } = req.body;

        // Validate required fields
        if (!email || !password || !name) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Check if the user already exists
        const existingUser = await usermodel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Generate a 6-digit verification code
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

        // Create and save a new user with the verification code
        const newUser = new usermodel({
            email,
            password,
            name,
            verificationCode // Ensure this field matches the schema in user.js
        });
        await newUser.save();
        sendverficationcode(user.email, verificationCode)

        // Respond with success message
        res.status(201).json({
            success: true,
            message: "User registered successfully, verification code generated",
            verificationCode // Optional: Return the code in response if needed for testing
        });
    } catch (error) {
        // Handle server errors
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

export { register };
