import React from 'react'
import { Link } from 'react-router-dom'
import { Logo, Footer } from '../components'
import { FaUserCircle } from 'react-icons/fa'
import './main.scss'


const Register = () => {



  return (
    <>
      <nav className="main-nav">
        {/* Logo */}
        <div className='main-nav-logo'>
          <Link to='/'>
            <Logo />
            <h1 className="sr-only">Argent Bank</h1>
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

      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <FaUserCircle />
          <h1>Sign In</h1>
          <form>
            <div className='input-wrapper'>
              <label htmlFor='username'>Username</label>
              <input type="text" id="username" />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='password'>Password</label>
              <input type="password" id="password" />
            </div>
            <div className='input-remember'>
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
          </form>
          <Link to='/dashboard' className="sign-in-button">Sign In</Link>
        </section>

      </main>
      <Footer />
    </>
  )
}

export default Register