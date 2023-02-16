import { ROUTES } from '../app/config/routes';
import { Counter } from '../app/container/Counter';
import TestRedux from '../app/container/TestRedux';

const routes = [
  {
    path: ROUTES.COUNTER,
    element: Counter,
    meta: {}
  },
  {
    path: ROUTES.TEST_REDUX,
    element: TestRedux,
    meta: {}
  }
];

export { routes };
