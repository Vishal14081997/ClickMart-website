import multer from "multer";

const storage = multer.diskStorage({
    // destination: function (req, file, cb) {
    //     cb(null, "uploads/")
    // },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + "-" + file.originalname
        console.log("uniqueName",uniqueName);
        cb(null, uniqueName)
    }

})
export const upload = multer({ storage: storage })