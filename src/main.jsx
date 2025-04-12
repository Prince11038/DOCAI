import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About.jsx'
import Service from './components/Service.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Error from './components/Error404.jsx'
import MakeAppointment from './components/MakeAppointment.jsx'
import User from './components/User.jsx'
import UserHistory from './components/UserHistory.jsx'
import SignIn from './components/SignIn.jsx'
import Profile from './components/ProfileDetails.jsx'

createRoot(document.getElementById('root')).render(
  <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/home" element={<Home />} />
      <Route path="/makeappointment" element={<MakeAppointment />} />
      <Route path="/userhistory" element={<UserHistory />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<Error/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  </>
)
