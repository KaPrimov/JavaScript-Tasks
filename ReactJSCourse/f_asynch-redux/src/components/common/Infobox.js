import React, { Component } from 'react'
import '../../styles/notifications.css'

class Infobox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: '',
      style: 'info',
      visible: false
    }
  }

  // componentDidMount () {
  //   this.setState({
  //     message: this.props.message,
  //     style: this.props.style,
  //     visible: true
  //   })
  // }

  componentWillReceiveProps (nextProps) {
    this.setState({
      style: nextProps.style,
      message: nextProps.message,
      visible: nextProps.visible
    })
  }

  render () {
    if (!this.state.visible) return null

    let className = ''
    switch (this.state.style) {
      case 'info':
        className += 'loadingBox'
        break
      case 'error':
        className += 'errorBox'
        break
      case 'success':
        className += 'infoBox'
        break
      default:
        className += 'loadingBox'
        break
    }

    return (
      <div id='notifications'>
        <div id={className} onClick={this.props.hideHandler} className='notification'>
          <span>{this.state.message}</span>
        </div>
      </div>
    )
  }
}

export default Infobox
