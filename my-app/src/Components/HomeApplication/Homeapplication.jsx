import React from 'react'
import styled from "../HomeApplication/Homeapplication.scss"
const Homeapplication = () => {
  return (
    <div className='application'>
        <div className="texts">
        <h1>All in one sass application for your business</h1>
        <p>No coding required to make customisations.
            The live customiser has everything your marketing need.</p>
            <button>GET EARLY ACCESS</button>
            <br />
           <div className="img">
           <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/landing-page/hero-dashboard-light.png" alt="" />
           </div>
           <div className="img2">
            <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/landing-page/hero-elements-light.png" alt="" />
           </div>
        </div>
    </div>
  )
}

export default Homeapplication
