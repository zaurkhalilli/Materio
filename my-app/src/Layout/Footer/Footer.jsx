import React from 'react'
import styled from "../Footer/Footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <h4>MATERIO</h4>
              <p>Most Powerful & Comprehensive 🤩 React NextJS Admin Template with Elegant Material Design & Unique Layouts.</p>
              <input type="text" placeholder='Subscribe to newsletter' />
              <button>SUBSCRIBE</button>
            </div>
            <div className="col-xl-4"></div>
            <div className="col-xl-4"></div>
          </div>
        </div>
    </div>
  )
}

export default Footer
