import React from 'react'
import styled from "../HomeSupport/Homesupport.scss"
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
const Homesupport = () => {
  return (
    <div className='support'>
      <div className="supportxt">
        <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/section-tilte-icon.png" alt="" />
        <h4>OUR GREAT TEAM</h4>
        <h5>Supported <span> by Real People</span></h5>
        <p>Who is behind these great-looking interfaces?</p>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-xl-3">
               <div className="front1">
               <div className="frontimg">
                    <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/landing-page/team-member-1.png" alt="" />
                </div>
                <div className="fronttxt">
                    <h5>Sophie Gilbert</h5>
                    <p>Project Manager</p>
                   <div className="fronticons">
                  <a href=""><BsFacebook color='' size={20}/></a>
                   <a href=""><BsTwitter color='' size={20}/></a>
                  <a href=""><BsLinkedin color='' size={20}/></a>
                   </div>
                </div>
               </div>
            </div>
            <div className="col-xl-3">
            <div className="front2">
               <div className="frontimg2">
                    <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/landing-page/team-member-2.png" alt="" />
                </div>
                <div className="fronttxt">
                    <h5>Sophie Gilbert</h5>
                    <p>Project Manager</p>
                   <div className="fronticons">
                  <a href=""><BsFacebook color='' size={20}/></a>
                   <a href=""><BsTwitter color='' size={20}/></a>
                  <a href=""><BsLinkedin color='' size={20}/></a>
                   </div>
                </div>
               </div>
            </div>
            <div className="col-xl-3">
            <div className="front3">
               <div className="frontimg3">
                    <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/landing-page/team-member-3.png" alt="" />
                </div>
                <div className="fronttxt">
                    <h5>Sophie Gilbert</h5>
                    <p>Project Manager</p>
                   <div className="fronticons">
                  <a href=""><BsFacebook color='' size={20}/></a>
                   <a href=""><BsTwitter color='' size={20}/></a>
                  <a href=""><BsLinkedin color='' size={20}/></a>
                   </div>
                </div>
               </div>
            </div>
            <div className="col-xl-3">
            <div className="front4">
               <div className="frontimg4">
                    <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/landing-page/team-member-4.png" alt="" />
                </div>
                <div className="fronttxt">
                    <h5>Sophie Gilbert</h5>
                    <p>Project Manager</p>
                   <div className="fronticons">
                  <a href=""><BsFacebook color='' size={20}/></a>
                   <a href=""><BsTwitter color='' size={20}/></a>
                  <a href=""><BsLinkedin color='' size={20}/></a>
                   </div>
                </div>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homesupport
