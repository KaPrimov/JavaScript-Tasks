import React, { Component } from 'react'
import { logout } from '../../api/auth'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/userActions'

class LogoutPage extends Component {
  constructor (props) {
    super(props)
    this.logout()
  }

  logout () {
    this.props.actions.logoutUser()
  }

  onSubmitResponse (response) {
    this.props.actions.logoutUser()
  }

  render () {
    return (
      <Redirect to='/' />
    )
  }
}


function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(LogoutPage)
