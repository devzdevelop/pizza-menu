import React from 'react';
import Pizza from './Pizza';
import data from '../assets/data';

const Menu = () => {
  return (
    <main className='menu'>
        <h2>Our Menu</h2>
        <div className='pizza'>
        {
          data.map((pizza) => (
              <Pizza 
              name={pizza.name}
              ingredient={pizza.ingredients}
              photoName={pizza.photoName}
              price={pizza.price}
              key={pizza.name}
              />
          ))
        }
        </div>
    </main>
  )
}

export default Menu