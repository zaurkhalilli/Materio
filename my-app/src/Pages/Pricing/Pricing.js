import React from 'react'
import App from '../../App'
import Layout from '../../Layout/Layout'
import Pricingplans from '../../Components/PricingPlans/Pricingplans'
import Pricingtrial from '../../Components/PricingTrial/Pricingtrial'
import Pricingtable from '../../Components/PricingTable/Pricingtable'
const Pricing = () => {
  return (
    <div>
      <Layout>
        <Pricingplans/>
        <Pricingtrial/>
        <Pricingtable/>
      </Layout>
    </div>
  )
}

export default Pricing
