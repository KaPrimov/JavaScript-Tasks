import * as requester from './requester';
import observer from './observer';


function saveSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('name', userInfo.name);

    observer.onSessionUpdate();
}

// user/login
function login(username, password, callback) {
    let userData = {
        username,
        password
    };

    requester.post('user', 'login', userData, 'basic')
        .then(loginSuccess).catch(loginError);

    function loginSuccess(userInfo) {
        saveSession(userInfo);
        callback(true);
        observer.showSuccess('Login successful!')
    }

    function loginError(err) {
        let message = JSON.parse(err.responseText);
        callback(true);
        observer.showError('Error: ' + message.description)
    }
}

// user/register
function register(username, password, name, callback) {
    let userData = {
        username,
        password,
        name
    };

    requester.post('user', '', userData, 'basic')
        .then(registerSuccess);

    function registerSuccess(userInfo) {
        observer.showSuccess('Successful registration.');
        saveSession(userInfo);
        callback(true);
    }
}

// user/logout
function logout(callback) {
    requester.post('user', '_logout', null, 'kinvey')
        .then(logoutSuccess);


    function logoutSuccess(response) {
        sessionStorage.clear();
        observer.onSessionUpdate();
        callback(true);
        observer.showSuccess('Successful logout!')
    }
}

function getAllUsers(callback) {
    requester.get('user', '', 'kinvey')
        .then(callback)
}


export {login, register, logout, getAllUsers};