import React, { useEffect, createContext, useContext } from 'react';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth), (user) => {
      if(user) console.log(user)
    });
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
