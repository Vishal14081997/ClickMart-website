import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import Login from './pages/Login'
import Signup from './pages/Signup'
import Login from './pages/Login'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Categories from './pages/Categories'
import Products from './pages/Products'
import AgencyList from './pages/AgencyList'
import Customer from './pages/Customer'
import CreateCategory from './components/CreateCategory'
import CreateProduct from './components/CreateProduct'
import {Toaster} from "react-hot-toast"


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path:"/",
      element:<DashboardLayout/>,
      children:[
        {path:"dashboard" , element:<Dashboard/>},
        {path:"categories" , element:<Categories/>},
        {path:"products" , element:<Products/>},
        {path:"agency" , element:<AgencyList/>},
        {path:"customer" , element:<Customer/>},
        {path:"add-category" ,element:<CreateCategory/>},
        {path:"add-product" ,element:<CreateProduct/>}
      ]
    }

  ])

  return (
    <>
      <Toaster position='top-right'/>
      <RouterProvider router={router} />
    </>
  )
}

export default App