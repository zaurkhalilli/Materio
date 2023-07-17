import React from 'react';
import styled from "../HomeSwiper/Homeswiper.scss"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {AiFillStar} from "react-icons/ai"

export default () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
       <div className="swiperbox">
       <SwiperSlide>
            <div className="swiper1">
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-1.png" alt="" />
                <p>Materio is awesome, and I particularly enjoy knowing that if I get stuck on something.</p>
               <div className="icons1">
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               </div>
               <h5>Tommy haffman</h5>
               <span>Founder of Levis</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper1">
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-3.png" alt="" />
                <p>
                  This template is superior in so many ways. The code, the design, the regular updates, the
                  support.. It’s the whole package. Excellent Work.
                </p>
               <div className="icons1">
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               </div>
               <h5>Eugenia Moore</h5>
               <span>CTO of Airbnb</span>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="swiper1">
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-2.png" alt="" />
                <p>
                  All the requirements for developers have been taken into consideration, so I’m able to build any
                  interface I want.
                </p>
               <div className="icons1">
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               </div>
               <h5>Sara Smith</h5>
               <span>Founder of Continental</span>
            </div>
            </SwiperSlide>
        <SwiperSlide> 
            <div className="swiper1">
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-5.png" alt="" />
                <p>
                  “I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard
                  sites on almost any project.”
                </p>
               <div className="icons1">
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               </div>
               <h5>Eugenia Mooren</h5>
               <span>Founder of Hubspot</span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper1">
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-4.png" alt="" />
                <p>“I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard</p>
               <div className="icons1">
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               </div>
               <h5>Eugenia Moore</h5>
               <span>Founder of Hubspot</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper1">
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-1.png" alt="" />
                <p>Materio is awesome, and I particularly enjoy knowing that if I get stuck on something.</p>
               <div className="icons1">
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               </div>
               <h5>Tommy haffman</h5>
               <span>Founder of Levis</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper1">
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-3.png" alt="" />
                <p>
                  This template is superior in so many ways. The code, the design, the regular updates, the
                  support.. It’s the whole package. Excellent Work.
                </p>
               <div className="icons1">
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               </div>
               <h5>Eugenia Moore</h5>
               <span>CTO of Airbnb</span>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="swiper1">
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-2.png" alt="" />
                <p>
                  All the requirements for developers have been taken into consideration, so I’m able to build any
                  interface I want.
                </p>
               <div className="icons1">
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               </div>
               <h5>Sara Smith</h5>
               <span>Founder of Continental</span>
            </div>
            </SwiperSlide>
        <SwiperSlide> 
            <div className="swiper1">
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-5.png" alt="" />
                <p>
                  “I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard
                  sites on almost any project.”
                </p>
               <div className="icons1">
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               </div>
               <h5>Eugenia Mooren</h5>
               <span>Founder of Hubspot</span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper1">
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-4.png" alt="" />
                <p>“I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard</p>
               <div className="icons1">
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               </div>
               <h5>Eugenia Moore</h5>
               <span>Founder of Hubspot</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper1">
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-1.png" alt="" />
                <p>Materio is awesome, and I particularly enjoy knowing that if I get stuck on something.</p>
               <div className="icons1">
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               </div>
               <h5>Tommy haffman</h5>
               <span>Founder of Levis</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper1">
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-3.png" alt="" />
                <p>
                  This template is superior in so many ways. The code, the design, the regular updates, the
                  support.. It’s the whole package. Excellent Work.
                </p>
               <div className="icons1">
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               </div>
               <h5>Eugenia Moore</h5>
               <span>CTO of Airbnb</span>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="swiper1">
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-2.png" alt="" />
                <p>
                  All the requirements for developers have been taken into consideration, so I’m able to build any
                  interface I want.
                </p>
               <div className="icons1">
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               </div>
               <h5>Sara Smith</h5>
               <span>Founder of Continental</span>
            </div>
            </SwiperSlide>
        <SwiperSlide> 
            <div className="swiper1">
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-5.png" alt="" />
                <p>
                  “I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard
                  sites on almost any project.”
                </p>
               <div className="icons1">
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               </div>
               <h5>Eugenia Mooren</h5>
               <span>Founder of Hubspot</span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper1">
                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-4.png" alt="" />
                <p>“I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard</p>
               <div className="icons1">
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               <AiFillStar color='orange'/> 
               </div>
               <h5>Eugenia Moore</h5>
               <span>Founder of Hubspot</span>
            </div>
        </SwiperSlide>
       </div>
        <hr />
    
      </Swiper>
    );
  };