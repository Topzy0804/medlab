import { useState } from 'react'
import './App.css'
import React from 'react'
import Navbar from './component/navbar.jsx'
import Registration from './auth/registration.jsx'
import Footer from './component/footer.jsx'
import Login from './auth/login.jsx'
import Home from './pages/home.jsx'
import DoctorPage from './pages/doctorPage.jsx'
import Service from './pages/service.jsx'
import AboutUs from './pages/aboutUu.jsx'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App()  {

  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctorPage" element={<DoctorPage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about-us" element={<AboutUs />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
