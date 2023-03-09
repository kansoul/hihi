import { Friend } from '@/types/Friend';
import { UserFriendData } from '@/types/User';
import Chats from '../Chats';
import FriendCard from '../FriendCard';

export default function ChatCard(props: {
  userInformation: UserFriendData;
  friendData: Friend | null;
}) {
  const { friendData, userInformation } = props;
  return (
    <>
      <FriendCard friendData={friendData} userFriendData={userInformation} />
      <Chats />
    </>
  );
}
