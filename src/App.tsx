import React from 'react';
import Login from './pages/auth/Login';
import AntdConfigProvider from './providers/AntdConfigProvider';

const App: React.FC = () => {
  return (
    <AntdConfigProvider>
      <Login />
    </AntdConfigProvider>
  );
}

export default App;
