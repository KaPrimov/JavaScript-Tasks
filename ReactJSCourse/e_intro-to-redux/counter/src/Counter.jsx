import React from 'react'

const Counter = ({value, onIncrement, onDecrement, clearCounter}) => {
  return (
    <p>
      Clicked: {value} times
      {' '}
      <button onClick={onIncrement}>
        INCREMENT
      </button>
      {' '}
      <button onClick={onDecrement}>
        DECREMENT
      </button>
      {' '}
      <button onClick={clearCounter}>
        CLEAR
      </button>
    </p>
  )
}

export default Counter
