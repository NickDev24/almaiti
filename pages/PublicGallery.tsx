import React, { useState } from 'react';
import { SectionTitle } from '../components/UI';
import { GALLERY_DATA } from '../constants';

const PublicGallery: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', ...Array.from(new Set(GALLERY_DATA.map(item => item.category)))];

  const filteredData = filter === 'Todos' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Portfolio" subtitle="Resultados Reales" />
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-brand-pink text-white shadow-[0_0_15px_rgba(230,0,126,0.4)]' 
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item) => (
            <div key={item.id} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-900 cursor-pointer">
              <img 
                src={item.afterUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-brand-pink text-xs uppercase tracking-widest font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicGallery;