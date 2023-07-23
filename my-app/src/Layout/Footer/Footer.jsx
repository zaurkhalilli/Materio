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
            <div className="col-xl-4"></div>
          </div>
        </div>
    </div>
  )
}

export default Footer
