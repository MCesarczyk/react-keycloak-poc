import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './Nav';
import { Home } from './Homepage';
import { Secured } from './Secured';
import { PrivateRoute } from './PrivateRoute';

console.log(process.env);

export const App = () => (
  <div>
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
  </div>
);
