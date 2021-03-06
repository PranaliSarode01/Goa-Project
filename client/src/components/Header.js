import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
function Header() {
    const history = useHistory()
    return (
        <div>
            <div className="w-full md:h-16 h-14 text-white md:p-2 shadow-md bg-green-300">
                <nav className="flex md:flex-row md:justify-between md:items-center md:p-2">
                    <div className="md:flex bg-white md:w-10 md:h-10">
                        <h1 className="text-2xl font-bold px-2 pt-1 text-brand-GREEN">JS</h1>
                    </div>
                    <div className="md:space-x-12 space-x-5 px-8">
                        <button className="md:text-2xl font-bold text-white ">Home</button>
                        <button className="md:text-2xl font-bold text-white ">About Us</button>
                        <button className="md:text-2xl font-bold text-white ">Contact Us</button>
                        <Button onClick={() => { history.push('/signin') }} className="md:text-2xl font-bold text-white">Login</Button>
                        <button className="md:text-2xl font-bold text-white bg-red-400 rounded-3xl md:px-4 md:py-1">Book Now</button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
