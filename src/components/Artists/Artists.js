import './Artists.css'
import React from 'react'
import ArtistCard from '../ArtistCard/ArtistCard'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Artists = (props) => {
  const artistCards = props.artists.map(artist => {
  return(
    <ArtistCard 
      id={artist.id}
      key={artist.id}
      name={artist.name}
      shop={artist.shop}
      img={artist.img}
      keywords={artist.keywords}
      phone={artist.phone}
    />
  )
})
  return(
      <div className='artists-container' id='artists'>
       {artistCards}
      </div>
  )
}

export default Artists

Artists.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  shop: PropTypes.string,
  img: PropTypes.array,
  keywords: PropTypes.array,
  phone: PropTypes.string
}