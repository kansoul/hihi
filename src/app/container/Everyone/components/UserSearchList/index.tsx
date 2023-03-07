import Avatar from '@/app/components/Avatar';
import { UserFriendData } from '@/types/User';

export default function UserSearchList(props: { searchFriend: UserFriendData }) {
  const { searchFriend } = props;
  return (
    <li className="py-3 sm:py-4 hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <div className="relative">
            <Avatar imageUrl={searchFriend.avatarUrl} />
            <span
              className={`top-0 left-7 absolute  w-3.5 h-3.5 ${
                searchFriend?.active ? 'bg-green-400' : 'bg-red-500'
              } border-2 border-white dark:border-gray-800 rounded-full`}></span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[15px] font-semibold text-gray-900 truncate dark:text-white">
            {searchFriend?.firstName} {searchFriend?.lastName}
          </p>
        </div>
      </div>
    </li>
  );
}
