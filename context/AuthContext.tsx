'use client';

import * as React from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  type User,
  type UserCredential,
} from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase/client';
import { getFirebaseErrorMessage } from '@/lib/firebase/errors';

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  signInWithEmail: (email: string, password: string) => Promise<UserCredential>;
  signUpWithEmail: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<UserCredential>;
  signInWithGoogle: () => Promise<UserCredential>;
  signOutUser: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithEmail = async (email: string, password: string) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      throw new Error(getFirebaseErrorMessage(err));
    }
  };

  const signUpWithEmail = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      if (credential.user) {
        await updateProfile(credential.user, { displayName });
        // Force refresh user state with updated profile displayName
        setUser({ ...credential.user, displayName });
      }
      return credential;
    } catch (err) {
      throw new Error(getFirebaseErrorMessage(err));
    }
  };

  const signInWithGoogle = async () => {
    try {
      return await signInWithPopup(auth, googleProvider);
    } catch (err) {
      throw new Error(getFirebaseErrorMessage(err));
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      throw new Error(getFirebaseErrorMessage(err));
    }
  };

  const value = React.useMemo<AuthContextType>(
    () => ({
      user,
      loading,
      isAuthenticated: !!user,
      signInWithEmail,
      signUpWithEmail,
      signInWithGoogle,
      signOutUser,
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
