import './ArtistInfo.css'
import getArtistAPICalls from '../../APICalls'
import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types'
import ErrorPage from '../ErrorPage/ErrorPage'

class ArtistInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      singleArtist: {}
    }
  }

  componentDidMount () {
    getArtistAPICalls(`artists/${this.props.artistid}`)
      .then(data => {
        console.log(data)
        this.setState({
        singleArtist: data 
        })
      })        
  }

  render() {
    const { name, id, shop, phone, img, instagram } = this.state.singleArtist
    return(
      name ?
      <div className='artist-info-container'>
        <div className='left-side'>
          <div className='artist-images'>
            <div className='artist-image-wrapper'>
              <img className='image' src={img[0]} alt='artist-1'/>
            </div>
            <div className='artist-image-wrapper'>
              <img src={img[1]} alt='artist-2'/>
            </div>
            <div className='artist-image-wrapper'>
              <img src={img[2]} alt='artist-3'/>
            </div>
          </div>
        </div>
        <div className='artist-details'>
          <h1 className='artist-name'>{name}</h1>
          <ul>
            <h3 className='shop-name'>{shop}</h3>
            <p className='phone'>{phone}</p>
            <p className='insta-handle'>{instagram}</p>
          </ul>
          <div className='buttons-container'>
            <a href={`https://www.instagram.com/${instagram}`} target="_blank"  rel="noopener noreferrer" className={`nav insta-${id}`}>
              <div className='insta'></div>
            </a>
          </div>
        </div>
      </div> : <ErrorPage />
    )
  }
}

export default ArtistInfo

ArtistInfo.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  shop: PropTypes.string,
  phone: PropTypes.string,
  img: PropTypes.array,
  instagram: PropTypes.string,
}