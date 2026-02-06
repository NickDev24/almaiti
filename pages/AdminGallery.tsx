import React, { useState } from 'react';
import { useGallery } from '../hooks/useData';
import { SectionTitle } from '../components/UI';
import { Plus, Edit2, Trash2, X, Loader, Image as ImageIcon } from 'lucide-react';

interface GalleryFormData {
  category: string;
  title: string;
  afterUrl: string;
}

const AdminGallery: React.FC = () => {
  const { data: images, loading, error, create, update, remove } = useGallery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingImage, setEditingImage] = useState<any | null>(null);
  const [formData, setFormData] = useState<GalleryFormData>({
    category: 'Color',
    title: '',
    afterUrl: '/img/principal.jpg',
  });
  const [saving, setSaving] = useState(false);

  const categories = ['Color', 'Corte', 'Tratamiento', 'Peinado', 'Alisado'];

  const handleEdit = (image: any) => {
    setEditingImage(image);
    setFormData({
      category: image.category,
      title: image.title,
      afterUrl: image.afterUrl,
    });
    setIsModalOpen(true);
  };

  const handleNew = () => {
    setEditingImage(null);
    setFormData({
      category: 'Color',
      title: '',
      afterUrl: '/img/principal.jpg',
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingImage) {
        await update(editingImage.id, formData);
      } else {
        await create(formData);
      }
      setIsModalOpen(false);
    } catch (err) {
      console.error('Error saving image:', err);
      alert('Error al guardar. Por favor intenta de nuevo.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (window.confirm(`¿Estás seguro de eliminar "${title}"?`)) {
      try {
        await remove(id);
      } catch (err) {
        alert('Error al eliminar. Por favor intenta de nuevo.');
      }
    }
  };

  if (loading && images.length === 0) {
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
        <SectionTitle title="Gestión de Galería" subtitle={`${images.length} imágenes en galería`} />
        <button
          onClick={handleNew}
          className="flex items-center gap-2 px-6 py-3 bg-brand-pink text-white rounded-lg hover:bg-brand-pinkDim transition-colors shadow-lg"
        >
          <Plus size={20} />
          <span>Nueva Imagen</span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((item) => (
          <div
            key={item.id}
            className="relative group aspect-[3/4] rounded-xl overflow-hidden bg-gray-900"
          >
            <img
              src={item.afterUrl}
              alt={item.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />

            {/* Overlay con info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                <span className="inline-block px-2 py-1 bg-brand-pink text-white text-xs rounded-full">
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-sm">{item.title}</h3>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => handleEdit(item)}
                className="p-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                title="Editar"
              >
                <Edit2 size={16} className="text-white" />
              </button>
              <button
                onClick={() => handleDelete(item.id, item.title)}
                className="p-2 bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
                title="Eliminar"
              >
                <Trash2 size={16} className="text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Edición/Creación */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-brand-dark border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-brand-dark z-10">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <ImageIcon size={24} className="text-brand-pink" />
                {editingImage ? 'Editar Imagen' : 'Nueva Imagen'}
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
                  Categoría
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white focus:border-brand-pink focus:outline-none transition-colors"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Título
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                  placeholder="Ej: Rubio Dorado Premium"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Imagen (ruta)
                </label>
                <input
                  type="text"
                  required
                  value={formData.afterUrl}
                  onChange={(e) => setFormData({ ...formData, afterUrl: e.target.value })}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                  placeholder="/img/nombre-imagen.jpg"
                />
                {formData.afterUrl && (
                  <div className="mt-4">
                    <p className="text-xs text-gray-500 mb-2">Preview:</p>
                    <img
                      src={formData.afterUrl}
                      alt="Preview"
                      className="w-full h-64 object-cover rounded-lg"
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

export default AdminGallery;