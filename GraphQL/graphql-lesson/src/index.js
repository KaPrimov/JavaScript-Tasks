import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-boost';

import './index.css';
import {default as App} from './App.container';
import { resolvers, typeDefs } from './graphql/resolvers';
import DIRECTORY_DATA from './components/directory/directory.data';

const httpLink = createHttpLink({
  uri: 'https://crwn-clothing.com'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers 
});

client.writeData({
  data: {
    cartHidden: true,
    cartItems: [],
    itemCount: 0,
    total: 0,
    sections: DIRECTORY_DATA,
    currentUser: null
  }
});

ReactDOM.render(
  <ApolloProvider client={client} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
