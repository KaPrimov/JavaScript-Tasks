import React, {Component} from 'react';
import '../../../public/messages.css';
export default class EditForm extends Component {
    render() {

        if(sessionStorage.getItem('username')) {
            return (
                <form id="formSendMessage" onSubmit={this.props.onSubmitHandler}>
                    <div>Recipient</div>
                    <div>
                        <select
                            onChange={this.props.onChangeHandler}
                            name="recipient"
                            value={this.props.receiver}>
                            {this.props.users.map((user, index) => {
                                function formatSender(name, username) {
                                    if (!name)
                                        return username;
                                    else
                                        return username + ' (' + name + ')';
                                }
                                let name = formatSender(user.name, user.username);
                                if(user.username !== sessionStorage.getItem('username')) {
                                    return(
                                        <option key={index} value={user.username}>{name}</option>
                                    )
                                }

                            })}
                        </select>
                    </div>
                    <div>Message Text:</div>
                    <div>
                        <input
                            type="text"
                            name="text"
                            id="msgText"
                            required
                            value={this.props.text}
                            disabled={this.props.submitDisabled}
                            onChange={this.props.onChangeHandler}
                        />
                    </div>

                    <input type="submit" value="Send" disabled={this.props.submitDisabled}/>
                </form>
            );
        } else {
            return <h2>Please Login to see the content!!!</h2>
        }

    }
}