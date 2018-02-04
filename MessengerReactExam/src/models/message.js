import {get, post, update, deleteItem} from './requester';
import observer from './observer';

function loadMessageToTheUser(username, onUsersSuccess) {
    get('appdata', `messages?query={"recipient_username": "${username}"}`, 'kinvey')
        .then(onUsersSuccess);
}

function loadMessagesFromUser(username, onUsersSuccess) {
    get('appdata', `messages?query={"sender_username": "${username}"}`, 'kinvey')
        .then(onUsersSuccess);
}
function deleteMessage(id, username) {
    deleteItem('appdata', 'messages', id, 'kinvey')
        .then(get('appdata', `messages?query={"sender_username": "${username}"}`, 'kinvey'))


}
function addMessage(text, sender_username, sender_name, recipient_username, callback) {
    let commentData = {
        text,
        sender_username,
        sender_name,
        recipient_username
    };

    post('appdata', 'messages', commentData, 'kinvey')
        .then(callback).catch(function (err) {
        let message = JSON.parse(err.responseText);
        callback(true);
        observer.showError('Error: ' + message.description)
    });


}



export { loadMessageToTheUser, loadMessagesFromUser, deleteMessage, addMessage }