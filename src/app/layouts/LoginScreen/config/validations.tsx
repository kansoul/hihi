import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  username: yup.string().required('Truong nay la bat buoc'),
  password: yup.string().required('Truong nay la bat buoc')
});
