import './Form.css'
import React, { Component } from 'react'
import Select from 'react-select'
import { MultiSelect } from "react-multi-select-component"

const options = [
  {value: 'watercolor abstract', label: 'water color abstract'},
  {value: 'traditional', label: 'traditional'},
  {value: 'color realism', label: 'color realism'},
  {value: 'large scale', label: 'large scale'},
  {value: 'american traditional', label: 'american traditional'},
  {value: 'black work', label: 'blackwork'},
  {value: 'nature inspired', label: 'nature inspired'},
  {value: 'celtic', label: 'celtic'},
  {value: 'geometric', label: 'geometric'},
  {value: 'black and grey', label: 'black and grey'},
  {value: 'fine lines', label: 'fine lines'},
  {value: 'dot work', label: 'dot work'},
  {value: 'lettering', label: 'lettering'},
  {value: 'japanese', label: 'japanese'},
  {value: 'irezumi', label: 'irezumi'},
  {value: 'horimono', label: 'horimono'},
  {value: 'machine free', label: 'machine free'},
  {value: 'stick and poke', label: 'stick and poke'},
  {value: 'bold', label: 'bold'},
  {value: 'modern', label: 'modern'},
  {value: 'dark', label: 'dark'},
  {value: 'horror', label: 'horror'},
  {value: 'neo traditional', label:'neo traditional'},
  {value: 'illustrative', label:'illustrative'},
  {value: 'flowers', label:'flowers'},
  {value: 'bright colors', label:'bright colors'},
  {value: 'animals', label:'animals'},
  {value: 'space', label:'space'},
  {value: 'american traditional', label:'american traditional'},
  {value: 'realism', label:'realism'},
  {value: 'micro-realism', label:'micro-realism'},
  {value: 'portrait', label:'portrait'},
  {value: 'ornamental', label:'ornamental'},
  {value: 'anime', label:'anime'},
  {value: 'watercolor', label:'watercolor'},
  {value: 'geometric', label:'geometric'},
  {value: 'minimalist', label:'minimalist'},
  {value: 'surreal', label:'surreal'},
  {value: 'psychedelic', label:'psychedelic'},
  {value: 'cartoon', label:'cartoon'},
]


class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOptions: []
    }
  }
//this one below works
  handleChange = ( selectedOptions) => {
    this.setState({ selectedOptions})
    // console.log(selectedOptions)
    this.props.filterArtists(selectedOptions)
  }

  

  componentDidUpdate = (prevState, prevProps) => {
    if(this.props.data !== prevProps.data){
      this.setState({data: this.props.data})
    }
  }


  render() {
    const {selectedOptions} = this.state
    return(
      <div className='form-container'>
        <div className='logo-container'>
          <div className='logo'></div>
        </div>
        <div className='input-container'>
          <MultiSelect 
            className='selects' 
            options={options} 
            value={this.state.selectedOptions}
            onChange={this.handleChange}
            placeholder='Provide some key words'/>
        </div>
      </div>
    )
  }
}

export default Form 