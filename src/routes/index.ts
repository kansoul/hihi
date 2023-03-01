import { ROUTES } from '../app/config/routes';
import { Counter } from '../app/container/Counter';
import Message from '../app/container/Message';
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
    element: Message,
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
    element: Message,
    meta: {
      middleware: ['auth']
    }
  }
];

export { routes };
