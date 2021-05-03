import React from 'react'
import './style.scss'
import Logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/utils'

const Header=(props)=>{
    const {currentUser}=props
    return(
        <header className='header'>
          <div className="wrap">
              <div className="logo">
                  {/* <img src={Logo} alt="logo"/> */}
                  <Link to='/'>
                  <h2>BuyVai.com</h2>
                  </Link>
              </div>
              <div className="callToAction">
              {currentUser && (
                  <ul>
                  <li>
                          <span>{currentUser.displayName}</span>
                      </li>
                      <li>
                          <span style={{cursor:'pointer'}} onClick={()=>auth.signOut()}>Logout</span>
                      </li>
                     
                  </ul>
              )}
                 {!currentUser && (
                    <ul>
                   <li>
                       <Link to='/registration'>
                           Register
                       </Link>
                   </li>
                   <li>
                       <Link to='/login'>
                           Login
                       </Link>
                   </li>
                  </ul>
                 )}
                 
              </div>
          </div>
        </header>
    )

}

Header.defaultProps={
    currentUser:null
};

export default Header