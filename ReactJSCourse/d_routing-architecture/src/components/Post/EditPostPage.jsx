import React, { Component } from 'react';
import observer from '../../models/observer';
import EditPostForm from './EditPostForm'
import { editPost, loadPostById } from '../../models/postsService'
import { Redirect } from 'react-router-dom'

export default class CreatePostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            title: '',
            image: '',
            description: '',
            id: '',
            submitDisabled: false,
            redirect: false
        };
        this.bindEventHandlers();
    }

    componentDidMount() {
        loadPostById(this.props.match.params.id, this.onPostLoadSuccess)        
    }

    onPostLoadSuccess(response) {
        console.log(response)
        this.setState({
            url: response.url,
            title: response.title,
            image: response.imageUrl,
            description: response.description,
            id: response._id
        })
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
        this.onPostLoadSuccess = this.onPostLoadSuccess.bind(this)
    }

    saveUsers(respond) {
        this.setState({ users: respond })
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        let isValid = true
        if (!this.state.url.startsWith('http')) {
            observer.showError('The url is not in the desired format!')
            isValid = false
        } else if (this.state.title === '') {
            observer.showError('The title can not be empty')
            isValid = false
        }
        if (isValid) {
            this.setState({ submitDisabled: true });
            editPost(this.state.id, sessionStorage.getItem('username'), this.state.title, this.state.description, this.state.url, this.state.image, this.onSubmitResponse);
        }
    }

    onSubmitResponse(response) {
        observer.showSuccess(`Post ${this.state.title} updated`)
        this.setState({ redirect: true })
        this.setState({ submitDisabled: false });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/catalog' />
        }
        return (
            <section id="viewSubmit">
                <div className="submitArea">
                    <h1>Edit Link</h1>
                    <p>Please, fill out the form. A thumbnail image is not required.</p>
                </div>
                <div className="submitArea formContainer">
                    <EditPostForm 
                        onChangeHandler={this.onChangeHandler}
                        onSubmitHandler={this.onSubmitHandler}
                        url={this.state.url}
                        title={this.state.title}
                        image={this.state.image}
                        description={this.state.description}
                    />
                </div>
            </section>
        );
    }
}