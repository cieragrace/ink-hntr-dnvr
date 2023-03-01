import './Artists.css'
import React from 'react'
import ArtistCard from '../ArtistCard/ArtistCard'

const Artists = (props) => {
  const artistCards = props.artists.map(artist => {
  return(
    <ArtistCard 
      id={artist.id}
      key={artist.id}
      name={artist.name}
      shop={artist.shop}
      img={artist.img[2]}
      keywords={artist.keywords}
      phone={artist.phone}
    />
  )
})
  return(
    <div>
      {artistCards}
    </div>
  )
}

export default Artists