import React from 'react';
import { Link } from 'react-router-dom';
import calcTime from '../../utils/DataConverter'
import '../../style/post.css'

const Post = function(props) {
    return (
        <article className="post">
            <div className="col rank">
                <span>{props.key}</span>
            </div>
            <div className="col thumbnail">
                <a href={props.url}>
                    <img src={props.imageUrl} alt={props.title}/>
                </a>
            </div>
            <div className="post-content">
                <div className="title">
                    <a href={props.url}>
                        {props.title}
                    </a>
                </div>
                <div className="details">
                    <div className="info">
                        { `Submited ${calcTime(props.dateCreated)} ago by ${props.author}`}
                    </div>
                    <div className="controls">
                        <ul>
                            {sessionStorage.getItem("username") === props.author ? <li className="action" ><Link to={"/delete/" + props.id} href="#">delete</Link></li> : null}
                            {sessionStorage.getItem("username") === props.author ? <li className="action" ><Link to={"/edit/" + props.id} href="#">edit</Link></li> : null}
                            <li className="action"><Link to={"/comment/" + props.id} href="#">comments</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </article>
    )
}

export default Post
