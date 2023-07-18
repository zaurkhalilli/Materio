import React from 'react'
import styled from "../HomeIcons/Homeicons.scss"
import {GiBookshelf} from 'react-icons/gi'
import {AiOutlineClockCircle} from "react-icons/ai"
import {BsEmojiSmile} from "react-icons/bs"
import {RiMedalLine} from "react-icons/ri"
const Homeicons = () => {
  return (
    <div className='icons'>
      <div className="container">
        <div className="row">
            <div className="col-xl-3">
                <GiBookshelf size={60} color='purple'/>
                <p>137+</p>
                <span>Completed Sites</span>
            </div>
            <div className="col-xl-3">
            <AiOutlineClockCircle size={60} color='green'/>
                <p>1,100+</p>
                <span>Working Hours</span>
            </div>
            <div className="col-xl-3">
            <BsEmojiSmile size={55} color='orange'/>
                <p>137+</p>
                <span>Happy Customers</span>
            </div>
            <div className="col-xl-3">
            <RiMedalLine size={60} color='blue'/>
                <p>23+</p>
                <span>Awards Winning</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homeicons
