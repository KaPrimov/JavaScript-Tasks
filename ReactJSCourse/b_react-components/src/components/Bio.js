import React, { Component } from 'react'

export default class Bio extends Component { 

  render () {
    let person = this.props.bio
    return (
      <div className='bio-wrapper'>
        <img src={person.url} alt={person.name} />
        <p>{person.bio}</p>
      </div>
    )
  }
}
