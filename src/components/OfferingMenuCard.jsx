import React from 'react'
import './OfferingMenuCard.css'
import { Col } from 'react-bootstrap'
const OfferingMenuCard = ({title, desc, img}) => {
  return (
    <Col xs ={12} sm={6} md={3} lg={2} className='offering-menu-card'>
        <img src={img} alt="" className="offering-card-img" />
        <h5 className="offering-card-title">{title}</h5>
        <p className="offering-card-desc">{desc}</p>
    </Col>
  )
}

export default OfferingMenuCard