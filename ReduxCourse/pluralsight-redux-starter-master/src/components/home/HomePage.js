import React from 'react'
import {Link} from 'react-router'

const HomePage = () => {
  return (
    <div className='jumbotron'>
      <h1>Administration</h1>
      <p>App build with Redux</p>
      <Link to='about' className='btn btn-primary btn-lg'>Learn more</Link>
      <h1>Home page</h1>
    </div>
  )
}

export default HomePage
