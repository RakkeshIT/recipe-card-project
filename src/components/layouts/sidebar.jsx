
import Logo from '../../assets/images/logo.webp';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Utensils,
  PlusCircle
} from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">

      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-slate-700">
        <img
          src={Logo}
          alt="Meal Mall"
          className="w-20 h-20 object-contain"
        />
        <h1 className="text-xl font-bold ml-3">
          Meal Mall
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">

        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">
          Main Menu
        </p>

        <div className="space-y-2">

          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
          >
            <LayoutDashboard size={20} />
            <span className="text-sm font-medium">Dashboard</span>
          </Link>

          <Link
            to="/meals"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            <Utensils size={20} />
            <span className="text-sm font-medium">Meal Card</span>
          </Link>

          <Link
            to="/meals/create"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            <PlusCircle size={20} />
            <span className="text-sm font-medium">Meal Create</span>
          </Link>

        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <p className="text-xs text-slate-400 text-center">
          © 2026 Meal Mall
        </p>
      </div>

    </aside>
  );
};
