import './Favorites.css'
import React from 'react'
import ArtistCard from '../ArtistCard/ArtistCard'

const Favorites = (props) => {
  const favoriteCards = this.props.favorites.map(fave => {
    return(
      <ArtistCard 
      id={props.id}
      key={props.id}
      name={props.name}
      shop={props.shop}
      img={props.img}
      keywords={props.keywords}
      phone={props.phone}
      addFavorite={props.addFavorite}
    />
    )
  })

  return (
    <div className='favorites-container'>
      <h1>Favorites</h1>
      <div className='artists-container'>
        {favoriteCards}
      </div>
    </div>
  )
}

export default Favorites