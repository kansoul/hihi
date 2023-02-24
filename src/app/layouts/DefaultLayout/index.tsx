import { Outlet } from 'react-router-dom';

interface Props {
  meta: any;
}

export function DefaultLayout({ meta }: Props) {
  const { mainClass } = meta;
  return (
    <>
      <main className={`${mainClass ? mainClass : ''}`}>
        <Outlet />
      </main>
    </>
  );
}
