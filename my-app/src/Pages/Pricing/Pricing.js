import React from 'react'
import App from '../../App'
import Layout from '../../Layout/Layout'
import Pricingplans from '../../Components/PricingPlans/Pricingplans'
import Pricingtrial from '../../Components/PricingTrial/Pricingtrial'
const Pricing = () => {
  return (
    <div>
      <Layout>
        <Pricingplans/>
        <Pricingtrial/>
      </Layout>
    </div>
  )
}

export default Pricing
