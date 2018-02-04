import React, {Component} from 'react';
import '../../../public/messages.css'

export default class Greeting extends Component {
    render() {
        if (this.props.user === '' || this.props.user === undefined) {
            return null;
        } else {
            return (
                <span className="useronly" id="spanMenuLoggedInUser">Welcome, {this.props.user}!</span>
            );
        }
    }
}