import React, { useState, useEffect, createContext, useContext } from 'react';
import { auth } from '../config/firebase';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
    });

    setLoading(false);

    return () => unsubscribe();
  }, []);

  const signup = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
  };

  const signin = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
  };

  const signout = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, signup, signin, signout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
