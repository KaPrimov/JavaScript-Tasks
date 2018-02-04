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

    requester.post('user', 'login', 'basic', userData)
        .then(loginSuccess).catch(loginError);

    function loginSuccess(userInfo) {
        saveSession(userInfo);
        callback(true);
        observer.showSuccess('Login successful!')
    }

    function loginError(err) {
        let message = JSON.parse(err.responseText);
        callback(false);
        observer.showError('Error: ' + message.description)
    }
}

// user/register
function register(username, password, repeatPassword, callback) {
    let userData = {
        username,
        password
    };

    const usernameRegex = /[A-Za-z]{3,}/
    const passwordRegex = /[\d\w]{6,}/

    if (!usernameRegex.test(username) || !passwordRegex.test(password) || password !== repeatPassword) {
      observer.showError('Error: Failed user credential constraint')      
      return callback(false)
    }


    requester.post('user', '', 'basic', userData)
        .then(registerSuccess);

    function registerSuccess(userInfo) {
        observer.showSuccess('Successful registration.');
        saveSession(userInfo);
        callback(true);
    }
}

// user/logout
function logout(callback) {
    sessionStorage.clear();
    requester.post('user', '_logout', 'kinvey', null)

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