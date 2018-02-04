import React from 'react'
import dataConverter from '../../utils/DataConverter'
import { Link } from 'react-router-dom';

const PostSummaryDetails = ({ post, dateCreated }) => {
    let controls = ''
    return (
        <div className="post">
            <div className="col thumbnail">
                <a href={post.url} >
                    <img src={post.imageUrl} />
                </a>
            </div>
            <div className="post-content">
                <div className="title">
                    <a href={post.url}>
                        {post.title}
                    </a>
                </div>
                <div className="details">
                    <p>{post.description}</p>
                    <div className="info">
                        {`submitted ${dataConverter(dateCreated)} ago by ${post.author}`}
                    </div>
                    {sessionStorage.getItem('username') === post.author &&
                        <div className="controls">
                            <ul>
                                <li className="action"><Link to={"/edit/" + post._id}>edit</Link></li>
                                <li className="action"><Link to={"/delete/" + post._id}>delete</Link></li>
                            </ul>
                        </div>
                    }

                </div>
            </div>
            <div className="clear"></div>
        </div>
    )
}

export default PostSummaryDetails