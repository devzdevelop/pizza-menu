import React from 'react'

const Pizza = (props) => {
  return (
    <li>
        <div>
            <img src={props.photoName} alt={props.name}/>
        </div>
        <div>
            <h3>{props.name}</h3>
            <p>{props.ingredient}</p>
        </div>
    </li>
  )
}

export default Pizza