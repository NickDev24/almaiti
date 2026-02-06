import React, { useState } from 'react';
import { SectionTitle, GlassCard, Button } from '../components/UI';
import { SERVICES_DATA } from '../constants';
import { Clock, Check } from 'lucide-react';
import BookingModal from '../components/BookingModal';
import { SEO } from '../components/SEO';

const PublicServices: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleBook = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="pt-32 pb-32 px-6 min-h-screen">
      <SEO 
        title="Servicios y Precios"
        description="Consulta nuestros packs promocionales en Salta: Alisados Láser, Colorimetría, Células Madre y Cortes de diseño. Calidad internacional."
        keywords="Precios Peluquería Salta, Alisado Salta, Precios Botox Capilar, Pack Novias Salta"
      />
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        preSelectedService={selectedService} 
      />
      
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Menú de Servicios" subtitle="Cuidado & Estilo" />
        
        <div className="grid grid-cols-1 gap-12">
          {SERVICES_DATA.map((service, idx) => (
            <GlassCard key={service.id} hoverEffect={false} className="flex flex-col md:flex-row gap-8 items-center p-0 overflow-hidden group">
              <div className={`w-full md:w-1/2 h-64 md:h-96 overflow-hidden ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 text-left">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                  <span className="text-2xl text-brand-pink font-light whitespace-nowrap">{service.priceStart}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm uppercase tracking-widest mb-6">
                  <Clock size={16} /> Duración aprox: {service.duration}
                </div>
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  {service.description}
                </p>
                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Check size={14} className="text-brand-pink" /> Consulta de diagnóstico incluida
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                     <Check size={14} className="text-brand-pink" /> Productos premium importados
                  </div>
                </div>
                <Button variant="outline" onClick={() => handleBook(service.title)}>
                  Agendar Cita
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicServices;