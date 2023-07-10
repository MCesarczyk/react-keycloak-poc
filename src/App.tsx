import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { Nav } from './Nav';
import { Home } from './Homepage';
import { Secured } from './Secured';
import { keycloak } from './keycloak';
import { PrivateRoute } from './PrivateRoute';

console.log(process.env);

export const App = () => (
  <div>
    <ReactKeycloakProvider authClient={keycloak}>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/secured"
            element={
              <PrivateRoute>
                <Secured />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ReactKeycloakProvider>
  </div>
);
