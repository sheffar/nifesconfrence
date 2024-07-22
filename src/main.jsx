import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import {Nav} from "./components/Nav"
import { Merchandisepage } from './pages/Merchandisepage'
import { Register } from './pages/Register'
import { Footer } from './components/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Merchandise' element={<Merchandisepage/>} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
