import { useContext, useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext({
  login() {},
  logout() {},
  isUserLoggedIn: '',
  token: null,
  activNav: '',
  setNav() {},
});

AuthContext.displayName = 'AuthContext';

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [activNav, setActivNav] = useState('');

  const login = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };
  const logout = () => {
    setToken(null);

    localStorage.removeItem('token');
  };

  const setNav = (string) => {
    setActivNav(string);
  };
  const ctx = {
    login,
    logout,
    isUserLoggedIn: !!token,
    token,
    activNav,
    setNav,
  };
  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuthCtx = () => {
  return useContext(AuthContext);
};
