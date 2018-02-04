import React, {Component} from 'react';
import CreateMessageForm from './SendMessageForm';
import {addMessage} from '../../models/message';
import {getAllUsers} from '../../models/user'
import observer from '../../models/observer';


export default class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            senderName: '',
            senderUsername: '',
            recipient: '',
            text: '',
            users: [],
            submitDisabled: false,
            };
        this.bindEventHandlers();
    }

    componentDidMount() {
        getAllUsers(this.saveUsers)
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.saveUsers = this.saveUsers.bind(this);
    }

    saveUsers(respond) {
        console.log(respond);
        console.log('here');
        this.setState({users: respond})
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({submitDisabled: true});
        addMessage(this.state.text, sessionStorage.getItem('username'), sessionStorage.getItem('name'), this.state.recipient, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        this.context.router.push('/');
        observer.showSuccess('Message was added!')

    }

    render() {
        return (
            <section id="viewSendMessage">
                <h1>Send Message</h1>
                <CreateMessageForm
                    users={this.state.users}
                    text={this.state.text}
                    receiver={this.state.receiverUsername}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </section>
        );
    }
}

CreatePage.contextTypes = {
    router: React.PropTypes.object
};