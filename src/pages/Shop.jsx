import React from 'react'
import Hero from '../components/Hero'
import NewCollections from '../components/NewCollection'
import Offers from '../components/Offers'
import Popular from '../components/Populat'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <NewCollections/>
      <Offers/>
      <Popular/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Shop