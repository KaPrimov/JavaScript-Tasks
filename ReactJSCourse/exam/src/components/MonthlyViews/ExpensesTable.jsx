import React from 'react'
import ExpenseRow from './ExpenseRow'

const ExpensesTable = ({expenses, onDeleteHandler}) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Cost</th>
          <th>Payment Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, key) => {
          return <ExpenseRow key={key} row={expense} onDeleteHandler={onDeleteHandler} />
        })}
      </tbody>
    </table>
  )
}

export default ExpensesTable
