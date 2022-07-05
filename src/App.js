import './App.css';
import { Route, Switch } from 'react-router';

import AddPage from './pages/Add/AddPage';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import Header from './components/Header/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Page from './pages/404Page';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <ProtectedRoute path={'/home'}>
          <HomePage />
        </ProtectedRoute>
        <ProtectedRoute path={'/add'}>
          <AddPage />
        </ProtectedRoute>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
        <Route path={'/register'}>
          <RegisterPage />
        </Route>
        <Route path='*'>
          {/* <h2>404 Not found</h2> */}
          <Page />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
