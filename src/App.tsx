import React from 'react';

import './App.css';
import MainRoutes from './routes/MainRoutes';

import { AppProvider } from './context/App/Provider';

function App() {

  return (
    <AppProvider>
      <MainRoutes />      
    </AppProvider>
  );
}

export default App;
