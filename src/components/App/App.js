import './App.css';
import { Component } from 'react';
import Form from '../Form/Form';
import Artists from '../Artists/Artists';
import getArtistAPICalls from '../../APICalls';

class App extends Component {
  constructor() {
    super ()
    this.state = {
      artists: []
    }
  }

  componentDidMount = () => {
    getArtistAPICalls('artists')
    .then((data) => this.setState({ artists: data.artists }))
    .catch((error) => console.log(error))
  }

  render() {
    return(
      <></>
    )
  }
}

export default App;
