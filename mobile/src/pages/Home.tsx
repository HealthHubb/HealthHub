import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import { LogOut, Dumbbell, Utensils, Calendar, UserCheck, Sun, Moon } from "lucide-react";
import logoDark from "../assets/Logo-simple-dark.png";
import logoLight from "../assets/Logo-simple-light.png";

export function Home() {
  const { user, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  
  const logoUrl = theme === 'dark' ? logoDark : logoLight;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header Mobile */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-5 py-4 transition-colors">
        <div className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="HealthHub"
            className="h-6 object-contain mb-1"
          />
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">
            Olá, {user?.name?.split(" ")[0] || "Usuário"} 👋
          </h1>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            aria-label="Alternar Tema"
            className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors focus:outline-none"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={signOut}
            aria-label="Sair"
            className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/20"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Conteúdo da Dashboard */}
      <main className="p-5 space-y-4">
        {/* Banner de Boas-vindas */}
        <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-violet-800 p-5 text-white shadow-md shadow-violet-600/20">
          <h2 className="text-lg font-bold text-lime-400">Seu plano de hoje</h2>
          <p className="mt-1 text-sm text-violet-100">
            Confira seus treinos e refeições programadas.
          </p>
        </div>

        {/* Cards de Atalho */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 rounded-2xl cursor-pointer hover:shadow-md transition">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <Dumbbell className="h-5 w-5" />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Treinos</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Ver rotinas</p>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 rounded-2xl cursor-pointer hover:shadow-md transition">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
              <Utensils className="h-5 w-5" />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Dieta</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Plano alimentar</p>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 rounded-2xl cursor-pointer hover:shadow-md transition">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              <Calendar className="h-5 w-5" />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Histórico</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Registros diários</p>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 rounded-2xl cursor-pointer hover:shadow-md transition">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">
              <UserCheck className="h-5 w-5" />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                Profissionais
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Seus instrutores</p>
            </div>
          </div>
        </div>

        <button
          onClick={signOut}
          className="w-full mt-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-medium hover:bg-red-100 dark:hover:bg-red-900/40 flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Sair</span>
        </button>
      </main>
    </div>
  );
}
