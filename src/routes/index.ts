import { ROUTES } from '../app/config/routes';
import Home from '../app/container/Home';
import { NotFoundPage } from '../app/container/NotFoundPage';
import { BlankLayout } from '../app/layouts/BlankLayout';
import LoginScreen from '../app/layouts/LoginScreen';

const routes = [
  {
    path: ROUTES.AUTH.LOGIN,
    element: LoginScreen,
    layout: BlankLayout,
    meta: {
      middleware: []
    }
  },
  {
    path: ROUTES.HOME,
    element: Home,
    meta: {
      middleware: ['auth']
    }
  },
  {
    path: ROUTES.MESSAGE,
    element: Home,
    meta: {
      middleware: ['auth']
    }
  },
  {
    path: '*',
    element: NotFoundPage,
    layout: BlankLayout,
    meta: {
      middleware: ['auth']
    }
  }
];

export { routes };
