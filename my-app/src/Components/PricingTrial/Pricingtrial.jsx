import React from 'react'
import styled from "../PricingTrial/Pricingtrial.scss"
const Pricingtrial = () => {
  return (
    <div className='trial'>
      <div className="container">
        <div className="row">
            <div className="col-xl-8">
                <h3>Still not convinced? Start with a 14-day FREE trial!</h3>
                <p>You will get full access to with all the features for 14 days.</p>
                <button>START 14-DAY FREE TRIAL</button>
            </div>
            <div className="col-xl-4">
            <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/sitting-girl-with-laptop.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Pricingtrial
