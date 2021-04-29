import React from 'react'
import './style.scss'
import Logo from '../../assets/logo.png'

const Header=()=>{
    return(
        <header className='header'>
          <div className="wrap">
              <div className="logo">
                  {/* <img src={Logo} alt="logo"/> */}
                  <h2>BuyVai.com</h2>
              </div>
          </div>
        </header>
    )

}

export default Header