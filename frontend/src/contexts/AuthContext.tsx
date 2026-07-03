import { createContext, useContext, useState, type ReactNode } from 'react';
import type { User } from '@/types';

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

/**
 * Provider global de autenticação.
 * TODO (Fase de integração backend): substituir a simulação abaixo por
 * chamadas reais a `services/auth.ts` (Node.js + Express + JWT).
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, _password: string) => {
    // Simulação local — Fase 1. Integração real ocorrerá via services/auth.ts.
    await new Promise((resolve) => setTimeout(resolve, 500));
    setUser({ id: 'temp-id', name: email.split('@')[0], email });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/** Hook de acesso ao contexto de autenticação. */
export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth deve ser usado dentro de <AuthProvider>');
  return ctx;
}