import { useKeycloak } from '@react-keycloak/web';

interface PrivateRouteProps {
  children: JSX.Element | null;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  return isLoggedIn ? children : null;
};
