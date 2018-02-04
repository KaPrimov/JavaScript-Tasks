import React, { Component } from 'react'

export default class Input extends Component {
  render () {
    const { name, type = 'text', value, onChange, label, valid } = this.props
    return (
      <div className='form-group'>
        <label htmlFor={name} className='form-control-label'>{label}</label>
        <input
          onChange={onChange}
          name={name}
          id={name}
          type={type}
          className={'form-control' + (valid ? ' is-valid' : ' is-invalid')}
          value={value} />
        {valid && <div class='form-control-feedback'>This input value is valid</div>}
      </div>
    )
  }
}
