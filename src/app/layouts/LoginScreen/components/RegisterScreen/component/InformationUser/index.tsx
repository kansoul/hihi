import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateInformations } from '../config/validations';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { useRef, useState } from 'react';
import { REGISTER_USER, UPDATE_USER } from '@/app/services/schemas/user';
import { fileToBase64 } from '@/utils/image';
import { InputControl } from '@/app/components/Base/FormControl/InputControl';

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  avatarUrl: ''
};

export default function InformationUser(props: { setStep: (step: number) => void }) {
  const { setStep } = props;
  const [picture, setPicture] = useState('');
  const [updateSubmit] = useMutation(UPDATE_USER);
  const refPicture = useRef<any>();
  const {
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting, isValid }
  } = useForm({
    resolver: yupResolver(updateInformations),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues
  });

  const handleChangeImage = async (e: any) => {
    if (e.target.files.length < 1) {
      return;
    }
    const file = e.target.files[0];
    if (file.type !== 'image/png' && file.type !== 'image/jpg' && file.type !== 'image/jpeg') {
      toast.error('Chỉ chấp nhận file .jpg, .png');
      e.target.value = '';
    } else {
      const imageBase64: any = await fileToBase64(file);
      setValue('avatarUrl', imageBase64);
      setPicture(imageBase64);
    }
  };
  const handleOnClickPicture = () => {
    return refPicture.current.click();
  };
  const handleFormSubmit = async (dataSubmit: any) => {
    console.log('dataSubmit', dataSubmit);
    try {
      const data = await updateSubmit({
        variables: {
          updateUserInput: {
            ...dataSubmit
          }
        }
      });
      console.log(data);
      setStep(2);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white mx-auto w-full text-center">
        Thông tin tài khoản
      </h3>
      <div className="w-full flex flex-col items-center justify-center">
        {picture ? (
          <img className="object-contain h-16 w-16" src={picture} alt="" />
        ) : (
          <svg
            version="1.1"
            onClick={handleOnClickPicture}
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 cursor-pointer"
            viewBox="0,0,256,256">
            <g>
              <g transform="scale(6.4,6.4)">
                <path
                  d="M1.512,35.5c0.268,-5.559 4.982,-10 10.738,-10h7.5c5.756,0 10.47,4.441 10.738,10z"
                  fill="#8ba6f0"
                  stroke="none"
                  strokeWidth="1"></path>
                <path
                  d="M19.75,26c5.306,0 9.683,3.954 10.199,9h-27.898c0.516,-5.046 4.893,-9 10.199,-9h7.5M19.75,25h-7.5c-6.213,0 -11.25,4.925 -11.25,11h30c0,-6.075 -5.037,-11 -11.25,-11z"
                  fill="#4e7ab5"
                  stroke="none"
                  strokeWidth="1"></path>
                <path
                  d="M16,28.5c-3.076,0 -4.296,-2.625 -4.5,-3.122v-5.469h9v5.469c-0.204,0.497 -1.424,3.122 -4.5,3.122z"
                  fill="#deb974"
                  stroke="none"
                  strokeWidth="1"></path>
                <path
                  d="M20,20.41v4.865c-0.263,0.59 -1.393,2.725 -4,2.725c-2.611,0 -3.741,-2.141 -4,-2.725v-4.865h8M21,19.41h-10v6.062c0,0 1.267,3.529 5,3.529c3.733,0 5,-3.529 5,-3.529v-6.062z"
                  fill="#967a44"
                  stroke="none"
                  strokeWidth="1"></path>
                <path
                  d="M22.429,17.643c-1.143,0 -2.072,-0.929 -2.072,-2.071c0,-1.142 0.929,-2.071 2.072,-2.071c1.725,0 2.071,0.465 2.071,1.214c0,1.251 -1.024,2.928 -2.071,2.928zM9.571,17.643c-1.047,0 -2.071,-1.677 -2.071,-2.929c0,-0.749 0.347,-1.214 2.071,-1.214c1.143,0 2.072,0.929 2.072,2.071c0,1.142 -0.929,2.072 -2.072,2.072z"
                  fill="#deb974"
                  stroke="none"
                  strokeWidth="1"></path>
                <path
                  d="M22.429,14c1.571,0 1.571,0.363 1.571,0.714c0,1.044 -0.896,2.429 -1.571,2.429c-0.867,0 -1.571,-0.705 -1.571,-1.571c0,-0.866 0.704,-1.572 1.571,-1.572M9.571,14c0.867,0 1.571,0.705 1.571,1.571c0,0.866 -0.705,1.571 -1.571,1.571c-0.675,0.001 -1.571,-1.384 -1.571,-2.428c0,-0.351 0,-0.714 1.571,-0.714M22.429,13c-1.42,0 -2.571,1.151 -2.571,2.571c0,1.42 1.151,2.571 2.571,2.571c1.42,0 2.571,-2.008 2.571,-3.428c0,-1.42 -1.151,-1.714 -2.571,-1.714zM9.571,13c-1.42,0 -2.571,0.294 -2.571,1.714c0,1.42 1.151,3.429 2.571,3.429c1.42,0 2.571,-1.151 2.571,-2.571c0,-1.42 -1.15,-2.572 -2.571,-2.572z"
                  fill="#967a44"
                  stroke="none"
                  strokeWidth="1"></path>
                <path
                  d="M16,24.5c-0.581,0 -1.134,-0.224 -1.56,-0.631l-0.09,-0.086l-0.12,-0.034c-2.785,-0.786 -4.73,-3.356 -4.73,-6.249v-8.136c0,-1.564 1.272,-2.837 2.836,-2.837h7.328c1.564,0 2.836,1.272 2.836,2.837v8.136c0,2.893 -1.945,5.463 -4.73,6.249l-0.12,0.034l-0.09,0.086c-0.426,0.407 -0.979,0.631 -1.56,0.631z"
                  fill="#f5ce85"
                  stroke="none"
                  strokeWidth="1"></path>
                <path
                  d="M19.664,7.028c1.288,0 2.336,1.048 2.336,2.336v8.136c0,2.67 -1.796,5.042 -4.367,5.768l-0.239,0.068l-0.18,0.172c-0.332,0.317 -0.763,0.492 -1.214,0.492c-0.451,0 -0.882,-0.175 -1.214,-0.492l-0.18,-0.172l-0.239,-0.068c-2.571,-0.726 -4.367,-3.098 -4.367,-5.768v-8.136c0,-1.288 1.048,-2.336 2.336,-2.336h7.328M19.664,6.028h-7.328c-1.842,0 -3.336,1.493 -3.336,3.336v8.136c0,3.205 2.156,5.9 5.095,6.731c0.496,0.474 1.165,0.769 1.905,0.769c0.74,0 1.409,-0.295 1.905,-0.769c2.939,-0.831 5.095,-3.526 5.095,-6.731v-8.136c0,-1.843 -1.494,-3.336 -3.336,-3.336z"
                  fill="#967a44"
                  stroke="none"
                  strokeWidth="1"></path>
                <g stroke="none" strokeWidth="1">
                  <path
                    d="M22.5,15.5v-3.5c0,-3.484 -2.217,-4.425 -2.312,-4.463l-0.342,-0.14l-0.234,0.287c-0.023,0.029 -2.329,2.816 -5.612,2.816c-0.264,0 -0.53,-0.009 -0.791,-0.017c-0.265,-0.009 -0.526,-0.017 -0.778,-0.017c-0.877,0 -2.931,0 -2.931,2.533v2.5h-0.214c-0.441,-0.772 -1.786,-3.348 -1.786,-5.923c0,-4.755 3.495,-8.076 8.5,-8.076c3.078,0 4.499,2.621 4.557,2.732l0.119,0.226l0.253,0.037c1.533,0.22 3.571,1.029 3.571,5.505c0,2.334 -1.337,4.763 -1.778,5.5z"
                    fill="#a6714e"></path>
                  <path
                    d="M16,2c2.762,0 4.062,2.367 4.114,2.463l0.237,0.454l0.507,0.073c1.463,0.209 3.142,0.968 3.142,5.01c0,1.395 -0.515,2.842 -1,3.894v-1.894c0,-3.816 -2.516,-4.883 -2.623,-4.926l-0.687,-0.279l-0.467,0.577c-0.022,0.025 -2.163,2.628 -5.223,2.628c-0.259,0 -0.519,-0.008 -0.775,-0.017c-0.27,-0.009 -0.536,-0.017 -0.794,-0.017c-0.849,0 -3.431,0 -3.431,3.034v0.801c-0.486,-1.124 -1,-2.679 -1,-4.225c0,-4.461 3.29,-7.576 8,-7.576M16,1c-5.36,0 -9,3.667 -9,8.576c0,3.252 2,6.424 2,6.424h1c0,0 0,-2.105 0,-3c0,-1.791 1.085,-2.034 2.431,-2.034c0.501,0 1.038,0.034 1.569,0.034c3.573,0 6,-3 6,-3c0,0 2,0.813 2,4c0,0.984 0,4 0,4h1c0,0 2,-3.037 2,-6c0,-4.161 -1.703,-5.671 -4,-6c0,0 -1.566,-3 -5,-3z"
                    fill="#7a4f34"></path>
                </g>
                <g stroke="none" strokeWidth="1">
                  <path
                    d="M31,39.5c-4.687,0 -8.5,-3.813 -8.5,-8.5c0,-4.687 3.813,-8.5 8.5,-8.5c4.687,0 8.5,3.813 8.5,8.5c0,4.687 -3.813,8.5 -8.5,8.5z"
                    fill="#bae0bd"></path>
                  <path
                    d="M31,23c4.411,0 8,3.589 8,8c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8M31,22c-4.971,0 -9,4.029 -9,9c0,4.971 4.029,9 9,9c4.971,0 9,-4.029 9,-9c0,-4.971 -4.029,-9 -9,-9z"
                    fill="#5e9c76"></path>
                </g>
                <path d="M31,36v-10M26,31h10" fill="none" stroke="#ffffff" strokeWidth="2"></path>
              </g>
            </g>
          </svg>
        )}
        <input
          ref={refPicture}
          className="hidden"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={handleChangeImage}
          id="upload-photo"
        />
        <p className="text-[16px] font-medium text-gray-700">Chọn ảnh</p>
      </div>
      <InputControl control={control} label="Email" type="email" name="email" id="email" />
      <InputControl
        control={control}
        label="Họ của bạn"
        type="text"
        name="firstName"
        id="firstName"
      />
      <InputControl
        control={control}
        label="Tên của bạn"
        type="text"
        name="lastName"
        id="lastName"
      />
      <div className="w-full flex items-center justify-center">
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={`text-white bg-blue-700 mx-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
            isValid ? '' : 'cursor-not-allowed'
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
