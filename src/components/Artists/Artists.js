import './Artists.css'
import React from 'react'
import ArtistCard from '../ArtistCard/ArtistCard'
import { Link } from 'react-router-dom'

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
    // <div className='container'>
    //   <div className='link-container'>
    //     <Link to='/'>Back To Home</Link>
    //     <Link to='/favorites'>See Favorites</Link>
    //   </div>
      <div className='artists-container'>
       {artistCards}
      </div>
    // </div>
  )
}

export default Artists