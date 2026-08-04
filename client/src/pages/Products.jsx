import { Plus } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Products = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Products</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage product for your store
          </p>
        </div>

        <button className="flex items-center gap-2 bg-primary hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl transition-all duration-300 ">
          <Plus size={18} />

          <Link to={"/add-product"}>
            Add Product
          </Link>

        </button>
      </div>
      <div>
        <ProductCard/>
      </div>
    </div>
  )
}

export default Products