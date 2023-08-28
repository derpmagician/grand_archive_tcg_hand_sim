import React from 'react'
import 'primeicons/primeicons.css';
import './Card.css'
const Card = ({ card }) => {
  return (
    <div className="card" >
      <div className="card-body" >
        <h2 className="card-title" >{card.name}</h2>
        <p>{card.element}</p>
        <p>{card.effect}</p>
        <p dangerouslySetInnerHTML={{ __html: card.effect }}></p>
        {/* Añade más campos aquí si es necesario */}
      </div>
    </div>
  )
}

export default Card