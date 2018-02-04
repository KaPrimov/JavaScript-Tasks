import React, {Component} from 'react';
import {Link} from 'react-router';
import Footer from '../common/Footer';
import './HomePage.css'
import Carousel from './Carousel'

export default class HomePage extends Component {
    render() {
        let message = <p>You are currently not logged in. Please, log in or register to view the content.</p>;

        if (sessionStorage.getItem('username')) {
            if (sessionStorage.getItem('username')) {
                message = <Link to={"/catalog"}>Go to catalog</Link>
            } else {
                message = <p>You are currently not logged in. <Link to="/catalog">catalog</Link> to join or create one.</p>;
            }
        }

        return (
            <div>
                <h1>Home Page</h1>
                <Carousel />
                {message}
            </div>
        );
    }
}