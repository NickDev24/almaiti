import React, { useState } from 'react';
import { useClients } from '../hooks/useData';
import { GlassCard, SectionTitle } from '../components/UI';
import { Plus, Edit2, Trash2, X, Loader, User, Phone, Mail } from 'lucide-react';

interface ClientFormData {
  name: string;
  email: string;
  phone: string;
  notes: string;
}

const AdminClients: React.FC = () => {
  const { data: clients, loading, error, create, update, remove } = useClients();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<any | null>(null);
  const [formData, setFormData] = useState<ClientFormData>({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [saving, setSaving] = useState(false);

  const handleEdit = (client: any) => {
    setEditingClient(client);
    setFormData({
      name: client.name,
      email: client.email,
      phone: client.phone,
      notes: client.notes || '',
    });
    setIsModalOpen(true);
  };

  const handleNew = () => {
    setEditingClient(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      notes: '',
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingClient) {
        await update(editingClient.id, formData);
      } else {
        await create(formData);
      }
      setIsModalOpen(false);
    } catch (err) {
      console.error('Error saving client:', err);
      alert('Error al guardar. Por favor intenta de nuevo.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (window.confirm(`¿Estás seguro de eliminar a "${name}"?`)) {
      try {
        await remove(id);
      } catch (err) {
        alert('Error al eliminar. Por favor intenta de nuevo.');
      }
    }
  };

  if (loading && clients.length === 0) {
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
        <SectionTitle
          title="Gestión de Clientes"
          subtitle={clients.length === 0 ? 'No hay clientes registrados' : `${clients.length} clientes registrados`}
        />
        <button
          onClick={handleNew}
          className="flex items-center gap-2 px-6 py-3 bg-brand-pink text-white rounded-lg hover:bg-brand-pinkDim transition-colors shadow-lg"
        >
          <Plus size={20} />
          <span>Nuevo Cliente</span>
        </button>
      </div>

      {clients.length === 0 ? (
        <GlassCard className="text-center py-12">
          <User size={48} className="mx-auto text-gray-600 mb-4" />
          <p className="text-gray-400">No hay clientes registrados aún.</p>
          <p className="text-gray-500 text-sm mt-2">Haz clic en "Nuevo Cliente" para agregar uno.</p>
        </GlassCard>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <GlassCard key={client.id} className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-pink/20 flex items-center justify-center">
                    <User className="text-brand-pink" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{client.name}</h3>
                    <p className="text-xs text-gray-500">Cliente #{client.id}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                {client.email && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <Mail size={16} className="text-brand-pink" />
                    <span className="truncate">{client.email}</span>
                  </div>
                )}
                {client.phone && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <Phone size={16} className="text-brand-pink" />
                    <span>{client.phone}</span>
                  </div>
                )}
                {client.notes && (
                  <p className="text-gray-500 text-xs mt-2 line-clamp-2">
                    📝 {client.notes}
                  </p>
                )}
              </div>

              <div className="flex gap-2 pt-2 mt-auto">
                <button
                  onClick={() => handleEdit(client)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
                >
                  <Edit2 size={16} />
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(client.id, client.name)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
                >
                  <Trash2 size={16} />
                  Eliminar
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      )}

      {/* Modal de Edición/Creación */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-brand-dark border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-brand-dark z-10">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <User size={24} className="text-brand-pink" />
                {editingClient ? 'Editar Cliente' : 'Nuevo Cliente'}
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
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                  placeholder="Ej: María González"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                  placeholder="maria@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                  placeholder="+54 9 387 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Notas
                </label>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors resize-none"
                  placeholder="Preferencias, historial de servicios, alergias, etc..."
                />
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

export default AdminClients;