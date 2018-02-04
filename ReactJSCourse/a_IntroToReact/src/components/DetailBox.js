import React from 'react'
import '../style/index.css'
import '../style/app.css'

export default class DetailsBox extends React.Component {

  render () {
    let person = this.props.contact
    return (
      <div id='details'>
        <h1>Details</h1>
        <div className='content'>
          <div className='info'>
            <div className='col'>
              <span className='avatar'>&#9787;</span>
            </div>
            <div className='col'>
              <span className='name'>{person.firstName}</span>
              <span className='name'>{person.lastName}</span>
            </div>
          </div>
          <div className='info'>
            <span className='info-line'>☎️ {person.phone}</span>
            <span className='info-line'>&#9993; {person.email}</span>
          </div>
        </div>
      </div>
    )
  }
}
