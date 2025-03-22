import React from 'react'
import Layout from '../Component/Layout/Layout'

const Policy = () => {
  return (
    <Layout>
    <div className='policy'>
    <header className='h1'> 
    
        <h1>Our Policies</h1>
    
  </header>

  <div>
  <div div className='privacy'>
        <section class="policypart">
            <h2>Privacy Policy</h2>
            <p>We are committed to protecting your privacy. Any personal information collected will only be used in accordance with our privacy practices.</p>
        </section>

        <section class="policypart">
            <h2>Terms of Service</h2>
            <p>By using our website, you agree to comply with our terms and conditions. These terms ensure a safe and fair use of our services.</p>
        </section>

        <section class="policypart">
            <h2>Refund Policy</h2>
            <p>If you are not satisfied with your purchase, you can request a refund within 30 days. Please refer to our refund guidelines for more details.</p>
        </section>
    </div>
  </div>
    </div>
  </Layout>
  )
}

export default Policy
