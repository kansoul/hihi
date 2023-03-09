import { useQuery } from '@apollo/client';
import { LoadingOverlay } from '@/app/components/LoadingOverlay/LoadingOverlay';
import { selectCurrentUser } from '@/app/features/auth/authSlice';
import { useAppSelector } from '@/app/hooks';
import { GET_FRIEND } from '@/app/services/schemas/friend';
import { useEffect, useState } from 'react';
import Avatar from '@/app/components/Avatar';

export default function FriendRequest() {
  const userDataStorage = useAppSelector(selectCurrentUser);
  const { data, error, loading } = useQuery(GET_FRIEND, {
    variables: {
      status: 'WAITING'
    }
  });
  const [dataFriendInfo, setDataFriendInfo] = useState<any[]>([]);
  useEffect(() => {
    if (data && data.getFriends.length > 0) {
      for (let i = 0; i < data.getFriends.length; i++) {
        setDataFriendInfo(
          data.getFriends[i].relationInformation.filter(
            (val: any) => val.uid !== userDataStorage?.getUser?.uid
          )
        );
      }
    }
  }, [data, error]);
  if (error) return <p>Error</p>;
  if (loading) return <LoadingOverlay />;
  return (
    <div className="pb-6 flex flex-col h-screen sm:translate-x-0  pt-16">
      <div className="flex sm:items-center justify-between pb-4 px-2">
        <div className="text-2xl font-bold px-2 space-x-4 items-center justify-center ">
          <p>Lời mời kết bạn</p>
        </div>
      </div>
      <div className="overflow-y-scroll flex flex-wrap px-2">
        {' '}
        {dataFriendInfo &&
          dataFriendInfo.length > 0 &&
          dataFriendInfo.map((val) => (
            <div
              key={val}
              className="w-[300px] m-2 max-w-sm bg-white border pt-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center pb-10">
                <Avatar
                  imageUrl={val?.avatarUrl}
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {val?.firstName} {val?.lastName}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Đã gửi lời mời kết bạn
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Accept
                  </button>
                  <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                    Message
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
