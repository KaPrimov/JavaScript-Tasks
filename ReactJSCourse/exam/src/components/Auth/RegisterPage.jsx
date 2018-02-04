import React, { Component } from 'react'
import Input from '../common/Input'
import { connect } from 'react-redux'
import { registerAction, redirect } from '../../actions/authActions'

class RegisterPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      repeat: '',
      nameValid: false,
      emailValid: false,
      passwordValid: false,
      repeatValid: false
    }

    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler (e) {
    const name = e.target.name
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.setState({ [e.target.name]: e.target.value }, () => {
      switch (name) {
        case 'name':
          if (this.state.name.length === 0) {
            this.setState({ nameValid: false })
          } else {
            this.setState({ nameValid: true })
          }
          break
        case 'email':
          if (this.state.email.length === 0 || !regex.test(this.state.email)) {
            this.setState({ emailValid: false })
          } else {
            this.setState({ emailValid: true })
          }
          break
        case 'password':
        case 'repeat':
          if (this.state.password.length < 4 || this.state.repeat.length < 4 || (this.state.repeat !== this.state.password)) {
            this.setState({ passwordValid: false, repeatValid: false })
          } else {
            this.setState({ passwordValid: true, repeatValid: true })
          }
          break
        default:
          break
      }
    })
  }

  onSubmitHandler (e) {
    e.preventDefault()
    this.props.register(this.state.name, this.state.email, this.state.password)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.registerSuccess) {
      this.props.redirect()
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row space-top'>
          <div className='col-md-12'>
            <h1>Register</h1>
            <p>Please fill all fields.</p>
          </div>
        </div>
        <form onSubmit={this.onSubmitHandler}>
          <div className='row'>
            <div className='col-md-3'>
              <Input
                name='name'
                value={this.state.name}
                onChange={this.onChangeHandler}
                label='Name'
                valid={this.state.nameValid}
              />
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
              <Input
                name='repeat'
                type='password'
                value={this.state.repeat}
                onChange={this.onChangeHandler}
                label='Repeat password'
                valid={this.state.repeatValid}
              />
              <input type='submit' className='btn btn-secondary' value='Register' />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

function mapState(state) {
  return {
    registerSuccess: state.register.success
  }
}

function mapDispatch(dispatch) {
  return {
    register: (name, email, password) => dispatch(registerAction(name, email, password)),
    redirect: () => dispatch(redirect())
  }
}

export default connect(mapState, mapDispatch)(RegisterPage)