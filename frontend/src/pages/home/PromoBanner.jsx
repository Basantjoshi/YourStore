import React from 'react'

const PromoBanner = () => {
  return (
    <section className='section__container banner__container'>
        <div className='banner__card'>
            <span><i className='ri-truck-line'></i></span>
            <h4>Free Delivery</h4>
            <p>On all orders over 10000</p>

        </div>
        <div className='banner__card'>
            <span><i className='ri-secure-payment-line'></i></span>
            <h4>Secure Payment</h4>
            <p>100% secure payment</p>
            </div>      
        <div className='banner__card'>
            <span><i className='ri-refresh-line'></i></span>
            <h4>Easy Return</h4>
            <p>30 days return policy</p>
            </div>


    </section>
  )
}

export default PromoBanner
