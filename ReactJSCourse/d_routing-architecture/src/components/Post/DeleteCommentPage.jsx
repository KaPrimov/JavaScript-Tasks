import React, { Component } from 'react';
import observer from '../../models/observer';
import { Redirect } from 'react-router-dom'
import { deleteComment } from '../../models/commentsService'

export default class DeleteCommentPage extends Component {

    componentDidMount () {
        const id = this.props.match.params.id
        alert(id)
        deleteComment(id, (data) => {
            observer.showSuccess('Comment deleted')
        }).catch(err => observer.showError(err.message))
    }

    render() {
        return <Redirect to='/catalog' />
    }
}