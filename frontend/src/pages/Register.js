import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../components'
import { FaUserCircle } from 'react-icons/fa'
import './main.css'

const Register = () => {
  return (
    <>
      <nav className="main-nav">
        {/* Logo */}
        <div className='main-nav-logo'>
          <Link to='/'>
            <Logo />
          </Link>
        </div>
        {/* Register Link */}
        <div className='main-nav-item'>
          <Link to='/register'>
            <FaUserCircle />
            Sign In
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Register