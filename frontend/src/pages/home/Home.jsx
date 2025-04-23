import React from 'react'
import Banner from './Banner'
import TrendingProducts from '../shop/TrendingProducts'
import DealsSection from './DealsSection'
import PromoBanner from './PromoBanner'
import Blogs from '../blogs/Blogs'

const Home = () => {
  return (
    <>
      <Banner/>
    
      <TrendingProducts/>
      <DealsSection/>
      <PromoBanner/>
      <Blogs/>
    </>
  )
}

export default Home
