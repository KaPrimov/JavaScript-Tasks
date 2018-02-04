import React, { Component } from 'react'
import Greeting from './Greeting'

export default class Header extends Component {
  render () {
    if (!sessionStorage.getItem('username')) {
      return null
    }
    return (
      <header id='menu'>
        {this.props.children}
      </header>
    )
  }
}
