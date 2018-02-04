import React, { Component } from 'react'
import '../../style/notifications.css'
import $ from 'jquery'
import observer from '../../models/observer'

export default class Infobox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: '',
      style: 'info',
      visible: false
    }
    this.bindEventHandlers()

    // Register in the observer
    observer.showInfo = this.showInfo.bind(this);
    observer.showSuccess = this.showSuccess.bind(this);
    observer.showError = this.showError.bind(this);
  }

  bindEventHandlers () {
    // Make sure event handlers have the correct context
    this.ajaxStart = this.ajaxStart.bind(this)
    this.hide = this.hide.bind(this)
    this.handleAjaxError = this.handleAjaxError.bind(this)
  }

  componentDidMount () {
    // Attach global AJAX "loading" event handlers
    $(document).on({
      ajaxStart: this.ajaxStart,
      ajaxStop: this.hide
    })

    // Attach a global AJAX error handler
    $(document).ajaxError(this.handleAjaxError)
  }

  ajaxStart () {
    this.setState({ message: 'Loading...', style: 'info', visible: true })
  }

  hide () {
    this.setState({ visible: false })
  }

  handleAjaxError (event, response) {
    let errorMsg = JSON.stringify(response)
    if (response.readyState === 0)
      errorMsg = 'Cannot connect due to network error.'
    if (response.responseJSON && response.responseJSON.description)
      errorMsg = response.responseJSON.description
    this.showError(errorMsg)
  }

  showInfo (message) {
    this.setState({ message: message, style: 'info', visible: true })
    setTimeout(this.hide, 3000)
  }

  showSuccess (message) {
    this.setState({ message: message, style: 'success', visible: true })
    setTimeout(this.hide, 3000)
  }

  showError (errorMsg) {
    this.setState({ message: errorMsg, style: 'error', visible: true })
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
      <div id={className} onClick={this.hide} className='notification'>
          {this.state.message}
      </div>
    )
  }
}
