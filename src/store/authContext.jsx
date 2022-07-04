import { useContext } from 'react';
import { createContext } from 'react';

const AuthContext = createContext({
  login() {},
  logout() {},
});

AuthContext.displayName = 'AuthContext';

const AuthProvider = ({ children }) => {
  const login = () => {};
  const logout = () => {};

  const ctx = {
    login,
    logout,
  };
  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuthCtx = () => {
  return useContext(AuthContext);
};
