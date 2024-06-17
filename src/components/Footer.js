import React from 'react'

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
    <footer className='footer'>{new Date().toLocaleDateString()}. {isOpen ? "We are currently open." : "Sorry we're closed."}</footer>
    )
}

export default Footer