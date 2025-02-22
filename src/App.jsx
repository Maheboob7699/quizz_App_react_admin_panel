import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import Adminpage from './pages/Adminpage'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/admin/*" element={<Adminpage/>}/>
      </Routes>
      
    </>
  )
}

export default App
