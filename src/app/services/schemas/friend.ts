import { gql } from '@apollo/client';

export const ADD_FRIEND = gql`
  mutation AddFriend($uidRequest: String, $messageHello: String) {
    addFriend(uidRequest: $uidRequest, messageHello: $messageHello)
  }
`;

export const GET_FRIEND = gql`
  query GetFriends($status: [String]) {
    getFriends(status: $status) {
      id
      relationInfor {
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
