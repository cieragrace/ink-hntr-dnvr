import './ArtistCard.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ArtistCard = (props) => {
  return(
    <NavLink to={`/${props.id}`}>
      <div className='artist-card'><h1>{props.name}</h1></div>
    </NavLink>
  )
}

export default ArtistCard