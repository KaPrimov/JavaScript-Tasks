import React from 'react'
const AddNewExpenseComponent = ({ month, year, onChangeHandler, name, category, cost, paymentDate, onSubmitHandler }) => {
  return (
    <div className='container'>
      <div className='row space-top'>
        <div className='col-md-12'>
          <h1>Add Expenses</h1>
          <h3>{`${month} ${year}`}</h3>
        </div>
      </div>
      <div className='row space-top'>
        <div className='col-md-10'>
          <form onSubmit={onSubmitHandler}>
            <legend>Add a new expense</legend>
            <div className='form-group'>
              <label className='col-md-2' htmlFor='name'>Name:</label>
              <input className='col-md-2' name='name' type='text' onChange={onChangeHandler} value={name} />
            </div>
            <div className='form-group'>
              <label className='col-md-2' htmlFor='category'>Category:</label>
              <select className='col-md-2 pl-2' name='category' onChange={onChangeHandler} value={category}>
                <option>Non-essential</option>
                <option>Fixed</option>
                <option>Variable</option>
              </select>
            </div>
            <div className='form-group'>
              <label className='col-md-2' htmlFor='cost'>Cost:</label>
              <input className='col-md-2' name='cost' type='number' onChange={onChangeHandler} value={cost} />
            </div>
            <div className='form-group'>
              <label className='col-md-2' htmlFor='paymentDate'>Payment Date:</label>
              <input className='col-md-2' name='paymentDate' type='text' onChange={onChangeHandler} value={paymentDate} />
            </div>
            <input type='submit' className='btn btn-secondary' value='Add' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddNewExpenseComponent
