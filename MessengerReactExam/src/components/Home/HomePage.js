import React, {Component} from 'react';
import {Link} from 'react-router';
import '../../../public/messages.css'

export default class HomePage extends Component {
    render() {

        if (sessionStorage.getItem('username')) {
            return (
                <section id="viewUserHome">
                    <h1 id="viewUserHomeHeading">Welcome, {sessionStorage.getItem('username')}!</h1>
                    <Link to="/messages" id="linkUserHomeMyMessages">My Messages</Link>
                    <Link to="/send" id="linkUserHomeSendMessage">Send Message</Link>
                    <Link to="/archive" id="linkUserHomeArchiveSent">Archive (Sent)</Link>
                </section>
            )
        } else {
            return (
                <section id="viewAppHome">
                    <h1>Welcome</h1>
                    Welcome to our messaging system.
                </section>
            )
        }



    }
}