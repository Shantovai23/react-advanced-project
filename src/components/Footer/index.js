import React from 'react'
import './style.scss'

const Footer=(props)=>{
    let year=new Date().getFullYear()
    return(
        <footer className='footer'>
          <div className='wrap'>
          <p>© BuyVai.com {year}</p>
          </div>
        </footer>
    )
}

export default Footer