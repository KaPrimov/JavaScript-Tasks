import { gql } from "apollo-boost";

export const SET_CURRENT_USER = gql`
  mutation SET_CURRENT_USER($user: User!) {
    setCurrentUser(user: $user) @client
  }
`;
