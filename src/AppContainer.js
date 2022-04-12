import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const AppContainer = () => {
  return (
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
};

export default AppContainer;
