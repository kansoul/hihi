import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  username: yup.string().required('Trường này là bắt buộc'),
  password: yup.string().required('Trường này là bắt buộc'),
  confirmPassword: yup
    .string()
    .required('Trường này là bắt buộc')
    .oneOf([yup.ref('password'), ''], 'Mật khẩu không giống nhau')
});
export const updateInformations = yup.object().shape({
  firstName: yup.string().required('Trường này là bắt buộc'),
  lastName: yup.string().required('Trường này là bắt buộc'),
  email: yup.string().required('Trường này là bắt buộc'),
  avatar: yup.string().optional()
});

export const userSubmitSchema = yup.object().shape({
  username: yup.string().required('Trường này là bắt buộc'),
  password: yup.string().required('Trường này là bắt buộc'),
  firstName: yup.string().required('Trường này là bắt buộc'),
  lastName: yup.string().required('Trường này là bắt buộc'),
  email: yup.string().required('Trường này là bắt buộc'),
  avatar: yup.string().optional()
});
