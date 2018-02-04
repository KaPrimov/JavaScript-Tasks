import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddNewExpenseComponent from './AddNewExpenseComponent'
import LoginPage from '../Auth/LoginPage'
import { addExpenseAction } from '../../actions/monthlyActions'
import { Redirect } from 'react-router-dom'

class AddNewExpenseContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      category: '',
      cost: 1,
      paymentDate: 0,
      redirect: false
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmitHandler (event) {
    event.preventDefault()
    let expenseData = {
      date: Number(this.state.paymentDate),
      name: this.state.name,
      category: this.state.category,
      amount: Number(this.state.cost)
    }
    this.props.addExpense(this.props.match.params.year, this.props.match.params.month, expenseData)
  }

  render () {
    if (!localStorage.getItem('authToken')) {
      return <LoginPage />
    }
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December']
    const monthName = monthNames[(Number(this.props.match.params.month) - 1)]
    return (
      <AddNewExpenseComponent
        year={this.props.match.params.year}
        month={monthName}
        onChangeHandler={this.onChangeHandler}
        name={this.state.name}
        category={this.state.category}
        cosy={this.state.cost}
        paymentDate={this.state.paymentDate}
        onSubmitHandler={this.onSubmitHandler}
        />
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    addExpense: (year, month, expenseData) => dispatch(addExpenseAction(year, month, expenseData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewExpenseContainer)
