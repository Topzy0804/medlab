import { useState } from 'react'
import './App.css'
import React from 'react'
import Navbar from './component/navbar.jsx'
import Registration from './auth/registration.jsx'
import Footer from './component/footer.jsx'
import Login from './auth/login.jsx'
import Home from './pages/home.jsx'

function App()  {

  return (
    
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
