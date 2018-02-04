import React, {Component} from 'react';

export default class RegisterForm extends Component {
    render() {
        return (
            <form id="formRegister" onSubmit={this.props.onSubmitHandler}>
                <div>
                    <div>Username:</div>
                    <input
                        id="registerUsername"
                        type="text"
                        name="username"
                        value={this.props.username}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                        required
                    />
                </div>
                <div>
                    <div>Password:</div>
                    <input
                        id="registerPasswd"
                        type="password"
                        name="password"
                        value={this.props.password}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                        required
                    />
                </div>
                <div>
                    <div>Name:</div>
                    <input
                        id="registerName"
                        type="text"
                        name="fullName"
                        value={this.props.fullName}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div>
                   <input type="submit" value="Register" disabled={this.props.submitDisabled}/>
                </div>
            </form>
        );
    }
}