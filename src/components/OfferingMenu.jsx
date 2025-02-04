import React from 'react'
import OfferingMenuCard from './OfferingMenuCard'
import Catering from '../assets/catering.png'
import Birthday from '../assets/birthday.png'
import Wedding from '../assets/wedding.png'
import Event from '../assets/event.png'
import { Row } from 'react-bootstrap'

const ICONS = [Catering, Birthday, Wedding, Event]
const OFFERINGS = ['Caterings', 'Birthdays', 'Weddings', 'Events']

const OfferingMenu = () => {
    return (
        <section className='offering-menu' style={{ padding: '4.5rem' }}>
            <h1 className="offering-menu-title w-50 mb-4" style={{ fontFamily: "Playfair Display" }}>We also offer unique services for your events</h1>

            <Row className="offerings" style={{display: 'flex', gap: '3rem', justifyContent: 'center'}}>
                {
                    OFFERINGS.map((offering, index )=> { return (<OfferingMenuCard key={index} img={ICONS[index]} title={offering} desc={"In the new era of technology we look in the future with certainty for life."}/>) })
                }
            </Row>

        </section>
    )
}

export default OfferingMenu