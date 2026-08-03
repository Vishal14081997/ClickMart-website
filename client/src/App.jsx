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
        {path:"Categories" , element:<Categories/>},
        {path:"products" , element:<Products/>},
        {path:"agency" , element:<AgencyList/>},
        {path:"Customer" , element:<Customer/>},
      ]
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App