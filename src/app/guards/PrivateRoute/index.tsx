import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingOverlay } from '../../components/LoadingOverlay/LoadingOverlay';
import { ROUTES } from '../../config/routes';
import {
  selectAccessToken,
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
  const accessToken = useAppSelector(selectAccessToken);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();

  async function init() {
    // eslint-disable-next-line
    if (!accessToken) {
      return navigate(ROUTES.AUTH.LOGIN);
    }
    try {
      const user = useQuery(GET_USER);
      dispatch(setCurrentUser(user.data));
      dispatch(setIsAuthenticated(true));
    } catch (error: any) {
      dispatch(setCurrentUser(''));
      dispatch(setAccessToken(''));
      dispatch(setIsAuthenticated(false));
      return navigate(ROUTES.AUTH.LOGIN);
    }
  }

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return !isAuthenticated ? (
    <section className="flex items-center justify-center h-screen">
      <LoadingOverlay />
    </section>
  ) : (
    children
  );
}
