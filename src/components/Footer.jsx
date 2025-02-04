import React from 'react'
import './Footer.css'
import LogoWhite from '../assets/logo_white.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'
import insta_1 from '../assets/insta_1.png'
import insta_2 from '../assets/insta_2.png'
import insta_3 from '../assets/insta_3.png'
import insta_4 from '../assets/insta_4.png'

import { Col, Container, Image, Row, Stack } from 'react-bootstrap'
const Footer = () => {
    return (
        <footer className='footer '>
            <Row className='gap-4'>
                <Col md={4} className='site-info'>
                    <div className="site-name">
                        <img src={LogoWhite} alt="" className="logo" />
                        <h3 className="name">Celestial Dine</h3>
                    </div>
                    <p className="site-desc">
                        In the new era of technology we look a in the future with certainty and pride to for our company and.
                    </p>
                    <Stack direction='horizontal' className='gap-3'>
                        <img src={twitter} alt="" className="social" />
                        <img src={facebook} alt="" className="social" />
                        <img src={insta} alt="" className="social" />
                    </Stack>
                </Col>
                <Col md={3}>
                    <h5 className="foot-title">Pages</h5>
                    <a href="#" className="pgs">Menu</a>
                    <a href="#" className="pgs">Contact</a>
                    <a href="#" className="pgs">About</a>
                    <a href="#" className="pgs">Home</a>
                </Col>
                <Col md={5}>
                    <h5 className="foot-insta">Follow Us On Instagram</h5>
                        <Row className='mt-3'>
                            <Col className='insta-col mb-4'><Image src={insta_1} alt="" className="insta-img" fluid/>
                            </Col>
                            <Col className='insta-col mb-4'><Image src={insta_2} alt="" className="insta-img" fluid/></Col>
                        </Row>
                        <Row>
                            <Col className='insta-col'><Image src={insta_3} alt="" className="insta-img" fluid/></Col>
                            <Col className='insta-col'><Image src={insta_4} alt="" className="insta-img" fluid/></Col>
                        </Row>
                </Col>
            </Row>
            <p className="copy">Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
        </footer>
    )
}

export default Footer