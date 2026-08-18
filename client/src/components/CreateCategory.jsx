import { useState } from "react";
import axios from "axios"
import { toast } from "react-hot-toast"

const CreateCategory = () => {
  const [formData, setFormData] = useState({
    CName: "",
    CDesc: "",
  })
  const [imageFile, setImageFile] = useState(null)
  const [preview, setPreview] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  }
  const token = localStorage.getItem("token")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append("CName", formData.CName)
    data.append("CDesc", formData.CDesc)
    if (imageFile) {
      data.append("category_image", imageFile)
    }
    try {
      const res = await axios.post(`http://localhost:3000/admin/create-category`, data, {
        headers: {
          Authorization: `Bearer ${token} `
        }
      })
      console.log(res.data);

      toast.success(res.data.message)
    } catch (error) {
      console.log(error.response.message);
      toast.error(error.response.data.message)
    }
  }

  return (
    <>
      <div className="flex w-full bg-white rounded-2xl shadow-md overflow-hidden border border-orange-100">
        {/* Left Side - Image Preview */}
        <div className="w-1/2 bg-orange-50 flex items-center justify-center">
          <img
            src={preview}
            alt="Category preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            New Category
          </h2>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <input
              name="CName"
              value={formData.CName}
              onChange={handleChange}
              type="text"
              placeholder="Category Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              name="CDesc"
              value={formData.CDesc}
              onChange={handleChange}
              placeholder="Category Description"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 disabled:opacity-50"
            >
              Save Category
            </button>
          </form>
        </div>
      </div>

    </>
  )
}

export default CreateCategory