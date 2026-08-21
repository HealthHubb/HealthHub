import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProtectedRoute, PublicRoute } from './components/RoutesProtection';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Home } from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
        <Routes>
          {/* Rotas Públicas (acessíveis apenas por quem NÃO está logado) */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Rotas Protegidas (acessíveis apenas por quem ESTÁ logado) */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            {/* Adicione outras telas protegidas aqui no futuro */}
          </Route>

          {/* Redirecionamento padrão para qualquer rota inexistente */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}