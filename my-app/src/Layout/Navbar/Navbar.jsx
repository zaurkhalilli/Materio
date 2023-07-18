import React from 'react'
import styled from "../Navbar/Navbar.scss"
import {HiOutlineUser} from "react-icons/hi"
import {IoIosArrowDown} from "react-icons/io"
import {GrSun} from "react-icons/gr"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
            <div className="col-xl-2">
             <div className="logo">
             <span>MATERIO</span> 
             </div>
            </div>
            <div className="col-xl-7">
                <div className="featuresss">
                <a href="">Home</a>
                <a href="">Features</a>
                <a href="">Team</a>
                <a href="">FAQ</a>
                <a href="">Contact us</a>
                <a href="">Pages <IoIosArrowDown/> </a>
                <a href="">Admin</a>
                </div>
            </div>
            <div className="col-xl-3">
                <div className="button">
                 <GrSun size={25} />  <button><HiOutlineUser/> LOGIN/REGISTER</button>
                </div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
