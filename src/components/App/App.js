import './App.css';
import { Component } from 'react';
import Artists from '../Artists/Artists';
import ArtistInfo from '../ArtistInfo/ArtistInfo'
import ErrorPage from '../ErrorPage/ErrorPage';
import Header from '../Header/Header'
import getArtistAPICalls from '../../APICalls';
import { Route, Switch } from 'react-router-dom'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super ()
    this.state = {
      artists: [],
      singleArtist: {},
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
      .catch((error) => console.log(error))
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
  }


  render() {
    return(
      <div className='app-container'>
        <Switch>
          <Route exact path='/' render={() => (
          <div className='home-container'>
            <Form filterArtists={this.filterArtists}/>
            <Artists artists={this.state.filteredArtists} />
          </div>
          )}
        />
          <Route exact path='/:id' render={({match}) => (
          <div className='artist-page-container'>
            <Header />
            <ArtistInfo artistid={match.params.id} />
          </div>
          )}
        />
          <Route path='*' to='/error'>
            <ErrorPage />
            </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
