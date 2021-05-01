import React from 'react'
import './default.scss'
import {Switch,Route} from 'react-router-dom'
import Registration from './pages/registration/index'
import HomePage from './pages/Homepage/index'
import MainLayout from './layouts/MainLayout'



function App() {
  return (
    <div className="App">
    <Switch>
     <Route exact  path='/' render={()=>(
       <MainLayout>
         <HomePage/>
       </MainLayout>
     )} />
     <Route path='/registration' render={()=>(
       <MainLayout>
         <Registration/>
       </MainLayout>
     )} />
     </Switch>
    </div>
  );
}

export default App;
