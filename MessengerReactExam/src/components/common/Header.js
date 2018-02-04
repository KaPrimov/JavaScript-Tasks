import React, {Component} from 'react';
import Greeting from './Greeting';

export default class Header extends Component {
    render() {
        return (
            <header id="menu">
                <Greeting user={this.props.user}/>
                {this.props.children}
            </header>
        );
    }
}