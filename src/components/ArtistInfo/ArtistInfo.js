import './ArtistInfo.css'
import getArtistAPICalls from '../../APICalls'
import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

class ArtistInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      singleArtist: {}, 
      favorites: []
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

  handleFaveClick = (event) => {
    event.preventDefault()
    this.props.addFavorite()
    console.log(this.props.favorites)
  }

  render() {
    const { name, id, shop, phone, img, instagram, addFavorite } = this.state.singleArtist
    return(
      img ?
      <div className='artist-info-container'>
        <div className='artist-images'>
          <img className='image' src={img[0]} alt='artist-1'/>
          <img src={img[1]} alt='artist-2'/>
          <img src={img[2]} alt='artist-3'/>
        </div>
        <div className='artist-details'>
          <h1 className='artist-name'>{name}</h1>
          <ul>
            <h3 className='shop-name'>{shop}</h3>
            <p className='phone'>{phone}</p>
            <p className='insta-handle'>{instagram}</p>
          </ul>
          <div className='buttons-container'>
            <NavLink to={{ pathname: `https://www.instagram.com/${instagram}`}} className={`nav insta-${id}`}>
              <div className='insta'></div>
            </NavLink>
            <button className='fave' onClick={(event) => this.handleFaveClick(event)}></button>
          </div>
        </div>
      </div> : <h3>Loading</h3>
    )
  }
}

export default ArtistInfo