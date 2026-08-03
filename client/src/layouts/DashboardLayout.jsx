import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <>
            <div className='flex'>
                <div className='w-1/4'>
                    <Sidebar />
                </div>
                <div className='3/4'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default DashboardLayout