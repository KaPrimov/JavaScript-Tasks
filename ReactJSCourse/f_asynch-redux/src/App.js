import React, { Component } from 'react'
import Navbar from './components/common/Navbar'
import Infobox from './components/common/Infobox'
import Footer from './components/common/Footer'
import RegisterPage from './components/user/RegisterPage'
import LoginPage from './components/user/LoginPage'
import LogoutPage from './components/user/LogoutPage'
import HomePage from './components/home/HomePageContainer'
import UserFeedPage from './components/user/UserFeedPage'
import SingleUserView from './components/user/SingleUserView'
import AllUsersPageContainer from './components/discover/AllUsersPageContainer'
import observer from './api/observer'
import { Route, NavLink, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ajaxStatusActions from './actions/ajaxStatusActions'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { loggedIn: false, username: '' }
    observer.onSessionUpdate = this.onSessionUpdate.bind(this)
    this.hideHandler = this.hideHandler.bind(this)
  }

  componentDidMount () {
    this.onSessionUpdate()
  }

  onSessionUpdate () {
    let name = sessionStorage.getItem('username')
    if (name) {
      this.setState({ loggedIn: true, username: sessionStorage.getItem('username') })
    } else {
      this.setState({ loggedIn: false, username: '' })
    }
  }

  hideHandler() {
    this.props.actions.hideRequestResult()
  }

  render () {
    let navbar = {}
    if (this.props.user.username === undefined) {
      navbar = (
        <Navbar>
          <NavLink exact to='/' className='nav'>Home</NavLink>
          <NavLink exact to='/register' className='nav'>Register</NavLink>
          <NavLink exact to='/login' className='nav'>Login</NavLink>
        </Navbar>
      )
    } else {
      navbar = (
        <Navbar>
          <NavLink to='/' className='nav'>Home</NavLink>
          <NavLink to='/discover' className='nav' >Discover</NavLink>
          <NavLink to='/me' className='nav'>Me</NavLink>
          <NavLink to='/logout' className='nav'>Logout</NavLink>
        </Navbar>
      )
    }

    return (
      <div id='app'>
        <header>
          <span>Chirper</span>
        </header>
        <main className='content'>
          {navbar}
          <Infobox message={this.props.message} style={this.props.style} visible={this.props.visible} hideHandler={this.hideHandler} />
          <Switch>
            <Route path='/register' component={RegisterPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/logout' component={LogoutPage} />
            <Route path='/me' component={UserFeedPage} />
            <Route path='/discover' component={AllUsersPageContainer} />
            <Route path='/user/:id' component={SingleUserView} />
            <Route exact path='/' component={HomePage} />
          </Switch>
          <Footer />
        </main>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    message: state.ajaxRequests.message,
    style: state.ajaxRequests.type,
    visible: state.ajaxRequests.visible,
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(ajaxStatusActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
