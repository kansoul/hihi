import { ROUTES } from '../app/config/routes';
import { Counter } from '../app/container/Counter';
import Message from '../app/container/Message';
import TestRedux from '../app/container/TestRedux';
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
    path: ROUTES.LOGIN,
    element: LoginScreen,
    meta: {
      middleware: []
    }
  },
  {
    path: ROUTES.MESSAGE,
    element: Message,
    meta: {
      middleware: []
    }
  }
];

export { routes };
