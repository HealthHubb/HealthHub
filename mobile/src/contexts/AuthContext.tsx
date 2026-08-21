import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

interface User {
    id: string;
    name: string;
    email: string;
    role?: string;
}

interface AuthContextData {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    signIn: (credentials: {email: string; password: string }) => Promise<void>;
    signUp: (data: {name: string; email: string; password: string; role?: string; }) => Promise<void>;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem('@HealthHub:token');
        const storedUser = localStorage.getItem('@HealthHub:user')

        if(storedToken && storedUser){
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
        }

        setIsLoading(false)
    }, []);

    async function signIn({ email, password }: { email: string; password: string }) {
    const response = await api.post('/auth/login', { email, password });
    const { token: receivedToken, user: receivedUser } = response.data;

    setToken(receivedToken);
    setUser(receivedUser);

    localStorage.setItem('@HealthHub:token', receivedToken);
    localStorage.setItem('@HealthHub:user', JSON.stringify(receivedUser));
  }

  async function signUp(data: { name: string; email: string; password: string; role?: string }) {
    await api.post('/auth/register', data);
  }

  function signOut() {
    setToken(null);
    setUser(null);
    localStorage.removeItem('@HealthHub:token');
    localStorage.removeItem('@HealthHub:user');
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser utilizado dentro de um AuthProvider');
  }
  return context;
}