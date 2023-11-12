import React from 'react';
import Home from './pages/home/Home';
// import Login from './pages/auth/Login';
// import ComponentsShowcase from './pages/ComponentsShowcase';
import TopBar from './components/moneypenny/navigation/TopBar';

const App: React.FC = () => {
  return (
    <>
      <TopBar/>
      <Home />
    </>    
    // <Login />
    // <ComponentsShowcase />
  );
}

export default App;
