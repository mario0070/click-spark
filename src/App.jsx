import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard'
import Landing from './pages/landing'

function App() {
  return (
    <>
       <Routes>
          <Route element={<Landing/>} path='/'/>
          <Route element={<Login/>} path='/login'/>
          <Route element={<Register/>} path='/signup'/>
          <Route element={<Dashboard/>} path='/dashboard'/>
        </Routes>
    </>
  )
}

export default App
