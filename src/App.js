import './App.css';
import { Route, Switch } from 'react-router';

import AddPage from './pages/Add/AddPage';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';

function App() {
  return (
    <div className='App'>
      <HomePage />
      <AddPage />
      <LoginPage />
      <RegisterPage />
    </div>
  );
}

export default App;
