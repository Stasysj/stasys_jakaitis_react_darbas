import './App.css';
import { Route, Switch } from 'react-router';

import AddPage from './pages/Add/AddPage';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import Header from './components/Header/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Page from './pages/404Page';
import { useAuthCtx } from './store/authContext';

function App() {
  const { isUserLoggedIn } = useAuthCtx();
  return (
    <div className='App'>
      <Header />
      <Switch>
        <ProtectedRoute exact path={'/'}>
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
          <h2>404 Not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
