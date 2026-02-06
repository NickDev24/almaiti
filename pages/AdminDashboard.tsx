import React, { useState } from 'react';
import { GlassCard, Button } from '../components/UI';
import { Calendar, Users, DollarSign, TrendingUp, Clock, Plus, X, Check } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  // Mock Data
  const initialAppointments = [
    { id: 1, client: 'Ana García', service: 'Balayage', time: '10:00 AM', status: 'Confirmado' },
    { id: 2, client: 'María Lopez', service: 'Corte', time: '02:00 PM', status: 'Pendiente' },
    { id: 3, client: 'Lucía Méndez', service: 'Botox', time: '04:30 PM', status: 'Confirmado' },
  ];

  const [appointments, setAppointments] = useState(initialAppointments);
  const [showModal, setShowModal] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    client: '',
    service: '',
    time: '',
    status: 'Pendiente'
  });

  const handleAddAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    const appointment = {
      id: Date.now(),
      client: newAppointment.client,
      service: newAppointment.service,
      time: newAppointment.time,
      status: newAppointment.status
    };
    setAppointments([appointment, ...appointments]);
    setShowModal(false);
    setNewAppointment({ client: '', service: '', time: '', status: 'Pendiente' });
  };

  const stats = [
    { label: 'Citas Hoy', value: appointments.length.toString(), icon: Calendar, color: 'text-blue-400' },
    { label: 'Total Clientes', value: '1,240', icon: Users, color: 'text-purple-400' },
    { label: 'Ingresos (Mes)', value: '$4,500', icon: DollarSign, color: 'text-green-400' },
    { label: 'Crecimiento', value: '+12%', icon: TrendingUp, color: 'text-brand-pink' },
  ];

  return (
    <div className="space-y-8 animate-fade-in relative">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Panel de Control</h1>
        <p className="text-gray-400">Bienvenida de nuevo, Almaiti.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <GlassCard key={i} className="flex items-center gap-4">
            <div className={`p-3 bg-white/5 rounded-full ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Appointments List */}
        <div className="lg:col-span-2">
          <GlassCard>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Próximas Citas</h3>
              <Button variant="outline" onClick={() => setShowModal(true)} className="px-4 py-2 text-xs">
                <Plus size={14} className="mr-1" /> Nueva Cita
              </Button>
            </div>
            <div className="space-y-4">
              {appointments.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No hay citas programadas.</p>
              ) : (
                appointments.map((app) => (
                  <div key={app.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:border-brand-pink/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold">
                        {app.client.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{app.client}</h4>
                        <p className="text-sm text-gray-400">{app.service}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-white text-sm mb-1 justify-end">
                        <Clock size={14} className="text-brand-pink" /> {app.time}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${app.status === 'Confirmado' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                        {app.status}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </GlassCard>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
           <GlassCard className="bg-gradient-to-br from-brand-pink/20 to-transparent">
              <h3 className="text-lg font-bold text-white mb-4">Estado del Estudio</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Estado</span>
                  <span className="text-green-400 font-bold flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div> Abierto</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Próximo cierre</span>
                  <span className="text-white">19:00 PM</span>
                </div>
              </div>
           </GlassCard>
           
           <div className="p-6 rounded-2xl border border-dashed border-white/20 flex flex-col items-center justify-center text-center gap-4 hover:border-brand-pink/50 transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-brand-pink group-hover:text-white transition-colors">
                 <Calendar size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold">Bloquear Horario</h4>
                <p className="text-gray-500 text-xs">Cerrar disponibilidad temporalmente</p>
              </div>
           </div>
        </div>
      </div>

      {/* Modal Nueva Cita */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <GlassCard className="w-full max-w-md animate-slide-up relative">
             <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
               <X size={20} />
             </button>
             <h2 className="text-2xl font-bold text-white mb-6">Agendar Nueva Cita</h2>
             
             <form onSubmit={handleAddAppointment} className="space-y-4">
               <div>
                 <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">Nombre Cliente</label>
                 <input 
                   required
                   type="text" 
                   value={newAppointment.client}
                   onChange={e => setNewAppointment({...newAppointment, client: e.target.value})}
                   className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-brand-pink outline-none"
                   placeholder="Ej. Sofia Martínez"
                 />
               </div>
               <div>
                 <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">Servicio</label>
                 <input 
                   required
                   type="text" 
                   value={newAppointment.service}
                   onChange={e => setNewAppointment({...newAppointment, service: e.target.value})}
                   className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-brand-pink outline-none"
                   placeholder="Ej. Corte Bordado"
                 />
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">Hora</label>
                    <input 
                      required
                      type="time" 
                      value={newAppointment.time}
                      onChange={e => setNewAppointment({...newAppointment, time: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-brand-pink outline-none"
                    />
                 </div>
                 <div>
                    <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">Estado</label>
                    <select 
                      value={newAppointment.status}
                      onChange={e => setNewAppointment({...newAppointment, status: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-brand-pink outline-none"
                    >
                      <option value="Pendiente">Pendiente</option>
                      <option value="Confirmado">Confirmado</option>
                    </select>
                 </div>
               </div>
               <Button fullWidth type="submit" variant="primary">Guardar Cita</Button>
             </form>
          </GlassCard>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;