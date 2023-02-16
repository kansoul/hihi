import { useSelector } from 'react-redux';
import { useGetFetchQuery } from '../../../utils/helper';

export default function TestRedux() {
  const count = useSelector((state: any) => state.counter.value);

  const data: any = useGetFetchQuery('countQ');
  console.log(data);
  return (
    <>
      <p>{count}</p>
      <p>{data}</p>
    </>
  );
}
