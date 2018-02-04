import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMonthData, updateMonthlyData, deleteExpenseAction } from '../../actions/monthlyActions'
import { Link } from 'react-router-dom'
import PlannerForm from './PlannerForm'
import ExpensesTable from './ExpensesTable'
import LoginPage from '../Auth/LoginPage'

class MonthlyView extends Component {

  constructor (props) {
    super(props)
    this.state = {
      budget: this.props.monthData.budget,
      income: this.props.monthData.income,
      expenses: this.props.monthData.expenses,
      year: this.props.match.params.year
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitPlan = this.onSubmitPlan.bind(this)
    this.onDeleteHandler = this.onDeleteHandler.bind(this)
  }

  componentWillMount () {
    this.props.getData(this.props.match.params.year, this.props.match.params.month)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      budget: nextProps.monthData.budget,
      income: nextProps.monthData.income,
      expenses: nextProps.monthData.expenses
    })
  }

  onChangeHandler (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmitPlan (event) {
    event.preventDefault()
    this.props.updateData(this.props.match.params.year, this.props.match.params.month, Number(this.state.income), Number(this.state.budget))
  }

  onDeleteHandler (event) {
    const id = event.target.name
    this.props.deleteExpense(id)
  }

  render() {
    if (!localStorage.getItem('authToken')) {
      return <LoginPage />
    }
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
    const monthName = monthNames[(Number(this.props.match.params.month) - 1)]
    return (
      <div className='container'>
        <div className='row space-top'>
          <div className='col-md-12'>
            <h1>Welcome to Budget Planner</h1>
          </div>
        </div>
        <div className='row space-top '>
          <div className='col-md-12 '>
            <div className='card bg-secondary'>
              <div className='card-body'>
                <blockquote className='card-blockquote'>
                  <h2 id='month'>{`${monthName} ${this.state.year}`}</h2>
                  <div className='row'>
                    <PlannerForm initialBudget={this.state.budget} initialIncome={this.state.income} onChangeHandler={this.onChangeHandler} onSubmitPlan={this.onSubmitPlan} />
                    <div className='col-md-8 space-top'>
                      <div className='row'>
                        <h4 className='col-md-9'>Expenses</h4>
                        <Link to={`/plan/${this.state.year}/${this.props.match.params.month}/expense`} className='btn btn-secondary ml-2 mb-2'>Add expenses</Link>
                      </div>
                      <ExpensesTable expenses={this.state.expenses} onDeleteHandler={this.onDeleteHandler} />
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    monthData: state.month.month
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getData: (year, month) => dispatch(fetchMonthData(year, month)),
    updateData: (year, month, income, budget) => dispatch(updateMonthlyData(year, month, income, budget)),
    deleteExpense: (id) => dispatch(deleteExpenseAction(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyView)
