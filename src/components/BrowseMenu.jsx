import React from 'react'
import MenuCard from './MenuCard'
import BreakFast from '../assets/break_fast_icon.png'
import MainDish from '../assets/main_dish_icon.png'
import Drink from '../assets/drinks_icon.png'
import Dessert from '../assets/Dessert_icon.png'

const ICONS = [BreakFast, MainDish, Drink, Dessert]
const MENUS = ['Breakfast', 'Maindishes', 'Drinks', 'Desserts']

const BrowseMenu = () => {
    return (
        <section className='browse-menu' style={{ padding: '4.5rem' }}>
            <h1 className="browse-menu-title text-center mb-5" style={{ fontFamily: "Playfair Display" }}>Browse Our Menu</h1>
            <div className="menus" style={{display: 'flex', gap: '3rem', justifyContent: 'center'}}>
                {
                    MENUS.map((menu, index )=> { return (<MenuCard key ={index} title={menu} icon={ICONS[index]} />) })
                }
            </div>

        </section>
    )
}

export default BrowseMenu