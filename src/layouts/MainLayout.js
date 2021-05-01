import React from 'react'
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

const MainLayout=(props)=>{
    return(
    <div className='fullHeight'>
    <Header/>
    <div className="main">
        {props.children}
    </div>
    <Footer/>
    </div>
    )
}

export default MainLayout