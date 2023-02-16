import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrement, increment } from '../../features/counter/counterSlice';
import { useQuery } from 'react-query';
import { DEFAULT_COUNT } from '../../config/app';

export function Counter() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  const countQueryIncrement = () => {
    let index: number = DEFAULT_COUNT;
    return index + 1;
  };

  const { data } = useQuery({
    queryKey: 'countQ',
    queryFn: () => countQueryIncrement()
  });
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
      <p>{data}</p>

      <Link to="/test-redux">Link</Link>
    </div>
  );
}
