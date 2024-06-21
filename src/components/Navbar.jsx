import React from 'react'

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
                        <a href="/">Home</a>
                        </li>
                        <li>
                        <a href="/">About</a>
                        </li>
                        <li>
                        <a href="/">Services</a>
                        </li>
                        <li>
                        <a href="/">Product</a>
                        </li>
                        <li>
                        <a href="/">Contact</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </>
  )
}

export default Navbar;