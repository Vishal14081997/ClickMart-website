import mongoose from "mongoose"

const dbConnect = async () => {
    try {
        mongoose.connect("mongodb://localhost:27017/clickMartDB")
        console.log("mongodb connected ✅ ");
    } catch (error) {
        console.log("mongodb error ❌");
    }
}
export default dbConnect;
