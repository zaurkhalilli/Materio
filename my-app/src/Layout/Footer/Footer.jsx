import React from 'react'
import styled from "../Footer/Footer.scss"
import {AiFillHeart} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {FaTwitter} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <h4>MATERIO</h4>
              <p>Most Powerful & Comprehensive 🤩 React NextJS Admin Template with Elegant Material Design & Unique Layouts.</p>
              <input type="text" placeholder='Subscribe to newsletter' />
1              <button>SUBSCRIBE</button>
            </div>
            <div className="col-xl-4">
              <div className="liststyle">
                <ul> Demos
                  <li><a href="">Vertical Layout</a></li>
                  <li><a href="">Horizontal Layout</a></li>
                  <li><a href="">Bordered Layout</a></li>
                  <li><a href="">Semi Dark Layout</a></li>
                  <li><a href="">Dark Layout</a></li>
                </ul>
                <ul>Pages
                  <li><a href="">Pricing</a></li>
                  <li><a href="">Payment</a></li>
                  <li><a href="">Checkout</a></li>
                  <li><a href="">Help Center</a></li>
                  <li><a href="">Login/Register</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4">
             <div className="rightside">
             <h5>Download our app</h5>
              <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/landing-page/apple-icon.png" alt="" />
              <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/landing-page/google-play-icon.png" alt="" />
             </div>
               </div>
          </div>
        </div>
        <div className="bottomfooter">
         <div className="container">
          <div className="row">
            <div className="col-xl-6">
            <p>© 2023 , Made with <AiFillHeart color='red' size={20}/> by ThemeSelection</p>
            </div>
            <div className="col-xl-6">
             <div className="github">
             <AiFillGithub color='white' size={22}/>
             </div>
             <div className="facebook">
             <BsFacebook color='white' size={20}/>
             </div>
            <div className="twitter">
            <FaTwitter color='white' size={22}/>
            </div>
             <div className="instagram"> 
             <FiInstagram color='white' size={22}/></div>
            </div>
          </div>
         </div>
        </div>
    </div>
  )
}

export default Footer
