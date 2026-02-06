import React, { useState } from 'react';
import { SectionTitle, GlassCard, Button } from '../components/UI';
import { PRODUCTS_DATA, PHONE_NUMBER } from '../constants';
import { ShoppingBag, Sparkles } from 'lucide-react';

const PublicProducts: React.FC = () => {
  const handleBuy = (productName: string) => {
    const message = `Hola Almaiti, me interesa comprar el producto: ${productName}.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Boutique Capilar" subtitle="Mantenimiento en Casa" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS_DATA.map((product) => (
            <GlassCard key={product.id} className="p-0 overflow-hidden flex flex-col group h-full">
              <div className="aspect-square relative overflow-hidden bg-white/5">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-brand-pink text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {product.price}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-1">{product.description}</p>
                <Button 
                  variant="outline" 
                  fullWidth 
                  onClick={() => handleBuy(product.name)}
                  className="group-hover:bg-brand-pink group-hover:border-brand-pink group-hover:text-white"
                >
                  <ShoppingBag size={16} className="mr-2" /> Comprar
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
        
        {/* Banner Promo */}
        <div className="mt-16 relative rounded-2xl overflow-hidden">
           <div className="absolute inset-0">
             <img src="https://picsum.photos/1920/400?grayscale" className="w-full h-full object-cover opacity-40" />
             <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-pink/20 to-brand-black" />
           </div>
           <div className="relative z-10 p-12 text-center">
              <Sparkles className="mx-auto text-brand-pink mb-4" size={32} />
              <h3 className="text-2xl font-bold text-white mb-2">Asesoramiento Personalizado</h3>
              <p className="text-gray-300 mb-6">¿No sabes qué producto es ideal para tu cabello? Escríbenos.</p>
              <Button onClick={() => window.open(`https://wa.me/${PHONE_NUMBER}`, '_blank')}>Consultar a Almaiti</Button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PublicProducts;