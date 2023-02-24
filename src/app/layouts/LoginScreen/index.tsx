import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { LOGIN_USER } from '../../services/schemas/user';

export default function LoginScreen() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [loginFunction, { data, loading, error }] = useMutation(LOGIN_USER);
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  return (
    <div>
      <div className="left-0">
        <div className="xl:max-w-screen-sm">
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2
              className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold">
              Log in
            </h2>
            <div className="mt-12">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  loginFunction({
                    variables: {
                      loginInput: {
                        password: password,
                        username: username
                      }
                    }
                  });
                }}>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">UserName</div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    value={username}
                    placeholder="Enter your username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mt-8">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">Password</div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    placeholder="Enter your password"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mt-10">
                  <button
                    className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                          shadow-lg">
                    Log In
                  </button>
                </div>
              </form>
              <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                Don't have an account ?{' '}
                <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign up</a>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <a
                    className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                  cursor-pointer">
                    Forgot Password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
