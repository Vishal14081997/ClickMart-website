import React from 'react'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'

const Categories = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Categories</h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage product categories for your store
            </p>
          </div>

          <button className="flex items-center gap-2 bg-primary hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl transition-all duration-300 ">
            <Plus size={18} />

            <Link to={"/add-category"}>
              Add Category
            </Link>
          </button>


        </div>
        <div>
          <CategoryCard/>
        </div>
      </div>
    </>
  )
}

export default Categories