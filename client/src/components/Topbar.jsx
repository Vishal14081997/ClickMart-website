import React from 'react'
import { CircleUserRound, Search } from "lucide-react"

const Topbar = () => {
    return (
        <>
            <div className='flex justify-between items-center w-full gap-10'>
                <div className='flex items-center w-full gap-2 border-2 border-gray-300 rounded-2xl px-4 py-2 text-gray-500 '>
                    <Search />
                    <input type="text" placeholder='Global Search...' className='outline-none'/>
                </div>

                <div className='text-gray-500'>
                    <CircleUserRound />
                </div>
            </div>
        </>
    )
}

export default Topbar