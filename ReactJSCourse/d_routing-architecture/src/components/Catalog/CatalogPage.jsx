import React, { Component } from 'react';
import Post from './Post';
import { loadAllPosts } from '../../models/postsService'

// import {Link} from 'react-router';

export default class CatalogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };

        this.bindEventHandlers()
    }

    bindEventHandlers() {
        this.onProductsLoadSuccess = this.onProductsLoadSuccess.bind(this);
    }

    componentDidMount() {
        loadAllPosts(this.onProductsLoadSuccess)
    }

    onProductsLoadSuccess(response) {
        this.setState({ posts: response })
    }

    render() {
        let postId = 0
        if (sessionStorage.getItem('username')) {
            return (
                <div id="viewCatalog">
                    <div id="posts">
                        {this.state.posts.map((p, i) => {
                            postId++
                            return <Post
                                key={postId}
                                author={p.author}
                                id={p._id}
                                title={p.title}
                                description={p.description}
                                url={p.url}
                                imageUrl={p.imageUrl}
                                dateCreated={p._kmd.lmt}
                            />
                        })}
                    </div>
                </div>
            );
        } else {
            return (
                <h1>You do not have permissions</h1>
            )
        }

    }
}