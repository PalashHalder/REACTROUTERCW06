import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div className='w-full bg-black py-4'>
            <div className="container flex justify-between items-center">
                <div className="w-28">
                    <h className="text-white">Logo</h>
                </div>
                <div className="w-4/5">
                    <ul className='flex items-center gap-x-5 text-white justify-end'>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/services">Services</Link>
                        </li>
                        <li>
                        <Link to="/product">Product</Link>
                        </li>
                        <li>
                        <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </>
  )
}

export default Navbar;