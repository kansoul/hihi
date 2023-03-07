import { changeToArr } from '@/utils/helper';

export default function Everyone() {
  return (
    <div className="pb-6 flex flex-col h-screen border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 pt-16">
      <div className="flex sm:items-center justify-between pb-4 px-2">
        <div className="text-2xl font-bold px-2 space-x-4 items-center justify-center ">
          <p>Mọi người</p>
        </div>
      </div>

      <form className="flex items-center px-2">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
        </div>
      </form>
      <ul role="list" className="p-2 overflow-y-scroll h-[100%] ">
        {changeToArr(3).map((val, index) => (
          <li className="py-3 sm:py-4 hover:bg-gray-100 rounded-lg pl-2 cursor-pointer" key={val}>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="/images/anhaoxanh.jpeg"
                    alt="profile image"
                  />
                  <span
                    className={`top-0 left-7 absolute  w-3.5 h-3.5 ${
                      index % 2 === 0 ? 'bg-green-400' : 'bg-red-500'
                    } border-2 border-white dark:border-gray-800 rounded-full`}></span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-semibold text-gray-900 truncate dark:text-white">
                  Neil Sims
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
