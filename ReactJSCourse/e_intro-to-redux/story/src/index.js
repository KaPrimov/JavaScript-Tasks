import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import AppContainer from './AppContainer'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </ Provider>,
    document.getElementById('root')
);
