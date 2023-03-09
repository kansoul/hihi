import { TAB_SIDE_BAR } from '@/app/config/app';
import { selectTabSideBar } from '@/app/features/tabSideBar/tabSideBarSlice';
import { useAppSelector } from '@/app/hooks';
import { useState } from 'react';
import Chat from '../Chat';
import ChatList from '../ChatList';
import Everyone from '../Everyone';
import FriendList from '../FriendList';
import FriendRequest from '../FriendRequest';
import Header from '../Header';
import Sidebar from '../Sidebar';

export default function Home() {
  const tab = useAppSelector(selectTabSideBar);
  const haveChatScreen = [TAB_SIDE_BAR.CHAT, TAB_SIDE_BAR.FRIEND, TAB_SIDE_BAR.EVERYONE].includes(
    tab
  );
  const [uidChoose, setUidChoose] = useState<any>();
  return (
    <>
      <Header />
      <div className="flex flex-row max-h-screen">
        <div className="basis-[15%]">
          <Sidebar />
        </div>
        {tab === TAB_SIDE_BAR.FRIEND_REQUESTS && (
          <div className="basis-[85%]">
            <FriendRequest />
          </div>
        )}
        {haveChatScreen && (
          <>
            <div className="basis-[21%]">
              {tab === TAB_SIDE_BAR.CHAT && <ChatList />}
              {tab === TAB_SIDE_BAR.FRIEND && <FriendList />}
              {tab === TAB_SIDE_BAR.EVERYONE && <Everyone setUidChoose={setUidChoose} />}
            </div>
            {uidChoose && (
              <div className="basis-[64%]">
                <Chat uidFriend={uidChoose} />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
