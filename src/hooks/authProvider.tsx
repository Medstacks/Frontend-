import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { AuthContext } from './authContext';
import type { User } from '../types';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: User) => {
    localStorage.setItem('authUser', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('authUser');
    setUser(null);
  };


  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user && !!user.name }}>
      {children}
    </AuthContext.Provider>
  );
};