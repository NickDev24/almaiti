import React from 'react';
import { SectionTitle, Button, GlassCard } from '../components/UI';
import { WHATSAPP_LINK, PROFILE_IMAGE_URL } from '../constants';
import { ArrowRight, Heart, Award, Sparkles, Clock, Calendar } from 'lucide-react';

const PublicAbout: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Editorial Header (No Image, Text Only) */}
      <section className="relative pt-48 pb-20 px-6 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-pink/5 rounded-full blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4 animate-fade-in">
            ALMAITI
          </h1>
          <p className="text-xl md:text-2xl text-brand-pink font-light tracking-[0.2em] uppercase animate-slide-up">
            La Artista Detrás de la Marca
          </p>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="py-12 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <h2 className="text-4xl font-light text-white leading-tight">
              Más de <span className="text-brand-pink font-bold">11 años</span> realzando la belleza de cada mujer.
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
              <p>
                Mi viaje en el mundo del estilismo comenzó con una obsesión: entender cómo el cabello puede transformar no solo una apariencia, sino una actitud. 
              </p>
              <p>
                Especializada en <strong>Colorimetría Avanzada</strong> y <strong>Recuperación Capilar (PLEX, Células Madre)</strong>, he dedicado la última década a perfeccionar técnicas que priorizan la salud capilar sobre cualquier tendencia pasajera. 
              </p>
              <p>
                En <strong>Almaiti Hair Studio</strong>, ofrezco una experiencia de autor. No atendemos por orden de llegada; cada turno es exclusivo para dedicarte el tiempo y la técnica que mereces, incluso en horarios extendidos hasta las 22hs.
              </p>
            </div>
            
            <div className="pt-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" alt="Signature" className="h-16 opacity-50 invert" />
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
             <div className="absolute inset-0 border border-brand-pink/30 translate-x-4 translate-y-4 rounded-xl" />
             <img 
               src={PROFILE_IMAGE_URL}
               alt="Almaiti Portrait" 
               className="relative rounded-xl w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-[3/4]" 
             />
          </div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="py-24 bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Mi Filosofía" subtitle="Valores Nucleares" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <GlassCard className="text-center p-10 hover:-translate-y-2 transition-transform duration-500">
                <div className="w-16 h-16 mx-auto bg-brand-pink/10 rounded-full flex items-center justify-center text-brand-pink mb-6">
                  <Heart size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Salud Capilar Primero</h3>
                <p className="text-gray-400">Jamás sacrificaré la integridad de tu cabello por un rubio rápido. Usamos Betaplex y tratamientos de vanguardia para cuidar tu fibra.</p>
             </GlassCard>

             <GlassCard className="text-center p-10 hover:-translate-y-2 transition-transform duration-500 border-brand-pink/20">
                <div className="w-16 h-16 mx-auto bg-brand-pink/10 rounded-full flex items-center justify-center text-brand-pink mb-6">
                  <Calendar size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Atención Exclusiva</h3>
                <p className="text-gray-400">Trabajamos únicamente con turnos programados. Sin esperas masivas, tu tiempo es parte del lujo de la experiencia Almaiti.</p>
             </GlassCard>

             <GlassCard className="text-center p-10 hover:-translate-y-2 transition-transform duration-500">
                <div className="w-16 h-16 mx-auto bg-brand-pink/10 rounded-full flex items-center justify-center text-brand-pink mb-6">
                  <Clock size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Disponibilidad Total</h3>
                <p className="text-gray-400">Sabemos que tu agenda es complicada. Ofrecemos horarios especiales, incluyendo fines de semana y atención nocturna.</p>
             </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-light text-white mb-8">
          ¿Lista para vivir la experiencia <span className="text-brand-pink font-bold">Almaiti</span>?
        </h2>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
          <Button variant="primary" className="text-lg px-12 py-4 shadow-[0_0_30px_rgba(230,0,126,0.3)] hover:shadow-[0_0_50px_rgba(230,0,126,0.6)]">
            Solicitar Diagnóstico <ArrowRight className="ml-2" />
          </Button>
        </a>
      </section>
    </div>
  );
};

export default PublicAbout;