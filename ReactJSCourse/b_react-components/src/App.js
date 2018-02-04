import React, { Component } from 'react'
import './App.css'
import Slider from './components/Slider'
import Image from './components/Image'

class App extends Component {
  constructor () {
    super()

    this.state = {
      epOnFocus: 0
    }

    this.changeEp = (ep) => {
      this.setState({epOnFocus: ep})
    }
  }
  render () {
    return (
      <div className='app'>
        <Slider updateFunc={this.changeEp} focusedEp={this.state.epOnFocus} />
        <Image />
      </div>
    )
  }
}
export default App
