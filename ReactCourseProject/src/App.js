import React, { Component } from 'react';
import {Link} from 'react-router';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Infobox from './components/common/Infobox'
import Cart from './components/Cart/Cart'


import observer from './models/observer';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {loggedIn: false, username: '', admin: false, cart: []};
        observer.onSessionUpdate = this.onSessionUpdate.bind(this);
    }

  componentDidMount() {
      this.onSessionUpdate()
  }

  onSessionUpdate() {
      let name = sessionStorage.getItem('username');
      if(name){
          this.setState({ loggedIn: true, username: sessionStorage.getItem("username") });
      } else {
          this.setState({ loggedIn: false, username: '' });
      }
      let adminLevel = sessionStorage.getItem('accessLevel');
      if(adminLevel) {
          this.setState({admin: true})
      } else {
          this.setState({admin: false})
      }
  }



  render() {
      let navbar = {};
      if (!this.state.loggedIn) {
          navbar = (
              <Navbar>
                  <Link to="/" className="btn btn-default" activeClassName="btn btn-default active" onlyActiveOnIndex={true}>Home</Link>
                  <Link to="/contacts" className="btn btn-default" activeClassName="btn btn-default active">Contacts</Link>
                  <Link to="/login" className="btn btn-default" activeClassName="btn btn-default active">Login</Link>
                  <Link to="/register" className="btn btn-default" activeClassName="btn btn-default active">Register</Link>
              </Navbar>
          );
      } else if(this.state.admin){
          navbar = (
              <Navbar>
                  <Link to="/" className="btn btn-default" activeClassName="btn btn-default active" onlyActiveOnIndex={true}>Home</Link>
                  <Link to="/contacts" className="btn btn-default" activeClassName="btn btn-default active">Contacts</Link>
                  <Link to="/catalog" className="btn btn-default" activeClassName="btn btn-default active">Catalog</Link>
                  <Link to="/logout" className="btn btn-default" activeClassName="btn btn-default active">Logout</Link>
                  <Link to="/admin" className="btn btn-default" activeClassName="btn btn-default active">Admin</Link>
              </Navbar>
          );
      } else {
          navbar = (
              <Navbar>
                  <Link to="/" className="btn btn-default" activeClassName="btn btn-default active" onlyActiveOnIndex={true}>Home</Link>
                  <Link to="/contacts" className="btn btn-default" activeClassName="btn btn-default active">Contacts</Link>
                  <Link to="/catalog" className="btn btn-default" activeClassName="btn btn-default active">Catalog</Link>
                  <Link to="/logout" className="btn btn-default" activeClassName="btn btn-default active">Logout</Link>
              </Navbar>
          );
      }

      return (
          <div className="container">
              <Cart/>
              <Header loggedIn={this.state.loggedIn} user={this.state.username}>
                {navbar}
            </Header>
              {this.props.children}
              <Footer />
              <Infobox/>

          </div>
      )
  }
}

export default App;
