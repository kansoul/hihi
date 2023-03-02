import { ROUTES } from '../app/config/routes';
import { Counter } from '../app/container/Counter';
import Home from '../app/container/Home';
import { NotFoundPage } from '../app/container/NotFoundPage';
import TestRedux from '../app/container/TestRedux';
import { BlankLayout } from '../app/layouts/BlankLayout';
import LoginScreen from '../app/layouts/LoginScreen';

const routes = [
  {
    path: ROUTES.COUNTER,
    element: Counter,
    meta: {
      middleware: ['auth']
    }
  },
  {
    path: ROUTES.TEST_REDUX,
    element: TestRedux,
    meta: {
      middleware: ['auth']
    }
  },
  {
    path: ROUTES.AUTH.LOGIN,
    element: LoginScreen,
    layout: BlankLayout,
    meta: {
      middleware: []
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
  },
  {
    path: ROUTES.HOME,
    element: Home,
    meta: {
      middleware: ['auth']
    }
  }
];

export { routes };
