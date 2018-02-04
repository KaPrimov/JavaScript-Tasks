import React from 'react'
import dateConverter from '../../utils/DateConverter'
import { NavLink } from 'react-router-dom'

const SingleChirpUser = ({ chirp, deleteHandler }) => {
  return (
    <article className='chirp'>
      <div className='titlebar'>
        <a href='#' className='chirp-author'>{chirp.author}</a>
        <NavLink to='#' name={chirp._id} onClick={deleteHandler}>delete</NavLink>
        <span className='chirp-time'>{dateConverter(chirp._kmd.ect)}</span>
      </div>
      <p>{chirp.text}</p>
    </article>
  )
}

export default SingleChirpUser
