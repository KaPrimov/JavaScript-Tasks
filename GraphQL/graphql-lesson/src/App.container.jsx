import React from 'react';
import { Mutation, Query } from 'react-apollo';

import App from './App';
import { GET_CURRENT_USER } from './graphql/user.queries';
import { SET_CURRENT_USER } from './graphql/user.mutation';


const AppContainer = () => (
  <Query query={GET_CURRENT_USER}>
    {({ data: { currentUser } }) => (
      <Mutation mutation={SET_CURRENT_USER}>
        {setCurrentUser => (
          <App
            currentUser={currentUser}
            setCurrentUser={user => {
              setCurrentUser({ variables: { user } });
            }}
          />
        )}
      </Mutation>
    )}
  </Query>
);

export default AppContainer;