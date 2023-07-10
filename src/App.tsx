import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './Nav';
import { Home } from './Homepage';
import { Secured } from './Secured';

export function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secured" element={<Secured />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
