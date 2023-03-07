import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLazyQuery, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { useAppDispatch } from '@/app/hooks';
import { GET_USER, REGISTER_USER } from '@/app/services/schemas/user';
import { setAccessToken, setCurrentUser, setIsAuthenticated } from '@/app/features/auth/authSlice';
import { registerSchema } from '../config/validations';
import { InputControl } from '@/app/components/Base/FormControl/InputControl';

const defaultValues = {
  username: '',
  password: '',
  confirmPassword: ''
};

export default function SecurityRegister(props: { setStep: (value: number) => void }) {
  const { setStep } = props;
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting }
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues
  });

  const [registerSubmit] = useMutation(REGISTER_USER);
  const [getUser] = useLazyQuery(GET_USER);

  const handleFormSubmit = async (dataSubmit: any) => {
    const dataRegister = {
      username: dataSubmit.username,
      password: dataSubmit.password
    };
    try {
      const data = await registerSubmit({
        variables: {
          registerInput: {
            ...dataRegister
          }
        }
      });
      if (data && data?.data?.registerUser?.token) {
        console.log('data?.data?.registerUser?.token');
        dispatch(setAccessToken(data?.data?.registerUser?.token));
        try {
          const userData: any = await getUser();
          if (userData && userData?.data?.getUser) {
            dispatch(setCurrentUser(userData?.data?.getUser));
            dispatch(setIsAuthenticated(true));
            setStep(1);
          }
        } catch (error: any) {
          toast.error(error.message);
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white mx-auto w-full text-center">
        Đăng kí tài khoản
      </h3>
      <InputControl
        control={control}
        label="Tên đăng nhập"
        type="text"
        name="username"
        id="username"
      />
      <InputControl
        control={control}
        label="Mật khẩu"
        type="password"
        name="password"
        id="password"
      />
      <InputControl
        control={control}
        label="Xác nhận mật khẩu"
        type="password"
        name="confirmPassword"
        id="confirmPassword"
      />
      <div className="w-full flex items-center justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`text-white bg-blue-700 mx-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
            !isSubmitting ? '' : 'cursor-not-allowed'
          }`}>
          Tiếp theo
          <svg version="1.1" className="w-5 h-5 ml-2 -mr-1" viewBox="0,0,256,256">
            <g>
              <g transform="scale(0.5,0.5)">
                <path
                  d="M7.9,256c0,-137 111.1,-248.1 248.1,-248.1c137,0 248.1,111.1 248.1,248.1c0,137 -111.1,248.1 -248.1,248.1c-137,0 -248.1,-111.1 -248.1,-248.1z"
                  fillOpacity="0.76863"
                  fill="#4abc96"></path>
                <path
                  d="M383,234.3c-28.3,-28.3 -56.6,-56.6 -84.9,-84.9c-26.8,-26.8 -68.2,14.9 -41.3,41.8c11.5,11.5 23.1,23.1 34.6,34.6c-45.4,0 -90.8,0 -136.2,0c-37.9,0 -38.3,58.8 -0.4,58.8c45.6,0 91.1,0 136.7,0c-11.6,11.6 -23.2,23.2 -34.8,34.8c-26.8,26.8 14.9,68.2 41.8,41.3c28.3,-28.3 56.6,-56.6 84.9,-84.9c11.2,-11.3 10.9,-30.2 -0.4,-41.5z"
                  fill="#ffffff"></path>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </form>
  );
}
