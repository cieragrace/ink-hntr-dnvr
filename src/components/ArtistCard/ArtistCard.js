import './ArtistCard.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ArtistCard = (props) => {
  return(
    <NavLink to={`/${props.id}`} className='artist-card'>
      <img className='artist-image' src={props.img[1]} alt='artist-photo'></img>
      <div><h1>{props.name}</h1></div>
    </NavLink>
  )
}

export default ArtistCard