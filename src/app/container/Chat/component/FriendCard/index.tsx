import Avatar from '@/app/components/Avatar';
import { ACCEPT_FRIEND, ADD_FRIEND } from '@/app/services/schemas/friend';
import { Friend } from '@/types/Friend';
import { UserFriendData } from '@/types/User';
import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function FriendCard(props: {
  friendData: Friend | null;
  userFriendData: UserFriendData;
}) {
  const { friendData, userFriendData } = props;
  const [showModalAddFriend, setShowModalAddFriend] = useState<boolean>(false);
  const [messageHello, setMessageHello] = useState<string>('Xin chào, tôi muốn kết bạn với bạn');
  const [idFriend, setIdFriend] = useState<string>('');
  const [addFriend] = useMutation(ADD_FRIEND, {
    variables: {
      uidRequest: userFriendData?.uid,
      messageHello: '',
      status: 'WAITING'
    }
  });

  const [acceptFriend] = useMutation(ACCEPT_FRIEND, {
    variables: {
      acceptFriendId: idFriend
    }
  });
  const handleAddFriend = async () => {
    const data = await addFriend();
    if (data && data.data.addFriend) {
      setShowModalAddFriend(false);
    }
  };

  const handleAcceptFriend = async () => {
    if (friendData) {
      try {
        const dataAcceptFriend = await acceptFriend();
        console.log(dataAcceptFriend);
      } catch (error) {
        console.log(error);
        // toast.error(error.message);
      }
    }
  };
  useEffect(() => {
    if (friendData && friendData?.id) {
      setIdFriend(friendData?.id);
    } else setIdFriend('');
  }, [friendData]);
  console.log(friendData?.id);
  return (
    <div className="border-b-2">
      <div className="w-full mx-auto max-w-sm bg-white rounded-lg">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <Avatar
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            imageUrl={userFriendData?.avatarUrl}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {userFriendData?.firstName} {userFriendData?.lastName}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {!friendData
              ? 'Người dưng nước lã'
              : friendData.status === 'WAITING' && friendData.userRequest === userFriendData.uid
              ? 'Đồng ý'
              : friendData.status === 'WAITING'
              ? 'Đã gửi lời mời kết bạn'
              : friendData.status === 'PENDING'
              ? 'Đang chờ'
              : 'Bạn bè'}
          </span>
          {(!friendData || friendData.status === 'PENDING') && (
            <div className="flex mt-4 space-x-3 md:mt-6">
              <button
                type="button"
                onClick={() => setShowModalAddFriend(true)}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add friend
              </button>
            </div>
          )}
          {friendData?.status === 'WAITING' && friendData.userRequest === userFriendData.uid ? (
            <div className="flex mt-4 space-x-3 md:mt-6">
              <button
                onClick={() => handleAcceptFriend()}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg">
                Đồng ý
              </button>
            </div>
          ) : (
            friendData?.status === 'WAITING' && (
              <div className="flex mt-4 space-x-3 md:mt-6">
                <button
                  disabled
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-400 rounded-lg">
                  Đã gửi lời mời kết bạn
                </button>
              </div>
            )
          )}
        </div>
      </div>

      <div
        id="small-modal"
        tabIndex={-1}
        className={`fixed top-0 left-0 right-0 z-50 w-full p-4 bg-[#cdcdcd9c] overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full ${
          showModalAddFriend ? '' : 'hidden'
        }`}>
        <div className="relative w-full h-full max-w-md md:h-auto mx-auto mt-16 ">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Kết bạn</h3>
              <button
                type="button"
                onClick={() => setShowModalAddFriend(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="small-modal">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <p>Tin nhắn</p>
              <textarea
                className="border border-gray-300 resize-none w-full"
                value={messageHello}
                onChange={(e) => setMessageHello(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="small-modal"
                type="button"
                onClick={handleAddFriend}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-6">
                Gửi
              </button>
              <button
                data-modal-hide="small-modal"
                type="button"
                onClick={() => setShowModalAddFriend(false)}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 ml-6">
                Hủy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
