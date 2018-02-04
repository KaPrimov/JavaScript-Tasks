import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import RegisterHomePage from '../UserComponents/RegisterHomePage'
import CatalogPage from '../Catalog/CatalogPage'

export default class HomePage extends Component {
    render() {

        if (sessionStorage.getItem('username')) {
            return (
                <CatalogPage />
            )
        } else {
            return (
                <RegisterHomePage />
            )
        }



    }
}