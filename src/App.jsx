import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register';
import Forgot from './components/Forgot';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/forgot' element={<Forgot/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
