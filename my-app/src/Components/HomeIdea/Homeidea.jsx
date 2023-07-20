import React from 'react'
import styled from "../HomeIdea/Homeidea.scss"
const Homeidea = () => {
  return (
    <div className='idea'>
      <div className="topidea">
        <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/section-tilte-icon.png" alt="" /> <span>CONTACT US</span>
        <h5>Lets work together</h5>
        <h6>Any question or remark? just write us a message</h6>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-xl-5">
            <p>Let’s contact with us</p>
            <h5>Share your ideas or requirement with our experts.</h5>
            <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/landing-page/let%E2%80%99s-contact.png" alt="" />
            <span>Looking for more customisation, more features, and more anything? Don’t worry, We’ve provide you with an entire team of experienced professionals.</span>
            </div>
            <div className="col-xl-6">
                <h5>Share your ideas</h5>
               <div className="inputs">
                <input type="text" placeholder='Full name' />
                <input type="email" placeholder='Email address' />
               </div>
              <div className="bottomi">
              <input type="text" />
              </div>
              <button>SEND INQUIRY</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homeidea
