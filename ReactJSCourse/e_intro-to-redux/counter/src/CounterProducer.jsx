import React from 'react'

const CounterProductor = ({onAdd, onRemove}) => (
  <div>
    <button onClick={onAdd}>Add counter</button>
    <button onClick={onRemove}>Remove counter</button>
  </div>
)

export default CounterProductor
