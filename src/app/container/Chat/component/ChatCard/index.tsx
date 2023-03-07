import Avatar from '@/app/components/Avatar';
import { Friend } from '@/types/Friend';
import { UserFriendData } from '@/types/User';

export default function ChatCard(props: {
  userInformation: UserFriendData | null;
  friendData: Friend;
}) {
  return (
    <>
      <div className="w-full mx-auto max-w-sm bg-white rounded-lg">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <Avatar className="w-24 h-24 mb-3 rounded-full shadow-lg" imageUrl={''} />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add friend
            </a>
          </div>
        </div>
      </div>

      <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                Your error message says permission denied, npm global installs must be given root
                privileges.
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-2"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                Command was run with root privileges. I'm sure about that.
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                I've update the description so it's more obviously now
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                FYI https://askubuntu.com/a/700266/510172
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                Check the line above (it ends with a # so, I'm running it as root )
                <pre># npm install -g @vue/devtools</pre>
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-1"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                Your error message says permission denied, npm global installs must be given root
                privileges.
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-2"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                Command was run with root privileges. I'm sure about that.
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                I've update the description so it's more obviously now
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                FYI https://askubuntu.com/a/700266/510172
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                Check the line above (it ends with a # so, I'm running it as root )
                <pre># npm install -g @vue/devtools</pre>
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-1"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                Your error message says permission denied, npm global installs must be given root
                privileges.
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-2"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                Command was run with root privileges. I'm sure about that.
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                I've update the description so it's more obviously now
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                FYI https://askubuntu.com/a/700266/510172
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                Check the line above (it ends with a # so, I'm running it as root )
                <pre># npm install -g @vue/devtools</pre>
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-1"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                Your error message says permission denied, npm global installs must be given root
                privileges.
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-2"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                Command was run with root privileges. I'm sure about that.
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                I've update the description so it's more obviously now
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                FYI https://askubuntu.com/a/700266/510172
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                Check the line above (it ends with a # so, I'm running it as root )
                <pre># npm install -g @vue/devtools</pre>
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-1"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                Your error message says permission denied, npm global installs must be given root
                privileges.
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-2"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                Command was run with root privileges. I'm sure about that.
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                I've update the description so it's more obviously now
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                FYI https://askubuntu.com/a/700266/510172
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                Check the line above (it ends with a # so, I'm running it as root )
                <pre># npm install -g @vue/devtools</pre>
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-1"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                Your error message says permission denied, npm global installs must be given root
                privileges.
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-2"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                Command was run with root privileges. I'm sure about that.
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                I've update the description so it's more obviously now
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                FYI https://askubuntu.com/a/700266/510172
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                Check the line above (it ends with a # so, I'm running it as root )
                <pre># npm install -g @vue/devtools</pre>
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-1"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                Your error message says permission denied, npm global installs must be given root
                privileges.
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-2"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                Command was run with root privileges. I'm sure about that.
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                I've update the description so it's more obviously now
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                FYI https://askubuntu.com/a/700266/510172
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                Check the line above (it ends with a # so, I'm running it as root )
                <pre># npm install -g @vue/devtools</pre>
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-1"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                Your error message says permission denied, npm global installs must be given root
                privileges.
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-2"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                Command was run with root privileges. I'm sure about that.
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                I've update the description so it's more obviously now
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                FYI https://askubuntu.com/a/700266/510172
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                Check the line above (it ends with a # so, I'm running it as root )
                <pre># npm install -g @vue/devtools</pre>
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-1"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                Your error message says permission denied, npm global installs must be given root
                privileges.
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-2"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                Command was run with root privileges. I'm sure about that.
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                I've update the description so it's more obviously now
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                FYI https://askubuntu.com/a/700266/510172
              </span>
            </div>
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                Check the line above (it ends with a # so, I'm running it as root )
                <pre># npm install -g @vue/devtools</pre>
              </span>
            </div>
          </div>
          <img
            src="/images/anhaoxanh.jpeg"
            alt="My profile"
            className="w-6 h-6 rounded-full order-1"
          />
        </div>
      </div>
    </>
  );
}
