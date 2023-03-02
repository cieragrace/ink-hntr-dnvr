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
      favorites: []
    }
  }

  componentDidMount = () => {
    getArtistAPICalls('artists')
    .then((data) => this.setState({ artists: data.artists }))
    .catch((error) => console.log(error))
  }


  showSingleArtist = (id) => {
    const findArtist = this.state.artists.find(artist => artist.id === id)
    getArtistAPICalls(`artists/${findArtist.id}`)
    .then((data) => {
      this.setState({
        singleArtist: data.artist
      })
      console.log("fetch only 1", data)
    })
  }

  filterArtists = (inputValue1, inputValue2, inputValue3) => {
    const filteredArtists = this.state.artists.filter(artist => {
      if (inputValue1 || inputValue2 || inputValue3) {
        return (
          artist.keywords.includes(inputValue1) ||
          artist.keywords.includes(inputValue2) ||
          artist.keywords.includes(inputValue3)
        )
      } else {
        return artist
      }
    })
    this.setState({ artists: filteredArtists})
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
          <Route exact path='/' render={() => <Artists artists={this.state.artists} />}></Route>
          <Route exact path='/favorites' render={() => <Favorites />}></Route>
          <Route exact path='/:id' render={({match}) => <ArtistInfo artistid={match.params.id}/>}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
