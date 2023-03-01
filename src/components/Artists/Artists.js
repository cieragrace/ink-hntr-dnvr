import './Artists.css'
import React from 'react'
import ArtistCard from '../ArtistCard/ArtistCard'
import Form from '../Form/Form'

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
      <div className='artists-container'>
       {artistCards}
      </div>
  )
}

export default Artists