import './Form.css'
import React, { Component } from 'react'

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
          <input
          className='inputs'
          type='select'
          value={this.state.input1Value}
          placeholder="Tell us what you're looking for">   
          </input>
          <input
          className='inputs'
          type='select'
          value={this.state.input2Value}
          placeholder="You can choose up to 3 options">
          </input>
          <input
          className='inputs'
          type='select'
          value={this.state.input3Value}
          placeholder="The more you choose the more artists we may find">
          </input>
        </div>
        <div className='form-btn-container'>
          <button className='form-btn'></button>
        </div>
      </div>
    )
  }
}

export default Form 