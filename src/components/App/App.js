import './App.css';
import { Component } from 'react';
import Artists from '../Artists/Artists';
import ArtistInfo from '../ArtistInfo/ArtistInfo'
import Favorites from '../Favorites/Favorites'
import getArtistAPICalls from '../../APICalls';
import { Route, Switch } from 'react-router-dom'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super ()
    this.state = {
      artists: [],
      singleArtist: {},
      favorites: [],
      selectedOptions: [],
      filteredArtists: []
    }
  }

  componentDidMount = () => {
    getArtistAPICalls('artists')
    .then((data) => this.setState({ artists: data.artists, filteredArtists: data.artists }))
    .catch((error) => console.log(error))
  }


  componentDidUpdate = (prevState) => {
    if(prevState.artists !== this.state.artists || prevState.selectedOptions !== this.state.selectedOptions){
      return this.filterArtists
    }
  }

  showSingleArtist = (id) => {
    const findArtist = this.state.artists.find(artist => artist.id === id)
    getArtistAPICalls(`artists/${findArtist.id}`)
    .then((data) => {
      console.log('data', data)
      this.setState({
        singleArtist: data.artist
      })
      console.log("fetch only 1", data)
    })
  }

  filterArtists = (inputValue) => {
    console.log(inputValue)
    const labels = inputValue.map(input => input.label)
    if (labels.length === 0) {
       this.setState({ filteredArtists: this.state.artists})
    } else {
      const filteredArtists = this.state.artists.filter(artist => {
        const keywords = artist.keywords.find(keyword => labels.includes(keyword))
        return keywords
      })
      this.setState({ filteredArtists })
    }
      // return filteredArtists
    // })
  }



  addFavorite = (id) => {
    const artist = this.state.artists.find(artist => artist.id === id)
    if (artist && !this.state.favorites.includes(artist)) {
      this.setState({ favorites: [...this.state.favorites, artist] });
    }
  };

  render() {
    return(
      <div className='app-container'>
          <Form filterArtists={this.filterArtists}/>
        <Switch>
          <Route exact path='/' render={() => <Artists artists={this.state.filteredArtists} />}/>
          <Route exact path='/favorites' render={() => <Favorites favorites={this.state.favorites} />}/>
          <Route exact path='/:id' render={({match}) => <ArtistInfo artistid={match.params.id} addFavorite={this.addFavorite}/>}/>
        </Switch>
      </div>
    )
  }
}

export default App;
