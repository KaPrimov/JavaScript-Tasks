import React, {Component} from 'react';
import Message from './SentMessage';
import {loadMessagesFromUser, deleteMessage} from '../../models/message';

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
        this.setState({messages: response})
    }

    componentDidMount() {
        loadMessagesFromUser(sessionStorage.getItem('username'), this.onLoadSuccess);
    }

    render() {
        if(sessionStorage.getItem('username')) {
            return (
                <section id="viewArchiveSent">
                    <h1>Archive (Sent Messages)</h1>
                    <div className="messages" id="sentMessages">
                        <table>
                            <thead>
                            <tr>
                                <th>To</th>
                                <th>Message</th>
                                <th>Date Received</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.messages.map((message, index) => {
                                return <Message key={index}
                                                id={message._id}
                                                receiver={message.recipient_username}
                                                date={message._kmd.lmt}
                                                text={message.text}

                                />
                            })}
                            </tbody>
                        </table>
                    </div>
                </section>
            );
        } else {
            return (
                <h2>Please Login to see the content!!!</h2>
            )
        }

    }
}