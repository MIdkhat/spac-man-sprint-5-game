import { useEffect, useState } from 'react';

import { Routes, Route, Navigate } from 'react-router';

import AuthController from '../src/controllers/AuthController';
import { Auth } from './routes/Auth/Auth';
import { Main } from './routes/Main/Main';
import { ROUTES } from './constants/routes';
import NotFoundPage from './pages/404/NotFoundPage';
import EternalErrorPage from './pages/500/EternalErrorPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const SERVER_PORT = 3002;
  // useEffect(() => {
  //   const fetchServerData = async () => {
  //     const url = `http://localhost:${SERVER_PORT}`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  //   };

  //   fetchServerData();
  // }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await AuthController.fetchUser();
      if (response.success) setIsAuthenticated(true);
    };

    fetchUserData();
  }, []);

  return (
    <Routes>
      <Route
        path="/*"
        element={
          isAuthenticated ? (
            <Main />
          ) : (
            <Navigate replace to={`${ROUTES.auth.root}/${ROUTES.auth.login}`} />
          )
        }
      />
      <Route
        path={`${ROUTES.auth.root}/*`}
        element={
          !isAuthenticated ? (
            <Auth />
          ) : (
            <Navigate replace to={ROUTES.main.root} />
          )
        }
      />

      <Route path={ROUTES.error.internalError} element={<EternalErrorPage />} />
      <Route path={ROUTES.error.notFound} element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
