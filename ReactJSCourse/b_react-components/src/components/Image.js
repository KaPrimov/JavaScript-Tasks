import React, { Component } from 'react'
import Bio from './Bio'

export default class Image extends Component {
  constructor (props) {
    super(props)

    this.state = {
      images: [],
      selectedPerson: {}
    }

    this.onClickHandler = this.onClickHandler.bind(this)
  }

  componentDidMount () {
    fetch('http://localhost:9999/roster').then(data => {
      return data.json()
    })
      .then(parseData => {
        this.setState({ images: parseData, selectedPerson: parseData[0] })
      })
  }

  onClickHandler (event) {
    let id = event.target.dataset.index
    this.setState({selectedPerson: this.state.images[id]})
  }

  render () {
    return (
      <div>
        <div className='roster-images-wrapper'>
          {this.state.images.map((data, index) => {
            return <img key={index} src={data.url} alt={data.name} data-index={data.id} className='roster-image' onClick={this.onClickHandler} />
          })}
        </div>
        <Bio bio={this.state.selectedPerson} />
      </div>
    )
  }
}
