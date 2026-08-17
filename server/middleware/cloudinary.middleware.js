import cloudinary from "../config/cloudnary.js";

const uploadToClodinary = async (req, res, next) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "click-mart"
        })
        // console.log("result:", result);
        req.imageUrl = result.secure_url
        next()
    } catch (error) {
        next(error)
    }
}
export default uploadToClodinary;