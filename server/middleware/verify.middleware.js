import jwt from "jsonwebtoken"
import User from "../models/User.js"

const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        // console.log(authHeader);
        const token = authHeader.split(" ")[1]
        // console.log("token:",token);

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        //   console.log(decoded);

        const user = await User.findById(decoded.userId)
        //   console.log(user);
        if (!user) {
            return res.status(401).json({ message: "User not found" })
        }
        req.user = user;
        // req.userId =user._id 

        next();

    } catch (error) {
        console.log("Jwt verification error", error.message);
        return res.status(401).json({ message: "Invalid or expired token" })
    }
}

export default verifyToken;