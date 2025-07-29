import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const { user, logout, credit } = useContext(AppContext)
  const { setShowLogin } = useContext(AppContext)

  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between px-4 sm:px-10 py-4 bg-gradient-to-b from-white/70 to-white shadow-sm backdrop-blur-md rounded-md'>
      <Link to='/'>
        <img src={assets.black_on_trans} alt="logo" className='w-28 sm:w-32 lg:w-40 hover:scale-105 transition-transform duration-300' />
      </Link>

      <div>
        {user ? (
          <div className='flex items-center gap-2 sm:gap-4'>
            <button
              onClick={() => navigate('/buy')}
              className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 shadow-sm'
            >
              <img className='w-5' src={assets.credit_star} alt="credit" />
              <p className='text-xs sm:text-sm font-medium text-gray-700'>Credit Left: {credit}</p>
            </button>

            <p className='text-gray-600 hidden sm:block pl-4 text-sm font-medium'>
              Hi, {user.name}
            </p>

            <div className='relative group cursor-pointer'>
              <img
                src={assets.profile_icon}
                className='w-10 rounded-full shadow-md transition-transform duration-300 hover:scale-105'
                alt="profile"
              />
              <div className='absolute hidden group-hover:block top-12 right-0 z-10'>
                <ul className='bg-white border shadow-lg rounded-md text-sm text-gray-800 w-28'>
                  <li
                    onClick={logout}
                    className='py-2 px-4 hover:bg-gray-100 cursor-pointer transition-colors rounded-md'
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-3 sm:gap-6'>
            <p
              onClick={() => navigate('/buy')}
              className='cursor-pointer text-gray-700 hover:text-black text-sm transition-colors'
            >
              Pricing
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className='bg-zinc-800 hover:bg-black text-white px-6 sm:px-8 py-2 text-sm rounded-full transition-colors shadow-md'
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
