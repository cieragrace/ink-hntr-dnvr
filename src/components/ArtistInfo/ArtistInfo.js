import './ArtistInfo.css'
import getArtistAPICalls from '../../APICalls'
import React, { Component } from 'react'

class ArtistInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      singleArtist: null
    }
  }

  // componentDidMount = () => {
  //   getArtistAPICalls(`artists/${this.props.id}`)
  //   .then(data => {
  //     this.setState({
  //       singleArtist: data.artist
  //     })
  //   })
  // }

  componentDidMount () {
    getArtistAPICalls(`artists/${this.props.artistid}`)
      .then(data => {
        this.setState({
        singleArtist: data.artist   
        })
      })        
  }

  render() {
    const { name, id, shop, phone, img, instagram } = this.state.singleArtist
    return(
      <div className='artist-info-container'>
        <div className='artist-images'>
          <img className='image'>{img[0]}</img>
          <img>{img[1]}</img>
          <img>{img[2]}</img>
        </div>
        <div className='artist-details'>
          <div>
            <h1 className='artist-name'>{name}</h1>
          </div>
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