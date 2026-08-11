import Category from "../models/Category.js";

export const createCategory = async (req, res) => {
    try {
        const { CName, CDesc } = req.body;

        const existCategory = await Category.findOne({ CName: CName });

        if (existCategory) {
            return res.status(400).json({
                success: false,
                message: "Category already exists"
            })
        }

        const category = await Category.create({
            CName, CDesc
        })

        res.status(201).json({
            success: true,
            message: "Category created successfully",
            data: category
        })

    } catch (error) {
        console.log("createCategory erorr", error.message);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
export const getAllCategory = async (req, res) => {
    try {
        const category = await Category.find().sort({ createdAt: -1 })

        res.status(200).json({
            success: true,
            message: "Get all category",
            total:category.length,
            data: category
        })


    } catch (error) {
        console.log("getAllCategory erorr", error.message);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}