import React from 'react'

const PlannerForm = ({initialBudget, initialIncome, onChangeHandler, onSubmitPlan}) => {
  return (
    <div className='col-md-3 space-top'>
      <h4>Planner</h4>
      <form onSubmit={onSubmitPlan}>
        <div className='form-group'>
          <label className='form-control-label' htmlFor='income'>Income:</label>
          <input className='form-control' name='income' type='number' value={initialIncome} onChange={onChangeHandler} />
        </div>
        <div className='form-group'>
          <label className='form-control-label' htmlFor='budget'>Budget:</label>
          <input className='form-control' name='budget' type='number' value={initialBudget} onChange={onChangeHandler} />
        </div>
        <input type='submit' className='btn btn-secondary' value='Save' />
      </form>
    </div>
  )
}

export default PlannerForm
