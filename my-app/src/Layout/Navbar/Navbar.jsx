import React from 'react'
import styled from "../Navbar/Navbar.scss"
import {HiOutlineUser} from "react-icons/hi"
import {IoIosArrowDown} from "react-icons/io"
import {GrSun} from "react-icons/gr"
import {CgMenuGridR} from "react-icons/cg"
import { Link } from 'react-router-dom'
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
                <div className="featuresa">
                <Link to="/"> <p>Home</p> </Link>
                </div>
                <a href="">Features</a>
                <a href="">Team</a>
                <a href="">FAQ</a>
                <a href="">Contact us</a>
                <div class="dropdown">
                <button class="dropbtn">Pages <IoIosArrowDown/> </button>
                <div class="dropdown-content">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-3">
                        <h6> <CgMenuGridR/> Other</h6>
                        <Link to="/pricing"><li>Pricing</li></Link>
                        <li>Payment</li>
                        <li>Checkout</li>
                        <li>Help Center</li>
                      </div>
                      <div className="col-xl-3">
                        <h6>Auth Demo</h6>
                        <li>Login (Basic)</li>
                        <li>Login (Cover)</li>
                        <li>Register (Basic)</li>
                        <li>Register (Cover)</li>
                        <li>Register (Multi-steps)</li>
                        <li>Forgot Password(Basic)</li>
                        <li>Forgot Password(Cover)</li>
                        <li>Reset Password</li>
                        <li>Reset Password(Cover)</li>
                      </div>
                      <div className="col-xl-3">
                      <h6>Other</h6>
                      <li>Error</li>
                        <li>Under Maintenance</li>
                        <li>Coming Soon</li>
                        <li>Not Authorized</li>
                        <li>Verify Email (Basic)</li>
                        <li>Verify Email(Cover)</li>
                        <li>Two Steps(Basic)</li>
                        <li>Two Steps(Cover)</li>
                      </div>
                      <div className="col-xl-3">
                      <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/misc/nav-item-col-img-light.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <a href="">Admin</a>
                </div>
            </div>
            <div className="col-xl-3">
                <div className="button">
                <Link to="/login">  <GrSun size={25} />  <button> <Link to="/login"></Link> <HiOutlineUser/> LOGIN/REGISTER</button></Link>
                </div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
