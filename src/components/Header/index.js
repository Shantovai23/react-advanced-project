import React from 'react'
import './style.scss'
import Logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

const Header=()=>{
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
                  <ul>
                   <li>
                       <Link to='/registration'>
                           Register
                       </Link>
                   </li>
                  </ul>
              </div>
          </div>
        </header>
    )

}

export default Header