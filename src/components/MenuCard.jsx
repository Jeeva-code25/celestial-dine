import React from 'react'
import './MenuCard.css'
const MenuCard = ({icon, title, desc}) => {
  return (
    <article className='menu-card'>
        <img src={icon} alt="icon" className='menu-icon'/>
        <h5 className="menu-title">{title}</h5>
        <p className="desc">In the new era of technology we look in the future with certainty and pride for our life.</p>
        <button className="explore">Explore Menu</button>
    </article>
  )
}

export default MenuCard