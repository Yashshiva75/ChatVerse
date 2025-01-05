import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Signup from './Components/SIgnup';
import Home from './Components/Home';
import Login from './Components/Login';
const App = () => {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Signup/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route/>
      </Routes>
    </div>
  )
}

export default App
