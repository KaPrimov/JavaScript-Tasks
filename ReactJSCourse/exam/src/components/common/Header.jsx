import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    const { loggedIn, onLogout } = this.props

    return (
      <header>
        <nav className='navbar navbar-dark bg-secondary'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                {loggedIn && <NavLink to={'/yearly/' + (new Date()).getFullYear() + '/' + (new Date()).getMonth()} activeClassName='nav-link active' className='nav-link'>Monthly Balance</NavLink>}
                {loggedIn && <NavLink to={'/yearly/' + (new Date()).getFullYear()} activeClassName='nav-link active' className='nav-link'>Yearly Balance</NavLink>}
                {loggedIn && <a href='javascript:void(0)' onClick={onLogout} className='nav-link'>Logout</a>}
                {!loggedIn && <NavLink to='/login' activeClassName='nav-link active' className='nav-link'>Login</NavLink>}
                {!loggedIn && <NavLink to='/register' activeClassName='nav-link active' className='nav-link'>Register</NavLink>}
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
