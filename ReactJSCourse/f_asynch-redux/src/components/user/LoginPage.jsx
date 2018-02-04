import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/userActions'
import { Redirect } from 'react-router'

class LoginPage extends Component {
  constructor (props) {
    super(props)
    this.state = { username: '', password: '', submitDisabled: false, redirect: false }
    this.bindEventHandlers()
  }

  bindEventHandlers () {
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler (event) {
    switch (event.target.name) {
      case 'username':
        this.setState({ username: event.target.value })
        break
      case 'password':
        this.setState({ password: event.target.value })
        break
      default:
        break
    }
  }

  onSubmitHandler (event) {
    event.preventDefault()
    this.props.actions.loginUser(this.state.username, this.state.password)
    this.setState({ redirect: true })
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    return (
      <LoginForm
        username={this.state.username}
        password={this.state.password}
        submitDisabled={this.state.submitDisabled}
        onChangeHandler={this.onChangeHandler}
        onSubmitHandler={this.onSubmitHandler}
      />
    )
  }
}

function mapStateToProps (state, ownProps) {
  let user = {
    username: '',
    password: ''
  }

  return {
    user: user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
