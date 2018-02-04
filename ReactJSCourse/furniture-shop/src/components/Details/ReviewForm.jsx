import React from 'react'

const ReviewForm = ({reviewText, rating, onReviewSubmit, onChange, onClick}) => {
  return (
    <form onSubmit={onReviewSubmit}>
      <legend>Leave a review</legend>
      <div className='form-group'>
        <textarea className='form-control' name='reviewText' onChange={this.onChange} defaultValue={reviewText}></textarea>
      </div>
      <div className='form-group'>
        <label>Rating</label>
        <div className='btn-group mr-2' role='group' aria-label='First group'>
          <button type='button' className={rating === 1 ? 'btn btn-primary' : 'btn btn-secondary'} value='1' onClick={onClick}>1</button>
          <button type='button' className={rating === 2 ? 'btn btn-primary' : 'btn btn-secondary'} value='2' onClick={onClick}>2</button>
          <button type='button' className={rating === 3 ? 'btn btn-primary' : 'btn btn-secondary'} value='3' onClick={onClick}>3</button>
          <button type='button' className={rating === 4 ? 'btn btn-primary' : 'btn btn-secondary'} value='4' onClick={onClick}>4</button>
          <button type='button' className={rating === 5 ? 'btn btn-primary' : 'btn btn-secondary'} value='5' onClick={onClick}>5</button>
        </div>
        <input type='submit' className='btn btn-primary' value='Submit review' />
      </div>
    </form>
  )
}

export default ReviewForm
