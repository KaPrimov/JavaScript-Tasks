import React, { Component } from 'react';
import { loadPostById } from '../../models/postsService'
import { createComment } from '../../models/commentsService'
import { loadAllCommentsInPost } from '../../models/commentsService'
import PostSummaryDetails from './PostSummaryDetails'
import CommentBox from './CommentBox'
import Comment from './Comment'
import observer from '../../models/observer'

export default class DetailsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: [],
            post: {},
            dateCreated: '',
            content: '',
            submitDisabled: false
        }
        this.bindEventHandlers()
    }

    bindEventHandlers() {
        this.onPostSave = this.onPostSave.bind(this)
        this.onCommentsSave = this.onCommentsSave.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id
        loadPostById(id, this.onPostSave)
    }

    onPostSave(post) {
        this.setState({ post: post, dateCreated: post._kmd.lmt })
        loadAllCommentsInPost(post._id, this.onCommentsSave)
    }

    onCommentsSave(comments) {
        this.setState({ comments: comments })
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault()
        let isValid = true
        if (this.state.content.trim().length === 0) {
            observer.showError('The comment boy can not be empty!')
            return
        }
        if (isValid) {
            this.setState({ submitDisabled: true })
            createComment(sessionStorage.getItem('username'), this.state.content, this.state.post._id, loadAllCommentsInPost(this.state.post._id, this.onCommentsSave))
            observer.showSuccess('The comment is added')
            this.setState({ content: '' })
        }
    }

    render() {
        return (

            <section id="viewComments">
                < PostSummaryDetails
                    post={this.state.post}
                    dateCreated={this.state.dateCreated}
                />
                <CommentBox 
                    text={this.state.content}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                    disabled={this.state.disabled}
                />
                {this.state.comments.map((comment, i) => <Comment key={i} comment={comment}/>)}
            </section>
        )
    }
}