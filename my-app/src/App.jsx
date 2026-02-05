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
import Contact from './pages/contact.jsx'
import Appointment from './pages/appointment.jsx'
// import TimeTable from './pages/timeTable.jsx'
import Testimonials from './pages/testimonies.jsx'

import { UserProvider } from './auth/userContext.jsx'
import ProtectedRoute from './context/protectedRoute.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App()  {

  return (
    <UserProvider>

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          {/* <Route path="/time-table" element={<TimeTable />} /> */}
          <Route path="/testimonies" element={<Testimonials />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </UserProvider>
  );
}

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <UserProvider>
//     <App />
//   </UserProvider>,
// )

export default App
