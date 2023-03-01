import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSavedState, goodEmptyCheck } from '../../../utils/helper';
import { LoadingOverlay } from '../../components/LoadingOverlay/LoadingOverlay';
import { AUTHENTICATE_TOKEN_KEY, AUTHENTICATE_USER_KEY } from '../../config';
import { ROUTES } from '../../config/routes';
import {
  selectIsAuthenticated,
  setAccessToken,
  setCurrentUser,
  setIsAuthenticated
} from '../../features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { GET_USER } from '../../services/schemas/user';

export function PrivateRoute(props: any) {
  const navigate = useNavigate();
  const { children } = props;
  const token = getSavedState(AUTHENTICATE_TOKEN_KEY);

  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();
  const [getUser, { loading, error, data }] = useLazyQuery(GET_USER);

  const checkUser = () => {
    // eslint-disable-next-line
    if (goodEmptyCheck(token)) {
      return navigate(ROUTES.AUTH.LOGIN);
    }
    getUser();
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(
        error.message === 'TokenExpiredError: jwt expired'
          ? 'Hết hạn đăng nhập, mời bạn đăng nhập lại'
          : 'Lỗi đăng nhập'
      );
      localStorage.removeItem(AUTHENTICATE_TOKEN_KEY);
      localStorage.removeItem(AUTHENTICATE_USER_KEY);

      dispatch(setIsAuthenticated(false));
      return navigate(ROUTES.AUTH.LOGIN);
    }
    if (data) {
      dispatch(setCurrentUser(data));
      dispatch(setIsAuthenticated(true));
    }
  }, [error, data]);

  return !isAuthenticated ? (
    <section className="flex items-center justify-center h-screen">
      <LoadingOverlay />
    </section>
  ) : (
    children
  );
}
