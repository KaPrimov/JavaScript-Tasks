import React, { Component } from 'react';

export default class RegisterForm extends Component {
  render() {
    return (
      <form id="registerForm" onSubmit={this.props.onSubmitHandler}>  
      <h1>Please register here</h1>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={this.props.username}
          disabled={this.props.submitDisabled}
          onChange={this.props.onChangeHandler}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={this.props.password}
          disabled={this.props.submitDisabled}
          onChange={this.props.onChangeHandler}
          required
        />
        <div>Repeat Password:</div>
        <input
          type="password"
          name="repeatPassword"
          value={this.props.repeatPassword}
          disabled={this.props.submitDisabled}
          onChange={this.props.onChangeHandler}
        />
        <input id="btnRegister" type="submit" value="Sign Up" disabled={this.props.submitDisabled} />
      </form>
    );
  }
}