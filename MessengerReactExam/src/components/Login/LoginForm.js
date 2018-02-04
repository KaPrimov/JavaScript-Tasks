import React, {Component} from 'react';

export default class LoginForm extends Component {
    render() {
        return (
            <form id="formLogin" onSubmit={this.props.onSubmitHandler}>
                <div>
                    <div>Username:</div>
                    <input
                        id="loginUsername"
                        type="text"
                        name="username"
                        value={this.props.username}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <div>Password:</div>
                    <input
                        id="loginPasswd"
                        type="password"
                        name="password"
                        value={this.props.password}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div>
                    <input type="submit" value="Login" disabled={this.props.submitDisabled}/>
                </div>

            </form>
        );
    }
}