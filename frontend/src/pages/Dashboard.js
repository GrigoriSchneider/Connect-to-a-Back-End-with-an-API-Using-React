import React from 'react'
import { Link } from 'react-router-dom'
import { Logo, Footer } from '../components'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import './main.scss'

const Dashboard = () => {
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
          <Link to='/dashboard' className="main-nav-item">
            <FaUserCircle />
            User
          </Link>
          <Link to='/' className="main-nav-item">
            <FaSignOutAlt />
            Sign Out
          </Link>
        </div>
      </nav>

      {/* main */}
      <main class="main bg-dark">
        <div class="header">
          <h1>Welcome back<br />Tony Jarvis!</h1>
          <button class="edit-button">Edit Name</button>
        </div>
        <h2 class="sr-only">Accounts</h2>
        <section class="account">
          <div class="account-content-wrapper">
            <h3 class="account-title">Argent Bank Checking (x8349)</h3>
            <p class="account-amount">$2,082.79</p>
            <p class="account-amount-description">Available Balance</p>
          </div>
          <div class="account-content-wrapper cta">
            <button class="transaction-button">View transactions</button>
          </div>
        </section>
        <section class="account">
          <div class="account-content-wrapper">
            <h3 class="account-title">Argent Bank Savings (x6712)</h3>
            <p class="account-amount">$10,928.42</p>
            <p class="account-amount-description">Available Balance</p>
          </div>
          <div class="account-content-wrapper cta">
            <button class="transaction-button">View transactions</button>
          </div>
        </section>
        <section class="account">
          <div class="account-content-wrapper">
            <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
            <p class="account-amount">$184.30</p>
            <p class="account-amount-description">Current Balance</p>
          </div>
          <div class="account-content-wrapper cta">
            <button class="transaction-button">View transactions</button>
          </div>
        </section>
      </main>

      {/* footer */}
      <Footer />
    </>
  )
}

export default Dashboard