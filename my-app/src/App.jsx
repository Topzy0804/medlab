import { useState } from 'react'
import './App.css'
import React from 'react'
import Navbar from './component/navbar.jsx'
import Registration from './auth/registration.jsx'
import Footer from './component/footer.jsx'
import Login from './auth/login.jsx'

function App()  {

  return (
    
    <div className="App">
      <Login />
      <Footer />
    </div>
  )
}

export default App
