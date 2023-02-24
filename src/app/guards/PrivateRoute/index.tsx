import { LoadingOverlay } from '../../components/LoadingOverlay/LoadingOverlay';

export function PrivateRoute(props: any) {
  const { children } = props;
  const isAuthenticated = true;
  return !isAuthenticated ? (
    <section className="flex items-center justify-center h-screen">
      <LoadingOverlay />
    </section>
  ) : (
    children
  );
}
