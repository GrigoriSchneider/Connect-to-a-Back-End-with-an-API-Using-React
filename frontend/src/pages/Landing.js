import React from 'react'
import { Link } from 'react-router-dom'
import { Logo, IconChat, IconMoney, IconSecurity, Footer } from '../components'
import { FaUserCircle } from 'react-icons/fa'
import './main.scss'


const landing = () => {
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
          <Link to='/register' className="main-nav-item">
            <FaUserCircle />
            Sign In
          </Link>
        </div>
      </nav>

      <main>
        <div class="hero">
          <section class="hero-content">
            <h2 class="sr-only">Promoted Content</h2>
            <p class="subtitle">No fees.</p>
            <p class="subtitle">No minimum deposit.</p>
            <p class="subtitle">High interest rates.</p>
            <p class="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section class="features">
          <h2 class="sr-only">Features</h2>
          <div class="feature-item">
            <IconSecurity />
            <h3 class="feature-item-title">You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div class="feature-item">
            <IconChat />
            <h3 class="feature-item-title">More savings means higher rates</h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div class="feature-item">
            <IconMoney />
            <h3 class="feature-item-title">Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default landing 