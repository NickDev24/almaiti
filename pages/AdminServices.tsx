import React, { useState } from 'react';
import { useServices } from '../hooks/useData';
import { GlassCard, SectionTitle } from '../components/UI';
import { Plus, Edit2, Trash2, X, Loader } from 'lucide-react';

interface ServiceFormData {
  title: string;
  description: string;
  priceStart: string;
  duration: string;
  image: string;
}

const AdminServices: React.FC = () => {
  const { data: services, loading, error, create, update, remove } = useServices();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<any | null>(null);
  const [formData, setFormData] = useState<ServiceFormData>({
    title: '',
    description: '',
    priceStart: '',
    duration: '',
    image: '/img/principal.jpg',
  });
  const [saving, setSaving] = useState(false);

  const handleEdit = (service: any) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      priceStart: service.priceStart,
      duration: service.duration,
      image: service.image,
    });
    setIsModalOpen(true);
  };

  const handleNew = () => {
    setEditingService(null);
    setFormData({
      title: '',
      description: '',
      priceStart: '',
      duration: '',
      image: '/img/principal.jpg',
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingService) {
        await update(editingService.id, formData);
      } else {
        await create(formData);
      }
      setIsModalOpen(false);
    } catch (err) {
      console.error('Error saving service:', err);
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

  if (loading && services.length === 0) {
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
        <SectionTitle title="Gestión de Servicios" subtitle={`${services.length} servicios registrados`} />
        <button
          onClick={handleNew}
          className="flex items-center gap-2 px-6 py-3 bg-brand-pink text-white rounded-lg hover:bg-brand-pinkDim transition-colors shadow-lg"
        >
          <Plus size={20} />
          <span>Nuevo Servicio</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {services.map((service) => (
          <GlassCard key={service.id} className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-full md:w-32 h-32 rounded-lg overflow-hidden shrink-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">{service.description}</p>
              <div className="flex gap-4 text-xs text-gray-500">
                <span>💰 {service.priceStart}</span>
                <span>⏱️ {service.duration}</span>
              </div>
            </div>

            <div className="flex md:flex-col gap-2">
              <button
                onClick={() => handleEdit(service)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
              >
                <Edit2 size={16} />
                <span className="hidden md:inline">Editar</span>
              </button>
              <button
                onClick={() => handleDelete(service.id, service.title)}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
              >
                <Trash2 size={16} />
                <span className="hidden md:inline">Eliminar</span>
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
                {editingService ? 'Editar Servicio' : 'Nuevo Servicio'}
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
                  Título del Servicio
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                  placeholder="Ej: Colorimetría Avanzada"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Descripción
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors resize-none"
                  placeholder="Describe el servicio..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Precio
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.priceStart}
                    onChange={(e) => setFormData({ ...formData, priceStart: e.target.value })}
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                    placeholder="Ej: $30.000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Duración
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                    placeholder="Ej: 2-3h"
                  />
                </div>
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
                      className="w-full h-40 object-cover rounded-lg"
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

export default AdminServices;