import React from 'react'
import dealsImg from '../../assets/deals.png'
import { Link } from 'react-router-dom'

const DealsSection = () => {
  return (
    <section className='section__container deals__container'>
        <div className='deals__image mb-7'>
            <img src={dealsImg} alt="" />

        </div>
        <div className='deals__content'>
            <h5 className='uppercase'>New Arrivals</h5>
            <h4>Asgaard sofa</h4>
           
            <div className='deals__countdown flex-wrap'>
                <div className='deals__countdown__card'>
                    <h4>10</h4>
                    <p>Days</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>20</h4>
                    <p>Hours</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>15</h4>
                    <p>Mins</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>05</h4>
                    <p>Secs</p>
                </div>
            </div>
            <button className="btn mt-5"><Link to='/shop'>Shop Now </Link> </button>
        </div>

    </section>
  )
}

export default DealsSection
