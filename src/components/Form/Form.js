import './Form.css'
import React, { Component } from 'react'
import Select from 'react-select'
import { MultiSelect } from "react-multi-select-component"
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const options = [
  'traditional', 
  'color realism', 
  'large scale', 
  'american traditional', 
  'black work', 
  'nature inspired', 
  'celtic', 
  'geometric', 
  'black and grey', 
  'fine lines', 
  'dot work', 
  'lettering', 
  'japanese', 
  'irezumi', 
  'horimono', 
  'machine free', 
  'stick and poke', 
  'bold', 
  'modern', 
  'dark', 
  'horror', 
  'neo traditional', 
  'illustrative', 
  'flowers', 
  'bright colors', 
  'animals', 
  'space', 
  'realism', 
  'micro-realism', 
  'portrait', 
  'ornamental', 
  'anime', 
  'watercolor', 
  'minimalist', 
  'surreal', 
  'psychedelic', 
  'cartoon', 
]

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOptions: []
    
    }
  }
// this one below works
  handleChange = ( selectedOptions ) => {
    this.setState({ selectedOptions }, () => this.props.filterArtists(this.state.selectedOptions))
    console.log(selectedOptions)
    // this.props.filterArtists(selectedOptions)
  }


  // componentDidUpdate = (prevState, prevProps) => {
  //   if(this.props.data !== prevProps.data){
  //     this.setState({data: this.props.data})
  //   }
  // }
  componentDidUpdate = (prevState) => {
    if(prevState.selectedOptions !== this.state.selectedOptions){
      return this.filterArtists
    }
  }


  render() {
    const {selectedOptions} = this.state
    return(
      <div className='form-container'>
        <div className='logo-container'>
          <Link to='/' className='logo'></Link>
        </div>
        <div className='input-container'>
          <MultiSelect 
            className='selects' 
            options={options.map((option) => ({key: option, value: option, label: option}))} 
            value={this.state.selectedOptions}
            onChange={this.handleChange}
            placeholder='Provide some key words'/>
        </div>
      </div>
    )
  }
}

export default Form 

// Form.propTypes = {
//   handleChange: PropTypes.func.isRequired,
//   componentDidUpdate: PropTypes.func.isRequired
// }