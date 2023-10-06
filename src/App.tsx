import React from 'react';
import TransactionsList from '../src/pages/transactions/TransactionsList';
import './App.css';
import Login from './pages/auth/Login';

function App() {
  return (
    <div>
      <TransactionsList />
      <Login />
    </div>
  );
}

export default App;
