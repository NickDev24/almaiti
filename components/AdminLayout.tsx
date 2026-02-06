import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Scissors, Image as ImageIcon, Users, Settings, LogOut, ShoppingBag } from 'lucide-react';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, clear auth tokens here
    navigate('/');
  };

  const navItemClass = ({ isActive }: { isActive: boolean }) => 
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      isActive 
        ? 'bg-brand-pink text-white shadow-lg shadow-brand-pink/20' 
        : 'text-gray-400 hover:bg-white/5 hover:text-white'
    }`;

  return (
    <div className="flex h-screen bg-brand-black overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-dark border-r border-white/5 hidden md:flex flex-col">
        <div className="p-8">
          <h2 className="text-xl font-bold text-white tracking-tight">ALMAITI <span className="text-brand-pink">ADMIN</span></h2>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          <NavLink to="/admin" end className={navItemClass}>
            <LayoutDashboard size={20} /> Dashboard
          </NavLink>
          <NavLink to="/admin/services" className={navItemClass}>
            <Scissors size={20} /> Servicios
          </NavLink>
          <NavLink to="/admin/products" className={navItemClass}>
            <ShoppingBag size={20} /> Productos
          </NavLink>
          <NavLink to="/admin/gallery" className={navItemClass}>
            <ImageIcon size={20} /> Galería
          </NavLink>
          <NavLink to="/admin/clients" className={navItemClass}>
            <Users size={20} /> Clientes
          </NavLink>
          <NavLink to="/admin/settings" className={navItemClass}>
            <Settings size={20} /> Configuración
          </NavLink>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-left text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-colors"
          >
            <LogOut size={20} /> Salir
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="md:hidden p-4 bg-brand-dark border-b border-white/5 flex justify-between items-center">
             <h2 className="text-lg font-bold">Admin Panel</h2>
             <button onClick={handleLogout}><LogOut size={20} /></button>
        </div>
        <div className="p-6 md:p-12 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;