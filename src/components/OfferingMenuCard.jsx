import React from 'react'
import './OfferingMenuCard.css'
const OfferingMenuCard = ({title, desc, img}) => {
  return (
    <article className='offering-menu-card'>
        <img src={img} alt="" className="offering-card-img" />
        <h5 className="offering-card-title">{title}</h5>
        <p className="offering-card-desc">{desc}</p>
    </article>
  )
}

export default OfferingMenuCard