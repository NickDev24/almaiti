import React from 'react';
import { SectionTitle, GlassCard } from '../components/UI';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BLOG_DATA } from '../constants';
import { useNavigate } from 'react-router-dom';

const PublicBlog: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Editorial" subtitle="Beauty Journal" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {BLOG_DATA.map((article) => (
             <GlassCard 
                key={article.id} 
                className="p-0 overflow-hidden group hover:border-brand-pink/50 flex flex-col h-full cursor-pointer transition-all duration-300"
                onClick={() => navigate(`/blog/${article.id}`)}
             >
                <div className="h-64 overflow-hidden relative">
                   <img 
                     src={article.image} 
                     alt={article.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                   />
                   <div className="absolute top-4 left-4 bg-brand-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                     {article.category}
                   </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                   <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                      <span className="flex items-center gap-1"><User size={12} /> Almaiti</span>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-pink transition-colors leading-tight">
                     {article.title}
                   </h3>
                   <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed line-clamp-3">
                     {article.excerpt}
                   </p>
                   <div className="flex items-center text-brand-pink text-sm font-bold uppercase tracking-widest gap-2 mt-auto">
                     Leer Artículo <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                   </div>
                </div>
             </GlassCard>
           ))}
        </div>
      </div>
    </div>
  );
};

export default PublicBlog;