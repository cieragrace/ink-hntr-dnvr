import './ArtistInfo.css'
import getArtistAPICalls from '../../APICalls'
import React, { Component } from 'react'

class ArtistInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      singleArtist: {}
    }
  }

  componentDidMount () {
    getArtistAPICalls(`artists/${this.props.artistid}`)
      .then((data) => {
        this.setState({
        singleArtist: data.artist   
        })
      })        
  }

  render() {
    const { name, shop, phone, img, instagram } = this.state.singleArtist
    return(
      <div className='artist-info-container'>
        <div className='artist-images'>
          <img className='image' src={img} alt='artist-1'></img>
          {/* <img src={img[1]} alt='artist-2'></img>
          <img src={img[2]} alt='artist-3'></img> */}
        </div>
        <div className='artist-details'>
          <h1 className='artist-name'>{name}</h1>
          <ul>
            <h3 className='shop-name'>{shop}</h3>
            <p className='phone'>{phone}</p>
            <p className='insta-handle'>{instagram}</p>
          </ul>
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