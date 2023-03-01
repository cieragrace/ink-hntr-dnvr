import './ArtistCard.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ArtistCard = (props) => {
  return(
    <NavLink to={`/artists/${props.id}`} className='artist-card'>
      <img className='card-img' src={props.img[1]}></img>
    </NavLink>
  )
}

export default ArtistCard