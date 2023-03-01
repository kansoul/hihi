import { useState } from 'react';
import Chat from '../Chat';
import Content from '../Content';
import Header from '../Header';
import Sidebar from '../Sidebar';

export default function Message() {
  const [openSettingRoom, setOpenSettingRoom] = useState<boolean>(false);
  return (
    <>
      <Header />
      <div className="flex flex-row max-h-screen">
        <div className="basis-[10%]">
          <Sidebar />
        </div>
        <div className="basis-[21%]">
          <Content />
        </div>
        <div className="basis-[69%]">
          <Chat openSettingRoom={openSettingRoom} setOpenSettingRoom={setOpenSettingRoom} />
        </div>
      </div>
    </>
  );
}
