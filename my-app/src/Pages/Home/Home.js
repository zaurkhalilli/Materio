import React from 'react'
import App from "../../App";
import Homeapplication from '../../Components/HomeApplication/Homeapplication';
import Homeproject from '../../Components/HomeProject/Homeproject';
import Homeslider from '../../Components/Homeslider/Homeslider';
import Homeswiper from '../../Components/HomeSwiper/Homeswiper';
import Homemarks from '../../Components/HomeMarks/Homemarks';
import Homesupport from '../../Components/HomeSupport/Homesupport';
import Homepricing from '../../Components/HomePricing/Homepricing';
import Homeicons from '../../Components/HomeIcons/Homeicons';
import Homequestion from '../../Components/HomeQuestions/Homequestion';
import Homeready from '../../Components/HomeReady/Homeready';
const Home = () => {
  return (
    <div>
      <Homeapplication/>
      <Homeproject/>
      <Homeslider/>
      <Homeswiper/>
      <Homemarks/>
      <Homesupport/>
      <Homepricing/>
      <Homeicons/>
      <Homequestion/>
      <Homeready/>
    </div>
  )
}

export default Home
