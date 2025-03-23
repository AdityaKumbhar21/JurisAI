import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
  
    <header className="bg-primary p-4 flex justify-center font-sec items-center mx-4 rounded-2xl mt-4 fixed top-0 left-0 right-0 z-50 relative">
      <div className="text-4xl font-bold text-center px-6">juris.ai</div>
      <div className="absolute right-6">
        <Link
          to="/logout"
          className="inline-block border border-black text-center text-md bg-white rounded-lg px-6 py-2 hover:bg-black hover:text-white transition whitespace-nowrap w-40">
          Logout
        </Link>
      </div>
    </header>

  )
}

export default NavBar