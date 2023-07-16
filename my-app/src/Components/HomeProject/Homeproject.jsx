import React from 'react'
import styled from "../HomeProject/Homeproject.scss"
const Homeproject = () => {
  return (
    <div className='project'>
        <div className="useful">
            <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/section-tilte-icon.png" alt="" />
            <span>USEFUL FEATURES</span>
           <div className="h5">
           <h4>Everything you need</h4> <p>to start your next project</p>
           </div>
           <h5>Not just a set of tools, the package includes ready-to-deploy conceptual application.</h5>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-4">
                    <div className="features1">
                        <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/laptop-charging.png" alt="" />
                        <h4>Quality Code</h4>
                        <p>Code structure that all developers will easily understand and fall in love with</p>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="features2">
                        <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/transition-up.png" alt="" />
                        <h4>Continuous Updates</h4>
                        <p>Free updates for the next 12 months, including new demos and features.</p>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="features3">
                        <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/edit.png" alt="" />
                        <h4>Stater-Kit</h4>
                        <p>Start your project quickly without having to remove unnecessary features.</p>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="features4">
                        <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/3d-select-solid.png" alt="" />
                        <h4>API Ready</h4>
                        <p>Just change the endpoint and see your own data loaded within seconds.</p>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="features5">
                        <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/lifebelt.png" alt="" />
                        <h4>Excellent Support</h4>
                        <p>An easy-to-follow doc with lots of references and code examples.</p>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="features6">
                        <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/google-docs.png" alt="" />
                        <h4>Well Documented</h4>
                        <p>An easy-to-follow doc with lots of references and code examples.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homeproject
