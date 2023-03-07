import { useLazyQuery, useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setAccessToken, setCurrentUser, setIsAuthenticated } from '@/app/features/auth/authSlice';
import { useAppDispatch } from '@/app/hooks';
import { GET_USER, LOGIN_USER } from '@/app/services/schemas/user';
import RegisterScreen from './components/RegisterScreen';
import { loginSchema } from './config/validations';
import { InputControl } from '@/app/components/Base';
import { ROUTES } from '@/app/config/routes';

export default function LoginScreen() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showRegisterForm, setShowRegisterForm] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { isSubmitting }
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      username: '',
      password: ''
    }
  });
  const [loginFunction] = useMutation(LOGIN_USER);
  const [getUser] = useLazyQuery(GET_USER);
  const handleFormLogin = async (data: any) => {
    const { username, password } = data;
    try {
      const dataLogin: any = await loginFunction({
        variables: {
          loginInput: {
            password: password,
            username: username
          }
        }
      });
      if (dataLogin) {
        if (dataLogin && dataLogin?.data?.loginUser?.token) {
          dispatch(setAccessToken(dataLogin?.data?.loginUser?.token));
          try {
            const userData: any = await getUser();
            if (userData && userData?.data?.getUser) {
              dispatch(setCurrentUser(userData?.data?.getUser));
              dispatch(setIsAuthenticated(true));
              return navigate(ROUTES.HOME);
            }
          } catch (error: any) {
            toast.error(error.message);
          }
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <>
      {' '}
      <section className="bg-gray-50 dark:bg-gray-900 w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(handleFormLogin)}>
                <div>
                  <InputControl
                    control={control}
                    name="username"
                    type="text"
                    label="Your Username"
                  />
                </div>
                <div>
                  <InputControl
                    control={control}
                    name="password"
                    type="password"
                    label="Password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Forgot password?
                  </a>
                </div>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full text-white bg-red-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{' '}
                  <span
                    onClick={() => setShowRegisterForm(true)}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer">
                    Sign up
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <RegisterScreen showModal={showRegisterForm} setShowModal={setShowRegisterForm} />
    </>
  );
}
