import React from 'react'
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Pricing from "./Pages/Pricing/Pricing"
import Layout from "./Layout/Layout";
import Navbar from './Layout/Navbar/Navbar';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
