import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard'
import Landing from './pages/landing'
import Task from './pages/task'

function App() {
  return (
    <>
       <Routes>
          <Route element={<Landing/>} path='/'/>
          <Route element={<Login/>} path='/login'/>
          <Route element={<Register/>} path='/signup'/>
          <Route element={<Dashboard/>} path='/dashboard'/>
          <Route element={<Task/>} path='/task'/>
        </Routes>
    </>
  )
}

export default App
