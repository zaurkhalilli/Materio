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
import Navbar from '../../Layout/Navbar/Navbar';
import Layout from '../../Layout/Layout';
import Homeidea from '../../Components/HomeIdea/Homeidea';
const Home = () => {
  return (
    <div>
    <Layout>
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
      <Homeidea/>
      </Layout>     
 
    </div>
  )
}

export default Home
