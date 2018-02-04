import React, {Component} from 'react';
import '../../../public/messages.css';
import {deleteMessage} from '../../models/message';
import '../../../public/messages.css';
import observer from '../../models/observer';


export default class Message extends Component {
    constructor(props) {
        super(props);
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.deleteMessage = this.deleteMessage.bind(this);
    }


    deleteMessage(event) {
        event.preventDefault();
        deleteMessage(this.props.id, sessionStorage.getItem('username'));
        observer.showSuccess('The message was deleted!');
        this.context.router.push('/');
    }

    render() {
        function formatDate(dateISO8601) {
            let date = new Date(dateISO8601);
            if (Number.isNaN(date.getDate()))
                return '';
            return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
                "." + date.getFullYear() + ' ' + date.getHours() + ':' +
                padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

            function padZeros(num) {
                return ('0' + num).slice(-2);
            }
        }

        function formatSender(name, username) {
            if (!name)
                return username;
            else
                return username + ' (' + name + ')';
        }

        let receiver = formatSender('', this.props.receiver);
        let dataParsed = this.props.date.split('.');
        let date = formatDate(dataParsed[0]);
        return(
            <tr >
                <th>{receiver}</th>
                <th>{this.props.text}</th>
                <th>{date}</th>
                <th><button value="Delete" onClick={this.deleteMessage}>Delete</button></th>
            </tr>
        )
    }
}

Message.contextTypes = {
    router: React.PropTypes.object
};