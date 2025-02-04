import React from 'react'
import './Home.css'
import Banner from './Banner'
import BrowseMenu from './BrowseMenu'
import ComeVisit from './ComeVisit'
import OfferingMenu from './OfferingMenu'
import DeliveryInfo from './DeliveryInfo'
import Comments from './Comments'
import Footer from './Footer'
const Home = () => {
  return (
    <section>
    <Banner/>
    <BrowseMenu/>
    <ComeVisit/>
    <OfferingMenu/>
    <DeliveryInfo/>
    <Comments/>
    <Footer/>
    </section>
  )
}

export default Home