import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import { register } from '../../../models/auth';

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', repeatPassword: '', submitDisabled: false };
    this.bindEventHandlers();
  }

  bindEventHandlers() {
    // Make sure event handlers have the correct context
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onSubmitResponse = this.onSubmitResponse.bind(this);
  }

  onChangeHandler(event) {
    switch (event.target.name) {
      case 'username':
        this.setState({ username: event.target.value });
        break;
      case 'password':
        this.setState({ password: event.target.value });
        break;
      case 'repeatPassword':
        this.setState({ repeatPassword: event.target.value });
        break;
      default:
        break;
    }
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitDisabled: true });
    register(this.state.username, this.state.password, this.state.repeatPassword, this.onSubmitResponse);
  }

  onSubmitResponse(response) {
    alert()
    if (response === true) {
      this.context.router.push('/');
    }
    this.setState({ submitDisabled: false });
  }

  render() {
    return (
        <RegisterForm
          username={this.state.username}
          password={this.state.password}
          repeatPassword={this.state.repeatPassword}
          submitDisabled={this.state.submitDisabled}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
    );
  }
}
