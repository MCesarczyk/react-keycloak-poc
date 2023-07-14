import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { keycloak } from './keycloak';

import { App } from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ReactKeycloakProvider authClient={keycloak}>
    <StrictMode>
      <App />
    </StrictMode>
  </ReactKeycloakProvider>
);

reportWebVitals();
