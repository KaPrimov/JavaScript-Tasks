import React from 'react'
import dateConverter from '../../utils/DateConverter'
import { NavLink } from 'react-router-dom'

const SingleHomePageChirp = ({ chirp, id }) => {
  return (
    <article className='chirp'>
      <div className='titlebar'>
        <NavLink to={'/user/' + (chirp.author._id || id)} className='chirp-author'>{chirp.author}</NavLink>
        <span className='chirp-time'>{dateConverter(chirp._kmd.ect)}</span>
      </div>
      <p>{chirp.text}</p>
    </article>
  )
}

export default SingleHomePageChirp
