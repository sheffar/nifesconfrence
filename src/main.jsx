import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import { Nav } from "./components/Nav"
import { Merchandisepage } from './pages/Merchandisepage'
import { Register } from './pages/Register'
import { Footer } from './components/Footer'
import { Notfound } from './components/Notfound'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/merchandise' element={<Merchandisepage />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
