import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram, MapPin, Phone, LogIn, Home, Grid, Calendar, User, Sparkles, Facebook, ShoppingBag, Mail } from 'lucide-react';
import { APP_NAME, ADDRESS, INSTAGRAM_LINK, FACEBOOK_LINK, PHONE_NUMBER, NAV_LINKS } from '../constants';
import BookingModal from './BookingModal';

const Navbar: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
    }`;

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-brand-pink font-semibold' : 'text-gray-300 hover:text-white'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-2xl font-light uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-brand-pink font-bold' : 'text-white hover:text-brand-pink'
    }`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <div
          onClick={() => navigate('/')}
          className="text-xl md:text-2xl font-bold tracking-tighter text-white cursor-pointer select-none"
        >
          ALMAITI <span className="text-brand-pink font-light">HAIR STUDIO</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <NavLink key={link.path} to={link.path} className={linkClass}>{link.name}</NavLink>
          ))}

          <div className="h-4 w-px bg-white/20 mx-2"></div>

          {/* Admin Login Icon Desktop */}
          <button
            onClick={() => navigate('/login')}
            className="text-gray-400 hover:text-white transition-colors"
            title="Acceso Admin"
          >
            <LogIn size={20} />
          </button>

          <button
            onClick={onOpenBooking}
            className="px-6 py-2 bg-brand-pink text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-pinkDim transition-all shadow-[0_0_15px_rgba(230,0,126,0.4)] hover:shadow-[0_0_25px_rgba(230,0,126,0.6)]"
          >
            Reservar
          </button>
        </div>

        {/* Mobile Header Action */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="text-brand-pink font-bold text-xs border border-brand-pink rounded-full px-3 py-1 bg-brand-pink/10 backdrop-blur-md"
          >
            RESERVAR
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none p-1"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-brand-black z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />

        <div className="flex flex-col items-center gap-8 relative z-10 p-6 text-center">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={mobileLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          <div className="h-px w-20 bg-white/10 my-4" />

          <button
            onClick={() => {
              navigate('/login');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 text-gray-400 hover:text-white uppercase text-sm tracking-widest"
          >
            <LogIn size={16} /> Acceso Admin
          </button>

          <div className="flex gap-6 mt-4">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-pink transition-colors">
              <Instagram size={24} />
            </a>
            <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-pink transition-colors">
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const MobileTabBar: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col items-center justify-center w-full h-full gap-1 transition-colors duration-300 ${isActive ? 'text-brand-pink' : 'text-gray-500 hover:text-gray-300'
    }`;

  return (
    <div className="fixed bottom-0 left-0 w-full h-16 bg-black/90 backdrop-blur-lg border-t border-white/10 z-40 md:hidden flex justify-around items-center app-safe-area-bottom px-2">
      <NavLink to="/" className={linkClass}>
        <Home size={20} />
        <span className="text-[10px] font-medium">Inicio</span>
      </NavLink>
      <NavLink to="/services" className={linkClass}>
        <Sparkles size={20} />
        <span className="text-[10px] font-medium">Servicios</span>
      </NavLink>
      <NavLink to="/gallery" className={linkClass}>
        <Grid size={20} />
        <span className="text-[10px] font-medium">Galería</span>
      </NavLink>
      <NavLink to="/products" className={linkClass}>
        <ShoppingBag size={20} />
        <span className="text-[10px] font-medium">Tienda</span>
      </NavLink>
      <NavLink to="/about" className={linkClass}>
        <User size={20} />
        <span className="text-[10px] font-medium">Perfil</span>
      </NavLink>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-20 pb-28 md:pb-10 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

        {/* Brand Column */}
        <div className="space-y-6">
          <div className="text-2xl font-bold tracking-tighter text-white">
            ALMAITI <span className="text-brand-pink font-light">HAIR STUDIO</span>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-xs">
            Colorimetría avanzada, recuperación capilar y estilos de autor. Especialistas en Rubios Dorados, PLEX y Células Madre.
          </p>
          <div className="flex gap-4">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-pink hover:text-white transition-colors border border-white/10 hover:border-brand-pink">
              <Instagram size={18} />
            </a>
            <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-pink hover:text-white transition-colors border border-white/10 hover:border-brand-pink">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Explorar</h4>
          <ul className="space-y-4 text-gray-400">
            <li><NavLink to="/services" className="hover:text-brand-pink transition-colors">Packs Promocionales</NavLink></li>
            <li><NavLink to="/gallery" className="hover:text-brand-pink transition-colors">Antes y Después</NavLink></li>
            <li><NavLink to="/products" className="hover:text-brand-pink transition-colors">Kits Mantenimiento</NavLink></li>
            <li><NavLink to="/about" className="hover:text-brand-pink transition-colors">Filosofía Almaiti</NavLink></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Contacto</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="text-brand-pink mt-1 shrink-0" size={16} />
              <span>{ADDRESS}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-brand-pink shrink-0" size={16} />
              <span>+{PHONE_NUMBER}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-brand-pink shrink-0" size={16} />
              <span>contacto@almaitistudio.com</span>
            </li>
          </ul>
        </div>

        {/* Schedule & Map */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Horarios</h4>
          <ul className="space-y-2 text-gray-400 mb-6">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Atención con Turno</span>
              <span className="text-white font-medium">09:00 - 22:00</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Fines de Semana</span>
              <span className="text-brand-pink font-bold">DISPONIBLE</span>
            </li>
          </ul>
          <p className="text-xs text-gray-500">
            *Horario corrido. Atención exclusiva con turno previo.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-wider">
        <p>&copy; {new Date().getFullYear()} {APP_NAME}. Todos los derechos reservados.</p>
        <div className="flex items-center gap-6">
          <NavLink to="/privacy" className="hover:text-white transition-colors">Privacidad</NavLink>
          <NavLink to="/terms" className="hover:text-white transition-colors">Términos</NavLink>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-pink selection:text-white">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <MobileTabBar />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};