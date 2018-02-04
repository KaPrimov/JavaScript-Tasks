import React, { Component } from 'react'

export default class LoginForm extends Component {
  render () {
    return (
      <form id='formLogin' className='form' onSubmit={this.props.onSubmitHandler}>
        <h1>Please login</h1>
        <label>Username:</label>
        <input
          id='loginUsername'
          type='text'
          name='username'
          value={this.props.username}
          disabled={this.props.submitDisabled}
          onChange={this.props.onChangeHandler}
        />
        <label>Password:</label>
        <input
          id='loginPasswd'
          type='password'
          name='password'
          value={this.props.password}
          disabled={this.props.submitDisabled}
          onChange={this.props.onChangeHandler}
        />
        <input id='btnLogin' type='submit' value='Sign In' disabled={this.props.submitDisabled} />
      </form>
    )
  }
}
