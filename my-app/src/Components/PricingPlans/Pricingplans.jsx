import React from 'react'
import styled from "../PricingPlans/Pricingplans.scss"
const Pricingplans = () => {
  return (
    <div className='pricing'>
      <div className="pricingplans">
        <h2>Pricing Plans</h2>
        <h6>All plans include 40+ advanced tools and features to boost your product.
        Choose the best plan to fit your needs.</h6>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="img1">
            <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/pricing-basic.png" alt="" />
            </div>
            <h5>Basic</h5>
            <p>A simple start for everyone</p>
            <sup>$ </sup> <span>0</span> <label>/month</label>
            <li>100 responses a month</li>
            <li>Unlimited forms and surveys</li>
            <li>Unlimited fields</li>
            <li>Basic form creation tools</li>
            <li>Up to 2 subdomains</li>
            <div className="leftbtn">
              <button>YOUR CURRENT PLAN</button>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="img2">
            <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/pricing-standard.png" alt="" />
            </div>
            <h5>Standard</h5>
            <p>For small to medium businesses</p>
            <sup>$ </sup> <span>9</span> <label>/month</label>
            <li>Unlimited responses</li>
            <li>Unlimited forms and surveys</li>
            <li>Instagram profile page</li>
            <li>Google Docs integration</li>
            <li>Custom “Thank you” page</li>
            <div className="middlebtn">
              <button>UPGRADE</button>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="img3">
            <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/pricing-enterprise.png" alt="" />
            </div>
            <h5>Enterprise</h5>
            <p>Solution for big organizations</p>
            <sup>$ </sup> <span>19</span> <label>/month</label>
            <li>PayPal payments</li>
            <li>Logic Jumps</li>
            <li>File upload with 5GB storage</li>
            <li>Custom domain support</li>
            <li>Stripe integration</li>
            <div className="rightbtn">
              <button>UPGRADE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricingplans
