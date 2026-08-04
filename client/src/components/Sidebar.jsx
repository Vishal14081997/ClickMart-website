import React from 'react'
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='bg-secondary h-screen px-10'>
      <div className='flex justify-center'>
        <img className='w-40' src={logo} alt="" />
      </div>
      <div className='flex flex-col gap-3'>

        <Link to={"/dashboard"}>
          <div className='font-semibold border-1 border-gray-300 rounded-2xl p-3 hover:text-white hover:bg-primary'>Dashboard</div>
        </Link>

        <Link to={"/categories"}>
          <div className='font-semibold border-1 border-gray-300 rounded-2xl p-3 hover:text-white hover:bg-primary'>Categories</div>
        </Link>

        <Link to={"products"}>
          <div className='font-semibold border-1 border-gray-300 rounded-2xl p-3 hover:text-white hover:bg-primary'>Prodcuts</div>
        </Link>

        <Link to={"/agency"}>
          <div className='font-semibold border-1 border-gray-300 rounded-2xl p-3 hover:text-white hover:bg-primary'>Agency List</div>
        </Link>

        <Link to={"/customer"}>
          <div className='font-semibold border-1 border-gray-300 rounded-2xl p-3 hover:text-white hover:bg-primary'>Customer List</div>
        </Link>

        <div className='font-semibold border-1 border-gray-300 rounded-2xl p-3 hover:text-white hover:bg-primary'>Sales Order</div>
      </div>

    </div>
  )
}

export default Sidebar