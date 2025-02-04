import React from 'react'
import './Banner.css'
import { useNavigate } from 'react-router'
const Banner = () => {
    const navigate = useNavigate()
  return (
    <section className='banner-img'>
        <div className="banner-text-box">
            <p className="banner-title">Best food for your taste</p>
            <p className="banner-desc">Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
            <div className="btn-row">
                <button className="banner-book-table" onClick={() => {navigate('/celestial-dine/bookatable')}}>Book A Table</button>
                <button className="explore-menu">Explore Menu</button>

            </div>
        </div>
    </section>
)
}

export default Banner