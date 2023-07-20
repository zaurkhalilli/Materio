import React from 'react'
import Home from "./Pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login/Login"
import Pricing from "./Pages/Pricing/Pricing"
import Layout from "./Layout/Layout";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home/>} />
          <Route index path='/about' element={<Login/>} />
          <Route index path='/blog' element={<Pricing/>} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
