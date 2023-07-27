import React from 'react'
import styled from "../LoginRegister/Loginregister.scss"
import { Link } from 'react-router-dom'
import {BsFacebook} from "react-icons/bs"
import {FaTwitter} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {GrGoogle} from "react-icons/gr"
const Loginregister = () => {
  return (
    <div className='login'>
        <div className="container">
            <div className="row">
                <div className="col-xl-8">
                <Link to="/" ><h3>MATERIO</h3></Link>
               <div className="leftimg">
               <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/auth-cover-login-illustration-light.png" alt="" />
               </div>
                <div className="flower">
                    <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/tree.png" alt="" />
                </div>
                </div>
                <div className="col-xl-4">
                <div className="register">
                    <h4>Welcome to Materio! 👋</h4>
                    <p>Please sign-in to your account and start the adventure</p>
                    <div className="inputemail">
                    <input type="text" placeholder='Email or Username' />
                    </div>
                    <div className="inputpass">
                        <input type="password" placeholder='Password' />
                       
                    </div>
                </div>
                <div className="newpass">
                <a href="">Forgot Password?</a>
                </div>
                <div className="loginbtn">
                    <button>SIGN IN</button>
                   <div className="btnspan">
                   <span>New on our platform? <a href="">Create an account</a> </span>
                   </div>
                   <div className="btnhr">
                   <hr />  <hr />
                   </div>
                </div>
                <div className="loginmarks">
               <div className="facebook">
               <BsFacebook color='darkblue' size={28}/>
               </div>
               <div className="twitter">
               <FaTwitter color='blue' size={30}/>
               </div>
               <div className="git">
               <BsGithub size={30}/>
               </div>
               <div className="google">
               <GrGoogle size={30} color='red'/>
               </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loginregister
