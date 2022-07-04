import { useContext, useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext({
  login() {},
  logout() {},
  isUserLoggedIn: '',
  token: null,
});

AuthContext.displayName = 'AuthContext';

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = (token) => {
    // console.log('store login token', token);
    setToken(token);
    localStorage.setItem('token', token);
  };
  const logout = () => {};

  const ctx = {
    login,
    logout,
    isUserLoggedIn: !!token,
    token,
  };
  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuthCtx = () => {
  return useContext(AuthContext);
};
