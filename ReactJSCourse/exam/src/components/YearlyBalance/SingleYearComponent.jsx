import React from 'react'
import { Link } from 'react-router-dom'
const SingleYearComponent = ({ monthData, year, monthName, monthIndex }) => {
  return (
    <div className='col-md-3'>
      <div className='card text-white bg-secondary'>
        <div className='card-body'>
          <blockquote className='card-blockquote'>
            <h2>{monthName}</h2>
            <h4>Year {year}</h4>
            <label htmlFor='budget'>Budget:</label>
            <input className='col-md-9' name='budget' disabled value={monthData.budget} />
            <label htmlFor='balance'>Balance:</label>
            <input className='col-md-9' name='balance' disabled value={monthData.balance} />
            <div className='space-top'>
              <Link to={`/yearly/${year}/${monthIndex}`} className='btn btn-secondary'>Details</Link>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default SingleYearComponent
