export interface UserFriendData {
  uid: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  email: string;
  active: string;
}

export interface UserData {
  uid: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  avatarUrl: string;
  active: boolean;
}
