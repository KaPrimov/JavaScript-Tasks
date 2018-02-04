import React, { Component } from 'react';
import observer from '../../models/observer';
import { Redirect } from 'react-router-dom'
import { deletePost } from '../../models/postsService'

export default class DeletePost extends Component {

    componentDidMount () {
        const id = this.props.match.params.id
        deletePost(id, () => {
            observer.showSuccess('Post deleted')
        })
    }

    render() {
        return <Redirect to='/catalog' />
    }
}