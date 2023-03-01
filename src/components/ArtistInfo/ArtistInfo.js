import './ArtistInfo.css'
import React, { Component } from 'react'

class ArtistInfo extends Component {
  constructor() {
    supepr()
    this.state = {
      singleArtist: {}
    }
  }

  componentDidMount = () => {
    getArtistAPICalls(`artists/${this.props.id}`)
    .then(data => {
      this.setState({
        singleArtist: data.artists
      })
    })
  }

  render() {
    const { name, id, shop, phone, img, instagram } = this.state.singleArtist
    return(
      <div className='favorites-container'>
        <div className='artist-images'>
          <img>{img[0]}</img>
          <img>{img[1]}</img>
          <img>{img[2]}</img>
        </div>
        <div className='artist-details'>
          <h1 className='artist-name'>{name}</h1>
          <h3 className='shop-name'>{shop}</h3>
          <p className='phone'>{phone}</p>
          <p className='insta-handle'>{instagram}</p>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    )
  }
}

export default ArtistInfo