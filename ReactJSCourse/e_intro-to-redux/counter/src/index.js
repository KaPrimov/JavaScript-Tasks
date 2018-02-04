import React from 'react'
import ReactDOM from 'react-dom'
import CounterList from './CounterList'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './CounterReducer'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <CounterList />
  </Provider>,
  document.getElementById('root')
)
