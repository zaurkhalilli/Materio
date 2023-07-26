import React from 'react'
import styled from "../LoginRegister/Loginregister.scss"
import { Link } from 'react-router-dom'
const Loginregister = () => {
  return (
    <div className='login'>
        <div className="container">
            <div className="row">
                <div className="col-xl-8">
                <Link to="/"  ><h3>MATERIO</h3></Link>
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loginregister
