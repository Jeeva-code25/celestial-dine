import React from 'react'
import MenuCard from './MenuCard'
import BreakFast from '../assets/break_fast_icon.png'
import MainDish from '../assets/main_dish_icon.png'
import Drink from '../assets/drinks_icon.png'
import Dessert from '../assets/Dessert_icon.png'
import { Row } from 'react-bootstrap'

const ICONS = [BreakFast, MainDish, Drink, Dessert]
const MENUS = ['Breakfast', 'Maindishes', 'Drinks', 'Desserts']

const BrowseMenu = () => {
    return (
        <section className='browse-menu' style={{ padding: '4.5rem' }}>
            <h1 className="browse-menu-title text-center mb-5" style={{ fontFamily: "Playfair Display" }}>Browse Our Menu</h1>
            <Row className="menus" style={{ gap: '3rem', justifyContent: "center"}}>
                {
                    MENUS.map((menu, index )=> { return (<MenuCard key ={index} title={menu} icon={ICONS[index]} />) })
                }
            </Row>

        </section>
    )
}

export default BrowseMenu