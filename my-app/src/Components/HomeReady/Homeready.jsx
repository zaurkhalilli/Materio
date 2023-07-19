import React from 'react'
import styled from "../HomeReady/Homeready.scss"
import {AiOutlineArrowRight} from "react-icons/ai"
const Homeready = () => {
  return (
    <div className='ready'>
      <div className="container">
        <div className="row">
            <div className="col-xl-5">
            <h4>Ready to Get Started?</h4>
            <p>Start your project with a 14-day free trial</p>
            <button>GET STARTED <AiOutlineArrowRight size={20}/> </button>
            </div>
            <div className="col-xl-7">
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/landing-page/cta-dashboard.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homeready
