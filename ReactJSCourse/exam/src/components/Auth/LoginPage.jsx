import React, { Component } from 'react'
import Input from '../common/Input'
import { connect } from 'react-redux'
import { loginAction, redirect } from '../../actions/authActions'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false
    }

    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler (e) {
    const name = e.target.name
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.setState({ [e.target.name]: e.target.value }, () => {
      switch (name) {
        case 'email':
          if (this.state.email.length === 0 || !regex.test(this.state.email)) {
            this.setState({ emailValid: false })
          } else {
            this.setState({ emailValid: true })
          }
          break
        case 'password':
          if (this.state.password.length < 4) {
            this.setState({ passwordValid: false })
          } else {
            this.setState({ passwordValid: true })
          }
          break
        default:
          break
      }
    })
  }

  onSubmitHandler (e) {
    e.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  componentWillReceiveProps (newProps) {
    if (newProps.loginSuccess) {
      this.props.redirect()
      this.props.history.push('/yearly/' + (new Date()).getFullYear())
    }
  }

  render () {
    return (
      <div className='container'>
        <div className='row space-top'>
          <div className='col-md-12'>
            <h1>Login</h1>
          </div>
        </div>
        <form onSubmit={this.onSubmitHandler}>
          <div className='row space-top'>
            <div className='col-md-3'>
              <Input
                name='email'
                value={this.state.email}
                onChange={this.onChangeHandler}
                label='E-mail'
                valid={this.state.emailValid}
              />
              <Input
                name='password'
                type='password'
                value={this.state.password}
                onChange={this.onChangeHandler}
                label='Password'
                valid={this.state.passwordValid}
              />
              <input type='submit' className='btn btn-secondary' value='Login' />
            </div>
          </div>
        </form>
      </div >
    )
  }
}

function mapState(state) {
  return {
    loginSuccess: state.login.success
  }
}

function mapDispatch(dispatch) {
  return {
    login: (email, password) => dispatch(loginAction(email, password)),
    redirect: () => dispatch(redirect())
  }
}

export default connect(mapState, mapDispatch)(LoginPage)