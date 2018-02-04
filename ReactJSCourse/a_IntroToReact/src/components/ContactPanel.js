import React from 'react'
import DetailBox from './DetailBox'
const $ = require('jquery')

export default class ContactPanel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contacts: [],
      selected: {}
    }
    this.onContactsLoadSuccess = this.onContactsLoadSuccess.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  componentDidMount () {
    $.getJSON('./contacts.json', this.onContactsLoadSuccess)
  }

  onContactsLoadSuccess (response) {
    this.setState({ contacts: response, selected: response[0] })
  }

  onClickHandler (event) {
    let selectedIndex = Number(event.target.getAttribute('data-index'))
    this.setState({ selected: this.state.contacts[selectedIndex] })
  }

  render () {
    return (
      <div id='book'>
        <div id='list'>
          <h1>Contacts</h1>
          <div className='content'>
            {this.state.contacts.map((e, i) => {
              return (<div className='contact' key={i} data-index={i} onClick={this.onClickHandler}>
                <span className='avatar small' data-index={i}>&#9787;</span>
                <span className='title' data-index={i}>{`${e.firstName} ${e.lastName}`}</span>
              </div>)
            })
            }
          </div>
        </div>
        <DetailBox contact={this.state.selected} />
      </div>
    )
  }
}
