import { useSelector } from 'react-redux';

export default function TestRedux() {
  const count = useSelector((state: any) => state.counter.value);

  return (
    <>
      <p>{count}</p>
    </>
  );
}
