import React from 'react'

const DeleteLast = ({ deleteLast }) => {
    
    return (
        <button onClick={deleteLast} className='delete-last-btn btn'>Delete last</button>
    )
}

export default DeleteLast