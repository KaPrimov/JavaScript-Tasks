import React, { Component } from 'react'
import '../../style/site.css'
import { Link } from 'react-router-dom'

export default class Greeting extends Component {
  render () {
    if (this.props.user === '' || this.props.user === undefined) {
      return null
    } else {
      return (
        <div id='profile'>
          <span className='useronly' id='username'>Hello, {this.props.user}!</span>
          |<Link to='/logout' id='linkMenuLogout'>logout</Link>
        </div>
      )
    }
  }
}
