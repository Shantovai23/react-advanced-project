import React from 'react'
import './default.scss'
import Header from './components/Header/index'
import Section from './pages/Homepage/index'


function App() {
  return (
    <div className="App">
    <Header/>
    <div className="main">
     <Section/>
    </div>
    </div>
  );
}

export default App;
