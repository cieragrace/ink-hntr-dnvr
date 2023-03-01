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
      singleArtist: null
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

  filterArtists = (inputValue) => {
    const filteredArtists = this.state.artists.filter(artist => {
      if (inputValue) {
        return (
          artist.keywords.toLowerCase().includes(inputValue) ||
          artist.keywords.toUpperCase().includes(inputValue)
        )
      } else {
        return artist
      }
    })
    this.setState({ artists: filteredArtists})
  }

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
