import './App.css';
import { Component } from 'react';
import Form from '../Form/Form';
import Artists from '../Artists/Artists';
import getArtistAPICalls from '../../APICalls';
import { Route } from 'react-router-dom'

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
      <div className='app-container'>
        <Form />
        <Route exact path='/artists' render={() =>
        <Artists artists={this.state.artists} />
        }>
          
        </Route>
        <Route to='/favorites'>

        </Route>
        <Route to='/artists/:id'>

        </Route>
      </div>
    )
  }
}

export default App;
