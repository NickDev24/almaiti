import React, { useState } from 'react';
import { useProducts } from '../hooks/useData';
import { GlassCard, SectionTitle } from '../components/UI';
import { Plus, Edit2, Trash2, X, Loader, ShoppingBag } from 'lucide-react';

interface ProductFormData {
  name: string;
  price: string;
  description: string;
  image: string;
}

const AdminProducts: React.FC = () => {
  const { data: products, loading, error, create, update, remove } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any | null>(null);
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    price: '',
    description: '',
    image: '/img/principal.jpg',
  });
  const [saving, setSaving] = useState(false);

  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
    });
    setIsModalOpen(true);
  };

  const handleNew = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      price: '',
      description: '',
      image: '/img/principal.jpg',
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingProduct) {
        await update(editingProduct.id, formData);
      } else {
        await create(formData);
      }
      setIsModalOpen(false);
    } catch (err) {
      console.error('Error saving product:', err);
      alert('Error al guardar. Por favor intenta de nuevo.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (window.confirm(`¿Estás seguro de eliminar "${name}"?`)) {
      try {
        await remove(id);
      } catch (err) {
        alert('Error al eliminar. Por favor intenta de nuevo.');
      }
    }
  };

  if (loading && products.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="animate-spin text-brand-pink" size={40} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-500/10 border border-red-500 text-red-400 p-4 rounded-lg">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <SectionTitle title="Gestión de Productos" subtitle={`${products.length} productos disponibles`} />
        <button
          onClick={handleNew}
          className="flex items-center gap-2 px-6 py-3 bg-brand-pink text-white rounded-lg hover:bg-brand-pinkDim transition-colors shadow-lg"
        >
          <Plus size={20} />
          <span>Nuevo Producto</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <GlassCard key={product.id} className="flex flex-col gap-4">
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-brand-pink text-white px-3 py-1 rounded-full text-sm font-bold">
                {product.price}
              </div>
            </div>

            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShoppingBag size={18} className="text-brand-pink" />
                {product.name}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2">{product.description}</p>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => handleEdit(product)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
              >
                <Edit2 size={16} />
                Editar
              </button>
              <button
                onClick={() => handleDelete(product.id, product.name)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
              >
                <Trash2 size={16} />
                Eliminar
              </button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Modal de Edición/Creación */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-brand-dark border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-brand-dark z-10">
              <h2 className="text-2xl font-bold text-white">
                {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre del Producto
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                  placeholder="Ej: Kit Mantenimiento Alisado"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Precio
                </label>
                <input
                  type="text"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                  placeholder="Ej: $22.000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Descripción
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors resize-none"
                  placeholder="Describe el producto..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Imagen (ruta)
                </label>
                <input
                  type="text"
                  required
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                  placeholder="/img/nombre-imagen.jpg"
                />
                {formData.image && (
                  <div className="mt-4">
                    <p className="text-xs text-gray-500 mb-2">Preview:</p>
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/img/principal.jpg';
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  disabled={saving}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 px-6 py-3 bg-brand-pink text-white rounded-lg hover:bg-brand-pinkDim transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {saving ? (
                    <>
                      <Loader className="animate-spin" size={20} />
                      Guardando...
                    </>
                  ) : (
                    'Guardar'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;