import express from "express"
import dbConnect from "./config/db.js"
import authRoutes from "./routes/auth.route.js"
import adminRoutes from "./routes/admin.route.js"
import cors from "cors"

import dotenv from "dotenv"
dotenv.config()

const app = express();

app.use(cors())
app.use(express.json())
app.use("/auth",authRoutes)
app.use("/admin", adminRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
    dbConnect()
})
