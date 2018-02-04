import React, {Component} from 'react';
import {Link} from 'react-router';
import '../../../public/messages.css';

export default class Team extends Component {
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

        let sender = formatSender(this.props.sender, this.props.senderUsername);
        let dataParsed = this.props.date.split('.');
        let date = formatDate(dataParsed[0]);
        return(
            <tr >
                <th>{sender}</th>
                <th>{this.props.text}</th>
                <th>{date}</th>
            </tr>
        )
    }
}