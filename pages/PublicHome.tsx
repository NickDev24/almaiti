import React, { useState } from 'react';
import { ArrowRight, Star, Clock, MessageSquare, Send, ChevronDown } from 'lucide-react';
import { SERVICES_DATA, TESTIMONIALS_DATA, GALLERY_DATA, BLOG_DATA } from '../constants';
import { Button, SectionTitle, GlassCard } from '../components/UI';
import { useNavigate } from 'react-router-dom';
import BookingModal from '../components/BookingModal';
import { SEO } from '../components/SEO';

const PublicHome: React.FC = () => {
  const navigate = useNavigate();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  // Reviews State
  const [reviews, setReviews] = useState(TESTIMONIALS_DATA);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    rating: 5,
    text: ''
  });

  const handleBookService = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.email.toLowerCase().endsWith('@gmail.com')) {
      alert('Por favor, ingresa una dirección de correo de Gmail válida (ejemplo@gmail.com) para verificar tu reseña.');
      return;
    }

    const reviewToAdd = {
      id: Date.now().toString(),
      name: newReview.name,
      text: newReview.text,
      rating: newReview.rating,
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(newReview.name)}&background=E6007E&color=fff`
    };

    setReviews([reviewToAdd, ...reviews]);
    setShowReviewForm(false);
    setNewReview({ name: '', email: '', rating: 5, text: '' });
    alert('¡Gracias por tu reseña!');
  };

  // Select top 4 real images for the Lookbook
  const showcaseImages = GALLERY_DATA.slice(0, 4);

  return (
    <>
      <SEO 
        title="Peluquería Editorial & Colorimetría"
        description="El mejor estudio de cabello en Salta Capital. Especialistas en rubios, balayage, células madre y recuperación capilar. Ubicados cerca del Shopping."
        keywords="Peluqueria Salta, Salta Capital, Shopping Salta, Rubios Salta, Balayage, Tratamientos Capilares NOA"
      />

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        preSelectedService={selectedService} 
      />

      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2626&auto=format&fit=crop" 
            alt="Hero Background Fashion Hair" 
            className="w-full h-full object-cover opacity-80 scale-105 animate-pulse-slow"
            style={{ filter: 'contrast(1.1) brightness(0.8)' }}
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 flex flex-col h-full justify-center">
          <div className="max-w-7xl mx-auto w-full pt-20">
            <div className="animate-fade-in space-y-2 md:space-y-4">
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight md:leading-[0.9] tracking-tighter mix-blend-overlay opacity-90">
                REALZA<br />
                TU<br />
                BELLEZA
              </h1>
              
              <p className="text-gray-200 text-lg md:text-xl max-w-md font-light leading-relaxed mt-6 border-l-2 border-brand-pink pl-6 backdrop-blur-sm">
                Especialistas en Colorimetría Avanzada y Salud Capilar en <span className="text-white font-medium">Salta</span>. <br/>
                <span className="text-brand-pink font-semibold">Empoderamos tu imagen con técnicas de vanguardia.</span>
              </p>

              <div className="flex flex-wrap gap-4 pt-10">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="px-8 py-4 bg-brand-pink text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(230,0,126,0.5)]"
                >
                  Reservar Pack 🎁
                </button>
                <button 
                  onClick={() => navigate('/services')}
                  className="px-8 py-4 bg-transparent border border-white text-white text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
                >
                  Ver Servicios
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-float">
          <ChevronDown className="text-white/50" size={32} />
        </div>
      </section>

      {/* 2. Marquee / Running Text (Fixed Layout & Keywords) */}
      <div className="bg-brand-pink text-white py-4 overflow-hidden border-y border-brand-pinkDim relative z-20">
        <div className="flex overflow-hidden w-full select-none">
          <div className="flex-shrink-0 min-w-full flex justify-around items-center gap-8 animate-marquee px-4">
             <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em]">Colorimetría Salta</span> 
             <span className="text-brand-pinkDim">✦</span> 
             <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em]">Sistema PLEX</span> 
             <span className="text-brand-pinkDim">✦</span> 
             <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em]">Células Madre</span> 
             <span className="text-brand-pinkDim">✦</span> 
             <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em]">Rubios Dorados</span> 
             <span className="text-brand-pinkDim">✦</span> 
             <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em]">Atención Exclusiva</span> 
             <span className="text-brand-pinkDim">✦</span> 
          </div>
          <div className="flex-shrink-0 min-w-full flex justify-around items-center gap-8 animate-marquee px-4" aria-hidden="true">
             <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em]">Colorimetría Salta</span> 
             <span className="text-brand-pinkDim">✦</span> 
             <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em]">Sistema PLEX</span> 
             <span className="text-brand-pinkDim">✦</span> 
             <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em]">Células Madre</span> 
             <span className="text-brand-pinkDim">✦</span> 
             <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em]">Rubios Dorados</span> 
             <span className="text-brand-pinkDim">✦</span> 
             <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em]">Atención Exclusiva</span> 
             <span className="text-brand-pinkDim">✦</span> 
          </div>
        </div>
      </div>

      {/* 3. Stats / Authority Section */}
      <section className="bg-brand-dark py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-white mb-1">11+</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Años de Experiencia</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-white mb-1">VIP</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Atención por Turno</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-white mb-1">100%</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Productos Importados</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-white mb-1">7/7</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Disponibilidad Extendida</p>
          </div>
        </div>
      </section>

      {/* 4. Lookbook / Gallery Teaser */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-brand-pink uppercase tracking-widest text-xs font-bold mb-2">Resultados Reales</p>
              <h2 className="text-4xl md:text-5xl font-light text-white">Transformaciones</h2>
              <p className="text-gray-400 text-sm mt-2">Antes y Después realizados en nuestro estudio en Salta.</p>
            </div>
            <Button variant="outline" onClick={() => navigate('/gallery')} className="hidden md:flex">Ver Todo</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[600px]">
             {/* Feature Image (First Item) */}
             {showcaseImages.length > 0 && (
               <div className="col-span-1 md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl aspect-[3/4] md:aspect-auto">
                  <img 
                    src={showcaseImages[0].afterUrl} 
                    alt={`Resultado ${showcaseImages[0].title} en Salta`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-end md:items-center justify-start md:justify-center p-6">
                     <div>
                       <span className="text-brand-pink text-xs font-bold uppercase tracking-wider block mb-1">{showcaseImages[0].category}</span>
                       <span className="text-white text-xl font-bold md:border md:border-white md:px-6 md:py-2">{showcaseImages[0].title}</span>
                     </div>
                  </div>
               </div>
             )}

             {/* Secondary Images */}
             {showcaseImages.slice(1).map((img, idx) => (
                <div key={img.id} className={`relative group overflow-hidden rounded-xl aspect-[3/4] md:aspect-auto ${idx === 2 ? 'md:col-span-2' : ''}`}>
                  <img src={img.afterUrl} alt={`Cambio de look ${img.title}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm tracking-widest uppercase font-bold">{img.title}</span>
                  </div>
                </div>
             ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" fullWidth onClick={() => navigate('/gallery')}>Explorar Galería</Button>
          </div>
        </div>
      </section>

      {/* 5. Services Carousel (Horizontal Scroll on Mobile, Grid on Desktop) */}
      <section className="py-24 bg-brand-dark/30 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Menú Destacado" subtitle="Servicios Premium" />
          
          {/* Container with horizontal scroll snap for mobile */}
          <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible no-scrollbar">
            {SERVICES_DATA.slice(0, 3).map((service) => (
              <div 
                key={service.id} 
                className="group cursor-pointer min-w-[85vw] md:min-w-0 snap-center" 
                onClick={() => handleBookService(service.title)}
              >
                 <div className="relative overflow-hidden aspect-[3/4] rounded-lg mb-6 border border-white/5">
                   <div className="absolute inset-0 bg-brand-pink/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500"></div>
                   <img 
                     src={service.image} 
                     alt={`Servicio de ${service.title} en Almaiti Salta`} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute top-4 right-4 bg-brand-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full z-20 shadow-lg">
                     {service.priceStart.includes('Pack') || service.priceStart.includes('$2') || service.priceStart.includes('$3') ? 'PACK' : 'PREMIUM'}
                   </div>
                   <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                      <span className="text-brand-pink font-bold text-xs uppercase tracking-widest mb-1 block">
                        {service.priceStart !== '$ Consultar' ? service.priceStart : 'Reservar Cita'}
                      </span>
                   </div>
                 </div>
                 <div className="pr-2">
                   <h3 className="text-2xl font-light text-white mb-2 group-hover:text-brand-pink transition-colors tracking-tight">{service.title}</h3>
                   <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{service.description}</p>
                 </div>
              </div>
            ))}
          </div>
          
          {/* Swipe indicator for mobile */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            <div className="w-2 h-2 rounded-full bg-brand-pink"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
          </div>
        </div>
      </section>

      {/* 6. Reviews (Clean Grid) */}
      <section className="py-24 bg-brand-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
           <div className="text-center mb-16">
              <Star className="w-10 h-10 text-brand-pink mx-auto mb-6 animate-spin-slow" />
              <h2 className="text-4xl md:text-5xl font-light text-white">Clientas Felices</h2>
              <p className="text-gray-400 mt-4 tracking-widest uppercase text-xs">Historias reales de recuperación capilar en Salta</p>
           </div>
           
           {reviews.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {reviews.slice(0, 4).map((testimonial) => (
                  <GlassCard key={testimonial.id} className="relative group hover:bg-white/5 transition-colors border-white/5">
                    <div className="absolute top-4 right-4 text-brand-pink/20 group-hover:text-brand-pink/50 transition-colors">
                      <MessageSquare size={32} />
                    </div>
                    <div className="flex gap-1 text-brand-pink mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-300 italic mb-6 leading-relaxed font-light text-sm md:text-base">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-pink to-purple-600 p-[1px]">
                         <img 
                            src={testimonial.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}`} 
                            alt={`Testimonio de ${testimonial.name}`} 
                            className="w-full h-full rounded-full object-cover border-2 border-black" 
                         />
                      </div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider">{testimonial.name}</h4>
                    </div>
                  </GlassCard>
                ))}
             </div>
           ) : (
             <div className="text-center mb-12 py-10 border border-dashed border-white/10 rounded-xl">
               <p className="text-gray-400 italic">Aún no hay reseñas. ¡Sé la primera en contarnos tu experiencia!</p>
             </div>
           )}

           <div className="text-center">
              {!showReviewForm ? (
                <button 
                  onClick={() => setShowReviewForm(true)} 
                  className="text-white border-b border-brand-pink pb-1 hover:text-brand-pink transition-colors text-sm uppercase tracking-widest"
                >
                  Escribir una Reseña
                </button>
              ) : (
                <GlassCard className="max-w-xl mx-auto text-left animate-slide-up relative">
                   <button 
                     onClick={() => setShowReviewForm(false)} 
                     className="absolute top-4 right-4 text-gray-500 hover:text-white"
                   >
                     ✕
                   </button>
                   <h3 className="text-xl font-bold text-white mb-6">Tu Experiencia</h3>
                   <form onSubmit={handleSubmitReview} className="space-y-4">
                      <input 
                        type="text" 
                        required
                        placeholder="Tu Nombre"
                        value={newReview.name}
                        onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-brand-pink outline-none"
                      />
                      <input 
                        type="email" 
                        required
                        placeholder="Tu Gmail (para verificación)"
                        value={newReview.email}
                        onChange={(e) => setNewReview({...newReview, email: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-brand-pink outline-none"
                      />
                      <div className="flex gap-2">
                           {[1,2,3,4,5].map((star) => (
                             <button 
                               type="button" 
                               key={star}
                               onClick={() => setNewReview({...newReview, rating: star})}
                               className={`transition-transform hover:scale-110 ${newReview.rating >= star ? 'text-brand-pink' : 'text-gray-700'}`}
                             >
                               <Star size={24} fill={newReview.rating >= star ? "currentColor" : "none"} />
                             </button>
                           ))}
                      </div>
                      <textarea 
                        required
                        placeholder="Cuéntanos..."
                        value={newReview.text}
                        onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                        rows={3}
                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-brand-pink outline-none resize-none"
                      ></textarea>
                      <Button variant="primary" fullWidth type="submit" icon={Send}>Publicar</Button>
                   </form>
                </GlassCard>
              )}
           </div>
        </div>
      </section>

      {/* 7. Editorial / Blog Preview (New Section) */}
      <section className="py-24 bg-brand-dark/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Journal" subtitle="Consejos & Tendencias" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {BLOG_DATA.slice(0, 3).map((article) => (
               <div key={article.id} onClick={() => navigate(`/blog/${article.id}`)} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-xl mb-6 relative aspect-[4/3]">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-bold uppercase tracking-wider">
                      {article.category}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-pink transition-colors line-clamp-2">{article.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{article.excerpt}</p>
                    <div className="mt-4 flex items-center text-xs font-bold text-brand-pink uppercase tracking-widest gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      Leer Nota <ArrowRight size={14} />
                    </div>
                  </div>
               </div>
             ))}
          </div>
          
          <div className="text-center mt-12">
             <Button variant="outline" onClick={() => navigate('/blog')}>Ver Todas las Notas</Button>
          </div>
        </div>
      </section>

      {/* 8. Final Parallax CTA */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
            alt="Footer BG" 
            className="w-full h-full object-cover opacity-60"
            style={{ backgroundAttachment: 'fixed' }} // Parallax imitation
          />
          <div className="absolute inset-0 bg-brand-pink/20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
            TU NUEVO LOOK<br/>TE ESPERA
          </h2>
          <div className="h-1 w-24 bg-brand-pink mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-10 max-w-xl mx-auto">
            Únete a la lista de clientas que han transformado su imagen con nosotros en Salta.
          </p>
          <Button variant="primary" className="text-lg px-12 py-5 shadow-[0_0_30px_rgba(230,0,126,0.5)]" onClick={() => setIsBookingOpen(true)}>
            AGENDA TU CITA <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
};

export default PublicHome;