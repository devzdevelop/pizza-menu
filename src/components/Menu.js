import React from 'react'
import Pizza from './Pizza'

const Menu = () => {
  return (
    <main className='menu'>
        <h2>Our Menu</h2>
        <Pizza 
        name="Pizza Spinaci" 
        ingredient="Tomato, mozarella, spinach, and ricotta cheese" 
        photoName="pizzas/spinaci.jpg" 
        price="10"/>
        <Pizza 
        name="Pizza Funghi" 
        ingredient="Tomato, mozarella, mushrooms, and onion" 
        photoName="pizzas/funghi.jpg" 
        price="12"/>
    </main>
  )
}

export default Menu