import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: ReactNode;
  icon?: LucideIcon;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon: Icon, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full transition-all duration-300 font-medium tracking-wide uppercase text-sm";
  
  const variants = {
    primary: "bg-brand-pink text-white hover:bg-brand-pinkDim neon-glow-hover border border-brand-pink",
    secondary: "bg-white text-black hover:bg-gray-200 border border-white",
    outline: "bg-transparent text-white border border-white/30 hover:border-brand-pink hover:text-brand-pink hover:bg-brand-pink/10",
    ghost: "bg-transparent text-gray-400 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon size={16} />}
    </button>
  );
};

export const SectionTitle: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ 
  title, 
  subtitle,
  align = 'center'
}) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} animate-slide-up`}>
    {subtitle && (
      <p className="text-brand-pink uppercase tracking-[0.2em] text-xs font-bold mb-3">
        {subtitle}
      </p>
    )}
    <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
      {title}
    </h2>
    <div className={`h-1 w-20 bg-brand-pink mt-6 ${align === 'center' ? 'mx-auto' : ''} rounded-full opacity-60`} />
  </div>
);

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '',
  hoverEffect = true,
  ...props
}) => (
  <div 
    className={`glass-panel p-6 rounded-2xl border border-white/5 transition-all duration-500 ${hoverEffect ? 'hover:-translate-y-2 hover:border-brand-pink/30' : ''} ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const Badge: React.FC<{ children: ReactNode }> = ({ children }) => (
  <span className="inline-block px-3 py-1 bg-brand-pink/20 text-brand-pink text-xs font-bold rounded-full border border-brand-pink/30">
    {children}
  </span>
);