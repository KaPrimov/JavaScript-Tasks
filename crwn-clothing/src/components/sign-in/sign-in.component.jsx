import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    const {value, name} = event.target;
    this.setState((state,props) => ({ [name]:value }))
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(() => ({
      email: '',
      password: ''
    }))
  }

  render() {
    return (
    <div className="sign-in">
      <h2>I already have account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={this.handleSubmit}>
        <FormInput type="email" 
        name="email" 
        value={this.state.email} 
        handleChange={this.handleChange}
        label='Email'
        required/>

        <FormInput 
          type="password" 
          name="password" 
          value={this.state.password} 
          handleChange={this.handleChange}
          label='Password'
          required/>

        <CustomButton type="submit"> 
          Sign In
        </CustomButton>
        <CustomButton onClick={signInWithGoogle}> 
          {''}Sign In With Google{''}
        </CustomButton>
      </form>
    </div>)
  }
}

export default SignIn