import React from 'react'
import WelcomePanel from '../components/WelcomePanel'

const Login = () => {
    return (
        <>
            <div className='flex justify-between'>
                {/* left section  */}
                <div className='w-1/2 bg-orange-50  flex justify-center'>
                    <WelcomePanel />
                </div>
                {/* right section  */}
                <div className='w-1/2 bg-amber-600'>2</div>
            </div>
        </>
    )
}

export default Login