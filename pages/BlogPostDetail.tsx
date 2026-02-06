import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BLOG_DATA } from '../constants';
import { Button, GlassCard } from '../components/UI';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { SEO } from '../components/SEO';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = BLOG_DATA.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-black">
        <SEO title="Artículo no encontrado" description="Blog de Almaiti Hair Studio" />
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Artículo no encontrado</h2>
          <Button onClick={() => navigate('/blog')}>Volver al Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-brand-black pb-24 animate-fade-in">
      <SEO 
        title={post.title} 
        description={post.excerpt}
        image={post.image}
        keywords={`${post.category}, Cuidado Capilar Salta, Blog Belleza Argentina`}
        type="article"
      />
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-5xl mx-auto">
          <span className="inline-block px-3 py-1 bg-brand-pink text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-gray-300 text-sm">
             <div className="flex items-center gap-2">
               <Calendar size={16} className="text-brand-pink" />
               {post.date}
             </div>
             <div className="flex items-center gap-2">
               <User size={16} className="text-brand-pink" />
               Por Almaiti
             </div>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="max-w-3xl mx-auto px-6 -mt-10 relative z-10">
        <GlassCard className="bg-black/80 border-none shadow-2xl p-8 md:p-12">
          {/* Article Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:font-light prose-headings:text-brand-pink prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-300 prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: post.content || '' }} 
          />

          {/* Footer Actions */}
          <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
            <Button variant="outline" onClick={() => navigate('/blog')} className="text-sm">
              <ArrowLeft size={16} className="mr-2" /> Volver
            </Button>
            
            <button className="text-gray-400 hover:text-brand-pink transition-colors flex items-center gap-2 text-sm uppercase tracking-widest">
              <Share2 size={16} /> Compartir
            </button>
          </div>
        </GlassCard>
      </div>
    </article>
  );
};

export default BlogPostDetail;