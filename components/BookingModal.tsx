import React, { useState } from 'react';
import { X, MessageCircle, AlertCircle } from 'lucide-react';
import { Button } from './UI';
import { PHONE_NUMBER } from '../constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preSelectedService = '' }) => {
  const [name, setName] = useState('');
  const [service, setService] = useState(preSelectedService);
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedPolicy) return;

    const message = `Hola Almaiti Hair Studio, quiero solicitar un turno.%0A%0A*Nombre:* ${name}%0A*Servicio de Interés:* ${service}%0A%0A✅ *Acepto la política de seña ($15.000 ARS).*`;
    
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content - Sheet on mobile, Card on desktop */}
      <div className="relative w-full md:w-[500px] bg-brand-gray glass-modal border-t md:border border-white/10 rounded-t-3xl md:rounded-3xl p-6 md:p-8 animate-slide-up shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 rounded-full"
        >
          <X size={20} />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Solicitar Turno</h2>
          <p className="text-gray-400 text-sm">
            Completa tus datos para coordinar directamente por WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-brand-pink uppercase tracking-widest mb-2">
              Tu Nombre
            </label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-brand-pink outline-none transition-colors"
              placeholder="Ej. Ana García"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-brand-pink uppercase tracking-widest mb-2">
              Servicio de Interés
            </label>
            <input 
              type="text" 
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-brand-pink outline-none transition-colors"
              placeholder="Ej. Corte Bordado"
            />
          </div>

          <div className="bg-brand-pink/10 border border-brand-pink/20 rounded-xl p-4 flex gap-3 items-start">
             <AlertCircle className="text-brand-pink shrink-0 mt-0.5" size={18} />
             <div className="space-y-3">
               <p className="text-sm text-gray-300 leading-relaxed">
                 Entiendo que para confirmar mi turno debo abonar una seña de <span className="text-white font-bold">$15.000 ARS</span>, la cual no es reembolsable.
               </p>
               <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${acceptedPolicy ? 'bg-brand-pink border-brand-pink' : 'border-gray-500 group-hover:border-brand-pink'}`}>
                     {acceptedPolicy && <X size={14} className="text-white rotate-45" />} {/* Makeshift checkmark with rotated X if needed, or simple box */}
                     {acceptedPolicy && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5 text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                  </div>
                  <input 
                    type="checkbox" 
                    className="hidden"
                    checked={acceptedPolicy}
                    onChange={(e) => setAcceptedPolicy(e.target.checked)}
                  />
                  <span className="text-sm font-medium text-white">Acepto la política de seña</span>
               </label>
             </div>
          </div>

          <Button 
            variant={acceptedPolicy ? 'primary' : 'ghost'} 
            fullWidth 
            type="submit"
            disabled={!acceptedPolicy}
            className={`mt-4 ${!acceptedPolicy ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <MessageCircle className="mr-2" size={18} /> Continuar a WhatsApp
          </Button>

          <p className="text-center text-xs text-gray-500 mt-4">
            Al hacer clic, se abrirá WhatsApp con los datos pre-cargados.
          </p>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;