import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar'

const DashboardLayout = () => {
    return (
        <>
            <div className='flex'>
                <div className='w-1/4'>
                    <Sidebar />
                </div>
                <div className='flex-1 p-6'>
                    <div>
                        <Topbar />
                    </div>
                    <div className='mt-6'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout