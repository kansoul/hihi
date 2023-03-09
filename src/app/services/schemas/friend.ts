import { gql } from '@apollo/client';

export const ADD_FRIEND = gql`
  mutation AddFriend($uidRequest: String, $messageHello: String, $status: String) {
    addFriend(uidRequest: $uidRequest, messageHello: $messageHello, status: $status)
  }
`;

export const ACCEPT_FRIEND = gql`
  mutation AcceptFriend($acceptFriendId: String) {
    acceptFriend(id: $acceptFriendId)
  }
`;

export const GET_FRIEND = gql`
  query GetFriends($status: [String]) {
    getFriends(status: $status) {
      id
      relationInformation {
        uid
        username
        firstName
        lastName
        active
      }
      userRequest
      status
      createdAt
    }
  }
`;

export const GET_RELATION = gql`
  query GetRelation($uidFriend: String) {
    getRelation(uidFriend: $uidFriend) {
      id
      relationInformation {
        uid
        username
        firstName
        lastName
        active
      }
      userRequest
      status
      createdAt
    }
  }
`;

export const SEARCH_FRIEND = gql`
  query SearchFriends($keySearch: String) {
    searchFriends(keySearch: $keySearch) {
      uid
      firstName
      lastName
      avatarUrl
      email
      active
    }
  }
`;
