import React from 'react'
import App from "../../App";
import Homeapplication from '../../Components/HomeApplication/Homeapplication';
import Homeproject from '../../Components/HomeProject/Homeproject';
import Homeslider from '../../Components/Homeslider/Homeslider';
import Homeswiper from '../../Components/HomeSwiper/Homeswiper';
import Homemarks from '../../Components/HomeMarks/Homemarks';
const Home = () => {
  return (
    <div>
      <Homeapplication/>
      <Homeproject/>
      <Homeslider/>
      <Homeswiper/>
      <Homemarks/>
    </div>
  )
}

export default Home
