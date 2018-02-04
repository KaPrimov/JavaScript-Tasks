import React, {Component} from 'react';
import Header from './components/common/Header';
import Navbar from './components/common/Navbar';
import Infobox from  './components/common/Infobox';
import Footer from  './components/common/Footer';
import {Link} from 'react-router';
import observer from './models/observer';
import '../public/messages.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false, username: '' };
        observer.onSessionUpdate = this.onSessionUpdate.bind(this);
    }

    componentDidMount() {
        this.onSessionUpdate();
    }

    onSessionUpdate() {
        let name = sessionStorage.getItem("username");
        if (name) {
            this.setState({ loggedIn: true, username: sessionStorage.getItem("username") });
        } else {
            this.setState({ loggedIn: false, username: '' });
        }
    }

    render() {
        let navbar = {};
        if (!this.state.loggedIn) {
            navbar = (
                <Navbar>
                    <Link to="/" className="anonymous" id="linkMenuAppHome" onlyActiveOnIndex={true}>Home</Link>
                    <Link to="/login" className="anonymous" id="linkMenuLogin">Login</Link>
                    <Link to="/register" className="anonymous" id="linkMenuRegister">Register</Link>
                </Navbar>
            );
        } else {
            navbar = (
                <Navbar>
                    <Link to="/" className="useronly" id="linkMenuUserHome" onlyActiveOnIndex={true}>Home</Link>
                    <Link to="/messages" className="useronly" id="linkMenuMyMessages">My Messages</Link>
                    <Link to="/archive" className="useronly" id="linkMenuArchiveSent">Archive (Sent)</Link>
                    <Link to="/send" className="useronly" id="linkMenuSendMessage">Send Message</Link>
                    <Link to="/logout" className="useronly" id="linkMenuLogout">Logout</Link>
                </Navbar>
            );
        }

        return (
            <div id="app">
                <Header loggedIn={this.state.loggedIn} user={this.state.username}>
                    {navbar}
                </Header>
                <main>
                    <Infobox/>
                    {this.props.children}
                    <Footer/>
                </main>
            </div>
        )
    }
}

export default App;
