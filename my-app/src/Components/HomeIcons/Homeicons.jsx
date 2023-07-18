import React from 'react'
import styled from "../HomeIcons/Homeicons.scss"
import {GiBookshelf} from 'react-icons/gi'
const Homeicons = () => {
  return (
    <div className='icons'>
      <div className="container">
        <div className="row">
            <div className="col-xl-3">
                <GiBookshelf size={40} color='purple' enableBackground={styled}/>
                <p>137+</p>
                <span>Completed Sites</span>
            </div>
            <div className="col-xl-3">
            <GiBookshelf size={40} color='purple' enableBackground={styled}/>
                <p>137+</p>
                <span>Completed Sites</span>
            </div>
            <div className="col-xl-3">
            <GiBookshelf size={40} color='purple' enableBackground={styled}/>
                <p>137+</p>
                <span>Completed Sites</span>
            </div>
            <div className="col-xl-3">
            <GiBookshelf size={40} color='purple' enableBackground={styled}/>
                <p>137+</p>
                <span>Completed Sites</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homeicons
