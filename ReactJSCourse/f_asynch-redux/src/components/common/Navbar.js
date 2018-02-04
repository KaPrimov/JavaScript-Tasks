import React from 'react'

const Navbar = (props) => {
  return (
    <div className='menu'>
      {props.children}
    </div>
  )
}

export default Navbar
