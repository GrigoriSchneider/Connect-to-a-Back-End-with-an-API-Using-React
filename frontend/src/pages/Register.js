import React, {useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { loginRequest } from '../action';
import { Logo, Footer } from '../components'
import { FaUserCircle } from 'react-icons/fa'
import './main.scss'


const Register = () => {
  const user = useSelector((state) => state.user); //get user state
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
      event.target.id === 'username' 
      ? setEmail(event.target.value) 
      : setPassword(event.target.value) 
  }
  const onSubmit = (event) =>{
      event.preventDefault();
      dispatch(loginRequest(email,password))
  }

  const navigate = useNavigate()
  if (user.logged) {navigate("/dashboard")}


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
          <form onSubmit={onSubmit}>
            <div className='input-wrapper'>
              <label htmlFor='username'>Username</label>
              <input type="text" id="username" onChange={handleInputChange}/>
            </div>
            <div className='input-wrapper'>
              <label htmlFor='password'>Password</label>
              <input type="password" id="password" onChange={handleInputChange} />
            </div>
            <div className='input-remember'>
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button> 
          </form>
         
        </section>

      </main>
      <Footer />
    </>
  )
}

export default Register