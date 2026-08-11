import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    CName: {
        type: String,
        required: true,
        trim: true,
    },
    CDesc: {
        type: String,
        trim: true,
    },
    image_url: {
        type: String
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }

},
    { timestamps: true }
);
const Category = mongoose.model("categories", categorySchema)

export default Category;