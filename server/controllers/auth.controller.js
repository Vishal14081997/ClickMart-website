import User from "../models/User.js"
import jwt from "jsonwebtoken"

export const signUp = async (req, res) => {
    try {
        const { full_name, email, phone_no, password, userType } = req.body;

        const user = await User.findOne({ email: email }).select("email full_name")
        // console.log(user);

        if (user) {
            return res.status(400).json({ message: "user aleady exists" })
        }

        const newUser = await User.create({ full_name, email, phone_no, password, userType })

        res.status(201).json({
            message: "signup success",
            data: newUser
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })

    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email })
        console.log(user);

        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid password" })
        }

        const payload = {
            userId: user._id,
            full_name: user.full_name,
            email: user.email,
            userType: user.userType
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" })

        res.status(200).json({
            message: "login success",
            data: { user, token }
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
}
export const profileget = (req,res)=>{
    try {
        const getProfileuser = req.user
        console.log("profile get user" , getProfileuser);
        
    } catch (error) {
        console.log(error.message);
    }
}
