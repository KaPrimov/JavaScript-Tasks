import React from 'react'
import { connect } from 'react-redux'
const ExpenseRow = ({row, onDeleteHandler}) => {
  return (
    <tr>
      <td>{row.name}</td>
      <td>{row.category}</td>
      <td>{row.amount}</td>
      <td>{`${row.date}-${row.month}-${row.year}`}</td>
      <td>
        <button className='btn btn-secondary' name={row.id} onClick={onDeleteHandler}>Delete</button>
      </td>
    </tr>
  )
}

export default ExpenseRow
