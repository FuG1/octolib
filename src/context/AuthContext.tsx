import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  username: string | null;
  role: 'user' | 'admin' | 'librarian' | null;
  login: (username: string, role: 'user' | 'admin' | 'librarian') => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [role, setRole] = useState<'user' | 'admin' | 'librarian' | null>(null);

  const login = (username: string, role: 'user' | 'admin' | 'librarian') => {
    setUsername(username);
    setRole(role);
  };

  const logout = () => {
    setUsername(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ username, role, login, logout, isAuthenticated: !!username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};