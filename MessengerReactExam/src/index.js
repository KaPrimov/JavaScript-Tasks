import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../public/messages.css'
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import HomePage from './components/Home/HomePage';
import Login from './components/Login/LoginPage';
import Register from './components/Register/RegisterPage';
import Logout from './components/Logout/LogoutPage';
import MyMessages from './components/Messages/MessagesTable';
import ArchMessages from './components/Messages/SentMessagesTable';
import SendMessagePage from './components/Messages/SendMessagePage';
import $ from 'jquery'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="login" component={Login}/>
            <Route path="register" component={Register}/>
            <Route path="logout" component={Logout}/>
            <Route path="messages" component={MyMessages}/>
            <Route path="archive" component={ArchMessages}/>
            <Route path="send" component={SendMessagePage}/>
        </Route>
    </Router>,
    $('body')[0]
);
