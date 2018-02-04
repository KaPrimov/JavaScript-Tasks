import React from 'react'
import dateConverter from '../../utils/DataConverter'
import { Link } from 'react-router-dom';

const Comment = ({ comment }) => {
  return (
    <article className="post post-content">
      <p>{comment.content}</p>
      <div className="info">
       {`submitted ${dateConverter(comment._kmd.lmt)} ago by ${comment.author} |`} 
       {sessionStorage.getItem('username') === comment.author && <Link to={`/delete/comment/${comment._id}`} className="deleteLink">delete</Link>}       
      </div>
    </article>
  )
}

export default Comment
