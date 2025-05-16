import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './Components/Footer'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
const App = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>    
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
     </BrowserRouter> 
    </>
  )
}

export default App
