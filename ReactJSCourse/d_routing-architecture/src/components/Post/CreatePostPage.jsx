import React, { Component } from 'react';
import observer from '../../models/observer';
import CreatePostForm from './CreatePostForm'
import { createPost } from '../../models/postsService'
import { Redirect } from 'react-router-dom'

export default class CreatePostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            title: '',
            image: '',
            description: '',
            submitDisabled: false,
            redirect: false
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
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
        this.setState({ submitDisabled: true });
        let isValid = true;
        if (!this.state.url.startsWith('http')) {
            observer.showError('The url is not in the desired format!')
            isValid = false
        } else if (this.state.title === '') {
            observer.showError('The title can not be empty')
            isValid = false
        }
        if (isValid) {
            this.setState({ submitDisabled: true });
            createPost(sessionStorage.getItem('username'), this.state.title, this.state.url, this.state.image, this.state.description, this.onSubmitResponse);
        }
    }

    onSubmitResponse(response) {
        observer.showSuccess('Message was added!')
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
                    <h1>Submit Link</h1>
                    <p>Please, fill out the form. A thumbnail image is not required.</p>
                </div>
                <div class="submitArea formContainer">
                    <CreatePostForm 
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