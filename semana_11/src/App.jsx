import { useState, useEffect, use } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav' 
import Footer from './components/Footer'
import Loading from './components/Loading'

import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'

function App() {
  const usuario = 'Jonathan';
 
  return (
    <>
      <Header>
        <Nav usuario={usuario}/>
      </Header>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/register' element={ <Register />} />
        </Routes>
      </BrowserRouter>

      <Footer descripcion="DV | ToDo APP" />
    </>
  )
}

export default App
