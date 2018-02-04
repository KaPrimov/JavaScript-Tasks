import React, { Component } from 'react';
import { logout } from '../../models/auth';
import observer from '../../models/observer';
import { Redirect } from 'react-router-dom'

export default class LogoutPage extends Component {
    constructor(props) {
        super(props);
        sessionStorage.clear()
        this.logout();
    }

    logout() {
        logout();
    }

    render() {
        return (
            <Redirect to='/' />
        );
    }
}