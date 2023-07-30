import React from 'react'
import styled from "../PricingTable/Pricingtable.scss"
import {AiFillCheckCircle} from "react-icons/ai"
import {AiFillCloseCircle} from "react-icons/ai"
const Pricingtable = () => {
  return (
    <div className='table'> 
    <div className="tabletxt">
    <h3>Pick a plan that works best for you</h3>
    <p>Stay cool, we have a 48-hour money back guarantee!</p>
    </div>
      <table>
  <tr>
    <th>Features <span>Native Front Features</span> </th>
    <th>Starter <span>FREE</span></th>
    <th>Country</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>14-days free trial</td>
    <td><AiFillCheckCircle size={20} color='purple'/></td>
    <td><AiFillCloseCircle color='gray' size={20}/></td>
    <td><AiFillCheckCircle size={20} color='purple'/></td>
  </tr>
  <tr>
    <td>No user limit</td>
    <td><AiFillCloseCircle color='gray' size={20}/></td>
    <td>Mexico</td>
    <td><AiFillCheckCircle size={20} color='purple'/></td>
  </tr>
  <tr>
    <td>Product Support</td>
    <td><AiFillCloseCircle color='gray' size={20}/></td>
    <td>Austria</td>
    <td><AiFillCheckCircle size={20} color='purple'/></td>
  </tr>
  <tr>
    <td>Email Support</td>
    <td><AiFillCloseCircle color='gray' size={20}/></td>
    <td>UK</td>
    <td><AiFillCheckCircle size={20} color='purple'/></td>
  </tr>
  <tr>
    <td>Integrations</td>
    <td><AiFillCloseCircle color='gray' size={20}/></td>
    <td>Canada</td>
    <td><AiFillCheckCircle size={20} color='purple'/></td>
  </tr>
  <tr>
    <td>Removal of Front branding	</td>
    <td><AiFillCloseCircle color='gray' size={20}/></td>
    <td>Italy</td>
    <td><AiFillCheckCircle size={20} color='purple'/></td>
  </tr>
  <tr>
    <td>Active maintenance & support</td>
    <td><AiFillCloseCircle color='gray' size={20}/></td>
    <td>Italy</td>
    <td><AiFillCheckCircle size={20} color='purple'/></td>
  </tr>
  <tr>
    <td>Data storage for 365 days</td>
    <td><AiFillCloseCircle color='gray' size={20}/></td>
    <td>Italy</td>
    <td><AiFillCheckCircle size={20} color='purple'/></td>
  </tr>
  
</table>
    </div>
  )
}

export default Pricingtable
