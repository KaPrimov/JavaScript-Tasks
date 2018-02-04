import React, { Component } from 'react'
import './App.css'

import SingUpForm from './components/form/SingUpForm'
import LoginForm from './components/form/LoginForm'
import Pokedex from './components//pokeindex/PokemonForm'

class App extends Component {
  constructor () {
    super()

    this.state = {
      username: '',
      token: ''
    }

    this.authenticate = (data) => {
      if (data.success) {
        this.setState({token: data.token, username: data.user.name})
        localStorage.setItem('token', data.token)
      }
    }
  }

  componentDidMount () {
    this.setState({token:localStorage.getItem('token')})
  }

  render () {
    if (typeof (localStorage.token) !== 'undefined') {
      return <Pokedex />
    }
    return (
      <div>
        <SingUpForm />
        <LoginForm authenticateFunction={this.authenticate} />
      </div>
    )
  }
}

export default App
