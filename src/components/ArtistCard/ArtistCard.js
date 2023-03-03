import './ArtistCard.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ArtistCard = (props) => {
  return(
    <NavLink to={`/${props.id}`} className='artist-card'>
      <div className='card-deets'>
          <h1>{props.name}</h1>
          <h3>{props.shop}</h3>
        </div>
    </NavLink>
  )
}

export default ArtistCard