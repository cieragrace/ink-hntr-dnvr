import './Form.css'
import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  {value: 'watercolor abstract', label: 'water color abstract'},
  {value: 'traditional', label: 'traditional'},
  {value: 'color realism', label: 'color realism'},
  {value: 'large scale', label: 'large scale'},
  {value: 'american traditional', label: 'american traditional'},
  {value: 'blackwork', label: 'blackwork'},
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
  constructor() {
    super()
    this.state = {
      input1Value: '',
      input2Value: '',
      input3Value: ''
    }
  }
  render() {
    return(
      <div className='form-container'>
        <div className='logo-container'>
          <div className='logo'></div>
        </div>
        <div className='input-container'>
          <Select options={options} className='selects' placeholder='Provide some key words'/>
          <Select options={options} className='selects' placeholder='The more provided, the more'/>
          <Select options={options} className='selects' placeholder='Artists we can help you find'/>
        </div>
        <div className='form-btn-container'>
          <button className='form-btn'></button>
        </div>
      </div>
    )
  }
}

export default Form 