import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrement, increment } from '../../features/counter/counterSlice';
import { DEFAULT_COUNT } from '../../config/app';

export function Counter() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          className="bg-red-100 mx-8"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button
          className="bg-red-100 mx-8"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>

      <Link to="/test-redux">Link</Link>
    </div>
  );
}
