import './ArtistCard.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ArtistCard = (props) => {
  return(
    <div className='artist-card'>
      <h3>{props.name}</h3>
    </div>
  )
}

export default ArtistCard