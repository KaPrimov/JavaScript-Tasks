import React from 'react'

const ChirperForm = ({text, onSubmit, onChangeHandler, user}) => {
  return (
    <div className='chirper'>
      <h2 className='titlebar'>{user.username}</h2>

      <form id='formSubmitChirp' className='chirp-form' onSubmit={onSubmit}>
        <textarea name='text' className='chirp-input' value={text} onChange={onChangeHandler} />
        <input className='chirp-submit' id='btnSubmitChirp' value='Chirp' type='submit' />
      </form>

      <div id='userStats' className='user-details'>
        <span>{user.chirps.length} chirps</span> | <span>{user.subscriptions.length} following</span> | <span>{user.followers.length} followers</span>
      </div>
    </div>
  )
}

export default ChirperForm
