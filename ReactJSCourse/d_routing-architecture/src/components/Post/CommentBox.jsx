import React from 'react'
import dataConverter from '../../utils/DataConverter'
import { Link } from 'react-router-dom';

const CommentBox = ({ text, onChangeHandler, onSubmitHandler, disabled }) => {
  return (
    <div className="post post-content">
      <form id="commentForm" onSubmit={onSubmitHandler}>
        <label>Comment</label>
        <textarea name="content" type="text" value={text} onChange={onChangeHandler}></textarea>
        <input type="submit" value="Add Comment" id="btnPostComment" disabled={disabled} />
      </form>
    </div>
  )
}

export default CommentBox
