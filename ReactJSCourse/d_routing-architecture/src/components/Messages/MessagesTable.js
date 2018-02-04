import React, {Component} from 'react';
import Message from './Message';
import {loadMessageToTheUser} from '../../models/message';

export default class CatalogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        // Display teams
        this.setState({messages: response})
    }

    componentDidMount() {
        // Request list of teams from the server
        loadMessageToTheUser(sessionStorage.getItem('username'), this.onLoadSuccess);
    }

    render() {
        if(sessionStorage.getItem('username')) {
            return (
                <section id="viewMyMessages">
                    <h1>My Messages</h1>
                    <div className="messages" id="myMessages">
                        <table>
                            <thead>
                            <tr>
                                <th>From</th>
                                <th>Message</th>
                                <th>Date Received</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.messages.map((message, index) => {
                                return <Message key={index} sender={message.sender_name} senderUsername={message.sender_username} date={message._kmd.lmt} text={message.text}/>
                            })}
                            </tbody>
                        </table>
                    </div>
              </section>
        );} else {
            return <h2>Please Login to see the content!!!</h2>
        }
    }
}