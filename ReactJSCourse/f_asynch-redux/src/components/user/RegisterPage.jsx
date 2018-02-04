import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RegisterForm from './RegisterForm'
import * as userActions from '../../actions/userActions'
import { Redirect } from 'react-router'

class RegisterPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      repeatPassword: '',
      submitDisabled: false,
      redirect: false
    }
    this.bindEventHandlers()
  }

  bindEventHandlers () {
    // Make sure event handlers have the correct context
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
      case 'repeatPassword':
        this.setState({ repeatPassword: event.target.value })
        break
      default:
        break
    }
  }

  onSubmitHandler (event) {
    event.preventDefault()
    this.props.actions.registerUser(this.state.username, this.state.password, this.state.repeatPassword)
    this.setState({ redirect: true })
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
    return (
      <div className='content'>
        <RegisterForm
          username={this.state.username}
          password={this.state.password}
          repeatPassword={this.state.repeatPassword}
          submitDisabled={this.state.submitDisabled}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
      />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
