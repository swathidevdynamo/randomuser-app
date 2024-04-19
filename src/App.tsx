import * as React from 'react';
import { GlobalStyles } from './app.styled';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from './pages/Home';

const LazyHomePage = lazy(() => import('./pages/Home'));

const App = () => (
  <div>
    <GlobalStyles />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </Suspense>
  </div>
);

export default App;