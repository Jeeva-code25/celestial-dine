import React from 'react'
import './ComeVisit.css'
import Phone from '../assets/phone.png'
import Mail from '../assets/mail.png'
import Location from '../assets/location.png'
const ComeVisit = () => {
  return (
    <section className='come-visit'>
      <div className="img-box">
        <div className="contact-box">
          <h5 className="contact-title">Come and vist us</h5>
          <div className="item-box">
            <img src={Phone} alt="icon" className="contact-icon" />
            <p className="phone">(91)98712 76531</p>
          </div>

          <div className="item-box">
            <img src={Mail} alt="icon" className="contact-icon" />
            <p className="email">contact@celestialdine.in</p>
          </div>

          <div className="item-box">
            <img src={Location} alt="icon" className="contact-icon" />
            <p className="address">527, festival street, lighthouse, chidambaram - 608901</p>
          </div>


        </div>
      </div>
      <div className="content-box">
        <h1 className="come-visit-title" style={{ fontFamily: "Playfair Display" }}>We provide healthy food for your family.</h1>
        <h6 className="info-1">Our story began with a vision to create a unique dining exh6erience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</h6>
        <p className="info-2">
          At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
        </p>
        <button className="more-about">More About Us</button>
      </div>
    </section>
  )
}

export default ComeVisit