import React from 'react'
import WelcomePanel from '../components/WelcomePanel'


const Signup = () => {
    return (
        <>
            <div className='flex justify-between'>
                {/* left section  */}
                <div className='w-1/2 bg-orange-50  flex justify-center'>
                    <WelcomePanel />
                </div>

                {/* right section  */}
                <div className='w-1/2 bg-orange-50 flex items-center justify-center '>
                    <div className='border-2 bg-white rounded-2xl shadow-2xl p-10 flex flex-col gap-4 '>
                        <h1 className='font-bold text-4xl text-orange-500'>
                            Create Account
                        </h1>
                        <p className='text-gray-500 font-semibold'>Join <span className='text-orange-500'>ClickMart</span> and start shopping today.</p>

                        <form action="" className='flex flex-col gap-4'>
                            <input type="text"  placeholder='UserName' className=' w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-2xl'/>
                            <input type="text"  placeholder='UserName' className=' w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-2xl'/>
                            <input type="text"  placeholder='UserName' className=' w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-2xl'/>
                            <input type="text"  placeholder='UserName' className=' w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-2xl'/>
                            <input type="text"  placeholder='UserName' className=' w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-2xl'/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup