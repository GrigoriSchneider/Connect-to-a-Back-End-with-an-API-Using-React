import React ,{ useEffect, useState}from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { userInfo,changeUserInfo } from '../action/index';
import { Link , useNavigate} from 'react-router-dom'
import { Logo, Footer, Account } from '../components'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import './main.scss'
import {accounts} from '../services/accounts'

const Dashboard = () => {
  const user = useSelector((state) => state.user); //get user state
  const dispatch = useDispatch()
  
  //get user info
  useEffect(() => {
      dispatch(userInfo());
  },[dispatch]);

  //get value of input
  const [firstName, setfirstName] = useState('');
const [lastName, setlastName] = useState('');
  const handleInputChange = (event) => {
      event.target.id === 'firstName' 
      ? setfirstName(event.target.value) 
      : setlastName(event.target.value) 
  }
  
  //change user.firstName & user.lastName in API
  const onSubmit = (event) =>{
      event.preventDefault();
      dispatch(changeUserInfo(firstName,lastName))
      setShowResults(false)
  }
 
  //handle display of form
  const [showResults, setShowResults] = useState(false)
  const displayForm = () => setShowResults(true)
  const removeForm = () => setShowResults(false)

  

  const navigate = useNavigate()
  if(!user.logged){
    console.log(user)
    navigate("/")
  }



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
        {!showResults ? <h1>Welcome back  <br />{user.firstName} {user.lastName}</h1> : <h1>Welcome back</h1>}

           {showResults && 
                <form onSubmit={onSubmit}>
                    <div className="input">
                        <input required className="input-edit" type="text" id="firstName" placeholder={user.firstName}  value={firstName} onChange={handleInputChange}/>
                        <input required className="input-edit" type="text" id="lastName" placeholder={user.lastName} value={lastName} onChange={handleInputChange}/>
                    </div>
                    <div className="buttons">
                        <button className="edit-button form-button" type="submit"  >Save</button>
                        <button className="edit-button form-button" type='button' onClick={removeForm} >Cancel</button>
                    </div>
                </form>
                 }
                {!showResults &&  <button className="edit-button" onClick={displayForm}>Edit Name</button> }
        </div>

        <h2 class="sr-only">Accounts</h2>
        {accounts.map((account,index) =>
                <Account key={index} title={account.title} amount={account.amount} description={account.description} />
            )};
      </main> 

      {/* footer */}
      <Footer />
    </>
  )
}

export default Dashboard