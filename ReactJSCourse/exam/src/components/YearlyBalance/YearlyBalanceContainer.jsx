import React, { Component } from 'react'
import { fetchYearData } from '../../actions/yearlyActions'
import { connect } from 'react-redux'
import LoginPage from '../Auth/LoginPage'

import SingleMonth from './SingleYearComponent'

class YearlyBalanceContainer extends Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.getData(this.props.match.params.year)
  }

  render () {
    if (!localStorage.getItem('authToken')) {
      return <LoginPage />
    }
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
    return (
      <div className='container'>
        <div className='row space-top'>
          <div className='col-md-12'>
            <h1>Yearly Balance</h1>
          </div>
        </div>
        <div className='row space-top col-md-12'>
          {this.props.months.map((month, index) => {
            return <SingleMonth monthData={month} year={this.props.match.params.year} key={index} monthName={monthNames[index]} monthIndex={index + 1}/>
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  const result = Object.keys(state.yearly.months).map(function (key) {
    return [state.yearly.months[key]]
  })
  return {
    months: result
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getData: (year) => dispatch(fetchYearData(year))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YearlyBalanceContainer)
