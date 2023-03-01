import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LoginUser($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      token
    }
  }
`;

export const GET_USER = gql`
  query GetUser {
    getUser {
      uid
      username
      firstName
      lastName
    }
  }
`;
