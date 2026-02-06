import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlassCard, Button } from '../components/UI';
import { Lock, ArrowLeft, Mail, AlertCircle } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Strict credential check
    if (email === 'admin@almaiti.com' && password === 'Almaitistudio25') {
      navigate('/admin');
    } else {
      setError('Credenciales inválidas. Acceso denegado.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-black p-6 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-pink/20 rounded-full blur-[120px]" />
       <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />

       <GlassCard className="w-full max-w-md p-10 relative z-10 animate-fade-in border-t border-white/20">
          <div className="text-center mb-8">
             <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Almaiti <span className="text-brand-pink">Admin</span></h1>
             <p className="text-gray-400 text-sm">Panel de gestión interna</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
             {error && (
               <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 flex items-center gap-3 text-red-400 text-sm animate-pulse">
                 <AlertCircle size={16} />
                 {error}
               </div>
             )}

             <div>
               <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
               <div className="relative group">
                 <Mail className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-brand-pink transition-colors" size={18} />
                 <input 
                   type="email" 
                   value={email}
                   required
                   onChange={(e) => setEmail(e.target.value)}
                   className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-brand-pink outline-none transition-all placeholder-gray-600"
                   placeholder="admin@almaiti.com"
                 />
               </div>
             </div>

             <div>
               <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Contraseña</label>
               <div className="relative group">
                 <Lock className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-brand-pink transition-colors" size={18} />
                 <input 
                   type="password" 
                   value={password}
                   required
                   onChange={(e) => setPassword(e.target.value)}
                   className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-brand-pink outline-none transition-all placeholder-gray-600"
                   placeholder="••••••••"
                 />
               </div>
             </div>
             
             <Button variant="primary" fullWidth type="submit" className="mt-4 shadow-lg shadow-brand-pink/20">
               Ingresar al Panel
             </Button>
          </form>

          <div className="mt-8 text-center pt-8 border-t border-white/5">
             <button onClick={() => navigate('/')} className="text-gray-500 hover:text-white text-sm flex items-center justify-center gap-2 mx-auto transition-colors">
               <ArrowLeft size={14} /> Volver al sitio público
             </button>
          </div>
       </GlassCard>
    </div>
  );
};

export default Login;