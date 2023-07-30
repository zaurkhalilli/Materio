import React from 'react'
import styled from "../HomePricing/Homepricing.scss"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
export default function SliderSizes() {
    return (
     <div className="price">
        <div className="pricetxt">
            <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/section-tilte-icon.png" alt="" />
            <h5>PRICING PLANS</h5>
            <p>Tailored pricing plans designed for you</p>
            <span>All plans include 40+ advanced tools and features to boost your product.
The best plan to fit your needs.</span>
        </div>
       <div className="box">
       <Box  width={800}>

        <Slider
          size="big"
          defaultValue={71}
          aria-label="small"
          color='secondary'
          valueLabelDisplay="auto"
        />
      </Box>
       </div>
       <div className="container">
        <div className="row">
            <div className="col-xl-3">
                <h3>Basic Plan</h3>
                <div className="cont1">
                <span>$20</span>
               <div className="cont1-1">
               <h6>Per month</h6>
                <p>10% off for yearly subscription</p>
               </div>
                </div>
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/smiling-icon.png" alt="" />
                <div className="list">
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  Timeline</h5>
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  Basic search</h5>
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  Live chat widget</h5>
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  Email marketing</h5>
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  Custom Forms</h5>
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  Traffic analytics</h5>
                <hr />
                <div className="listdown">
                    <p>Basic Support</p>
                <span>AVG. Time: 24h</span>
                </div>
                <div className="listbutton">
                    <button>GET STARTED</button>
                </div>
                </div>
                </div>
            <div className="col-xl-3">
            <h3>Basic Plan</h3>
                <div className="cont1">
                <span>$51</span>
               <div className="cont1-1">
               <h6>Per month</h6>
                <p>10% off for yearly subscription</p>
               </div>
                </div>
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/smiling-icon.png" alt="" />
                <div className="list">
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  Everything in basic</h5>
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  Timeline with database</h5>
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  Advanced search</h5>
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  Marketing automation</h5>
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  Advanced chatbot</h5>
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  Campaign management</h5>
                <hr />
                <div className="listdown">
                    <p>Standard Support</p>
                <span>AVG. Time: 6h</span>
                </div>
                <div className="listbutton">
                    <button>GET STARTED</button>
                </div>
                </div>
            </div>
            <div className="col-xl-3">
            <h3>Basic Plan</h3>
            <div className="cont1">
                <span>$99</span>
               <div className="cont1-1">
               <h6>Per month</h6>
                <p>10% off for yearly subscription</p>
               </div>
                </div>
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/smiling-icon.png" alt="" />
                <div className="list">
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  Everything in premium</h5>
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  Timeline with database</h5>
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  Fuzzy search</h5>
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  A/B testing sanbox</h5>
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  Custom permissions</h5>
                <h5><img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/list-arrow-icon.png" alt="" />  Social media automation</h5>
                <hr />
                <div className="listdown">
                    <p>Exclusive Support</p>
                <span>Live Support</span>
                </div>
                <div className="listbutton">
                    <button>GET STARTED</button>
                </div>
                </div>
            </div>
        </div>
       </div>
     </div>
    );
  }
