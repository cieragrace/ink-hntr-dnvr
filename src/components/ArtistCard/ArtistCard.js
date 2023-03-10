import './ArtistCard.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const ArtistCard = (props) => {
  return(
    <NavLink to={`/${props.id}`} className={`artist-card ${props.id}`}>
      <div className='card-deets'> 
          <h1 className='h1'>{props.name}</h1>
          <h3 className='h3'>{props.shop}</h3>
          <img className="img" src={`${props.img[0]}`}></img>
        </div>
    </NavLink>
  )
}

export default ArtistCard

ArtistCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  shop: PropTypes.string
}