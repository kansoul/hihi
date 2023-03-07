import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation RegisterUser($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
      token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation RegisterUser($updateUserInput: UpdateUserInput) {
    updateUser(updateUserInput: $updateUserInput)
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      token
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation Logout($uid: String, $close: Boolean) {
    logout(uid: $uid, close: $close)
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
