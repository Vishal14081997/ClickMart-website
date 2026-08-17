import React from 'react'

const CreateProduct = () => {
  return (
    <div className='flex w-full bg-white rounded-2xl shadow-md overflow-hidden border border-orange-100'>

      {/* Left Side*/}
      <div className='w-1/2 bg-orange-50 flex items-center justify-center'>
        <img
          src=""
          alt="Product preview"
          className='w-full h-full object-cover'
        />
      </div>

      {/* Right Side  */}
      <div className='w-1/2 p-8'>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          New Product
        </h2>

        <form className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <textarea
            name="description"
            placeholder="Description"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <select
            name="categoryId"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
          </select>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300"
          >
            Save Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateProduct