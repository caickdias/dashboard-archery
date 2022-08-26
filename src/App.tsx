import React from 'react';

import './App.css';
import Login from './components/pages/Login';

import { AppProvider } from './context/App/Provider';

function App() {

  return (
    <AppProvider>
      <Login />
    </AppProvider>
  );
}

export default App;
