import React, { useState } from 'react'
import WelcomePanel from '../components/WelcomePanel'
import { Link } from 'react-router-dom'
import axios from "axios"

const Signup = () => {
    const [formData, SetFormData] = useState({
        full_name: "",
        email: "",
        phone_no: "",
        password: "",
        userType: ""
    })

    // const handleChange = (e) => {
    //     SetFormData((prev) => ({
    //         ...prev,
    //         [e.target.name]: e.target.value,
    //     }));
    // };

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        SetFormData({ ...formData, [e.target.name]: e.target.value })

    }
    console.log(formData);

    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/auth/signup", formData)
            console.log(res.data);
        } catch (error) {
            console.log(error.response?.data);
        }
    }

    return (
        <>
            <div className="flex bg-secondary">

                {/* Left Section */}
                <div className="w-1/2 flex justify-center items-center">
                    <WelcomePanel />
                </div>

                {/* Right Section */}
                <div className="w-1/2 flex items-center justify-center bg-secondary">
                    <div className="w-[500px] bg-white rounded-2xl shadow-2xl p-10">

                        <h1 className="text-4xl font-bold text-center text-primary mb-2">
                            Create Account
                        </h1>

                        <p className="text-center text-gray-500 mb-8">
                            Join <span className="font-bold text-primary">ClickMart</span> and start shopping today.
                        </p>

                        <form onSubmit={handleSignup} className="space-y-2">
                            <input
                                type="text"
                                name='full_name'
                                value={formData.full_name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            />

                            <input
                                type="email"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            />

                            <input
                                type="tel"
                                name="phone_no"
                                value={formData.phone_no}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            />

                            <input
                                type="password"
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            />

                            <select
                                name='userType'
                                value={formData.userType}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option>Admin</option>
                                <option>Customer</option>
                                <option>Agency</option>
                            </select>

                            <button
                                type='submit'
                                className="w-full bg-primary hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-300"
                            >
                                Create Account
                            </button>

                        </form>

                        <p className="text-center text-gray-600 mt-6">
                            Already have an account?
                            <Link to={"/login"}
                                className="text-primary font-semibold hover:underline"
                            >
                                Login
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup