import styled from 'styled-components';

import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import { Home } from './pages/home';
import 'apps/frontend/src/app/styles/main.css';

const Wrapper = styled.div``;

export function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* END: routes */}
    </Wrapper>
  );
}

export default App;
