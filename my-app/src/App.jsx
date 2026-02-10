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

import Sidebar from './Admin/sidebar.jsx'
import AdminNavbar from './Admin/adminNavbar.jsx'
import AdminDoctorPage from './Admin/adminDoctorPage.jsx'
import AdminPatientPage from './Admin/adminPatientPage.jsx'
import AdminAppointmentPage from './Admin/adminAppointmentPage.jsx'
import AdminPharmacyPage from './Admin/adminPharmacyPage.jsx'
import AdminBlogsPage from './Admin/adminBlogsPage.jsx'
import AdminDashboard from './Admin/adminDashboard.jsx'
import AddDoctorPage from './Admin/addDoctorPage.jsx'

import { UserProvider } from './auth/userContext.jsx'
import ProtectedRoute from './context/protectedRoute.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [isAdminSidebarOpen, setIsAdminSidebarOpen] = useState(false);

  const toggleAdminSidebar = () => {
    setIsAdminSidebarOpen(!isAdminSidebarOpen);
  };

  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* PUBLIC ROUTES GROUP */}
            <Route
              path="/*"
              element={
                <>
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
                    <Route path="/testimonies" element={<Testimonials />} />
                  </Routes>
                  <Footer />
                </>
              }
            />

            {/* ADMIN ROUTES GROUP */}
            <Route
              path="/admin/*"
              element={
                <div className="admin-layout">
                  <AdminNavbar onToggle={toggleAdminSidebar} />
                  <div className="admin-container" style={{ display: 'flex' }}>
                    <Sidebar isOpen={isAdminSidebarOpen} />
                    <main className="admin-main-content" style={{ flexGrow: 1 }}>
                      <Routes>
                        <Route path="dashboard" element={<AdminDashboard />} />
                        <Route path="blogs" element={<AdminBlogsPage />} />
                        <Route path="doctors" element={<AdminDoctorPage />} />
                        <Route path="patients" element={<AdminPatientPage />} />
                        <Route path="appointments" element={<AdminAppointmentPage />} />
                        <Route path="pharmacy" element={<AdminPharmacyPage />} />
                        <Route path="add-doctor" element={<AddDoctorPage />} />
                      </Routes>
                    </main>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

{/* // ReactDOM.createRoot(document.getElementById('root')).render(
//   <UserProvider>
//     <App />
//   </UserProvider>,
// ) */}

export default App
