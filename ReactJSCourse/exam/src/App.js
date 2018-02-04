import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Header from './components/common/Header'
import RegisterPage from './components/Auth/RegisterPage'
import LoginPage from './components/Auth/LoginPage'
import YearlyPage from './components/YearlyBalance/YearlyBalanceContainer'
import MonthlyView from './components/MonthlyViews/MonthlyView'
import AddExpensePage from './components/ExpenseViews/AddNewExpenseContainer'
import { connect } from 'react-redux'
import { logoutAction } from './actions/authActions'
import toastr from 'toastr'

class App extends Component {
  constructor (props) {
    super(props)

    this.onLogout = this.onLogout.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.message) {
      switch (nextProps.message.type) {
        case 'success':
          toastr.success(nextProps.message.message)
          break
        case 'error':
          toastr.error(nextProps.message.message)
      }
    }
  }

  onLogout () {
    this.props.logout()
    this.props.history.push('/login')
  }

  render () {
    return (
      <div className='App'>
        <Header loggedIn={localStorage.getItem('authToken') != null} onLogout={this.onLogout} />
        <Switch>
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/plan/:year/:month/expense' component={AddExpensePage} />
          <Route path='/yearly/:year/:month' component={MonthlyView} />
          <Route path='/yearly/:year' component={YearlyPage} />
        </Switch>
      </div>
    )
  }
}

function mapState (state) {
  return {
    message: state.message
  }
}

function mapDispatch (dispatch) {
  return {
    logout: () => dispatch(logoutAction())
  }
}

export default withRouter(connect(mapState, mapDispatch)(App))
