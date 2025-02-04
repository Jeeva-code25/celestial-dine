import React from 'react'
import './DeliveryInfo.css'
import Img1 from '../assets/delivery_1.png'
import Img2 from '../assets/delivery_2.png'
import Img3 from '../assets/delivery_3.png'
import Time from '../assets/time_icon.png'
import Offer from '../assets/offer_icon.png'
import Cart from '../assets/cart_icon.png'
import { Col, Container, Image, Row } from 'react-bootstrap'
const DeliveryInfo = () => {
    return (
        <section className='delivery-info'>
            <Container className="delivery-img-box" md={4}>
                <Row>
                    <Col>
                    <Row className='my-auto align-content-center'>
                    <Image src={Img1} alt="" className="img-1"/>
                    </Row>
                    </Col>
                    <Col className='d-flex flex-column gap-3'>
                        <Row className=''>
                            <Image src={Img2} alt="" className="img-2" fluid/>
                        </Row>
                        <Row className=''>
                            <Image src={Img3} alt="" className="img-3" fluid/>
                        </Row>
                    </Col>
                </Row>

            </Container>
            <Container md={4} className="delivery-text-box">
                <h1 className="delivery-title mb-3" style={{ fontFamily: "Playfair Display" }}>Fastest Food Delivery in City.</h1>
                <p className="delivery-desc">Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
                <div className="info-box my-3">
                    <img src={Time} alt="icon" className="info-icon" />
                    <p className="info-desc mb-0">Delivery within 30 minutes</p>
                </div>

                <div className="info-box my-3">
                    <img src={Offer} alt="icon" className="info-icon" />
                    <p className="info-desc mb-0">Best Offer & Prices</p>
                </div>

                <div className="info-box my-3">
                    <img src={Cart} alt="icon" className="info-icon" />
                    <p className="info-desc mb-0">Online Services Available</p>
                </div>
            </Container>
        </section>
    )
}

export default DeliveryInfo