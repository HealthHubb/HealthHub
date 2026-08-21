import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import logoLight from '../../assets/Logo2-light.png';
import logoDark from '../../assets/Logo2-dark.png';

export function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  const logoUrl = theme === 'dark' ? logoDark : logoLight;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Preencha todos os campos.');
      return;
    }

    try {
      setLoading(true);
      await signIn({ email, password });
      navigate('/');
    } catch (err: any) {
      const message = err.response?.data?.message || 'E-mail ou senha inválidos.';
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-12 transition-colors">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center mb-8">
          <img src={logoUrl} alt="HealthHub Logo" className="h-16 object-contain" />
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            HealthHub
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Entre na sua conta para acompanhar sua evolução
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 rounded-3xl overflow-hidden p-6 pt-8 transition-colors">
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all text-sm dark:text-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all text-sm dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-violet-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-violet-700 transition-colors focus:ring-4 focus:ring-violet-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Carregando..." : "Entrar"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Não tem uma conta?{' '}
            <Link to="/register" className="font-semibold text-violet-600 hover:underline">
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}