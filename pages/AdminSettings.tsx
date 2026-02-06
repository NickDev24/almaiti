import React, { useState } from 'react';
import { useSettings } from '../hooks/useData';
import { GlassCard, SectionTitle } from '../components/UI';
import { Settings as SettingsIcon, Loader, Save } from 'lucide-react';

const AdminSettings: React.FC = () => {
   const { data: settings, loading, error, update } = useSettings();
   const [formData, setFormData] = useState(settings || {
      appName: '',
      phone: '',
      address: '',
      instagram: '',
      facebook: '',
      profileImage: '',
      horarios: '',
      email: '',
   });
   const [saving, setSaving] = useState(false);

   // Update formData when settings load
   React.useEffect(() => {
      if (settings) {
         setFormData(settings);
      }
   }, [settings]);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setSaving(true);
      try {
         await update(formData);
         alert('✅ Configuración guardada exitosamente');
      } catch (err) {
         console.error('Error saving settings:', err);
         alert('❌ Error al guardar. Por favor intenta de nuevo.');
      } finally {
         setSaving(false);
      }
   };

   if (loading && !settings) {
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
         <SectionTitle
            title="Configuración General"
            subtitle="Actualiza la información del salón y redes sociales"
         />

         <form onSubmit={handleSubmit} className="space-y-6">
            {/* Información General */}
            <GlassCard className="space-y-6">
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-brand-pink/20 rounded-lg">
                     <SettingsIcon className="text-brand-pink" size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-white">Información del Negocio</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre del Salón
                     </label>
                     <input
                        type="text"
                        required
                        value={formData.appName || ''}
                        onChange={(e) => setFormData({ ...formData, appName: e.target.value })}
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                        placeholder="Almaiti Hair Studio"
                     />
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-gray-300 mb-2">
                        Teléfono WhatsApp
                     </label>
                     <input
                        type="text"
                        required
                        value={formData.phone || ''}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                        placeholder="5493876234866"
                     />
                     <p className="text-xs text-gray-500 mt-1">Sin espacios, incluye código de país</p>
                  </div>

                  <div className="md:col-span-2">
                     <label className="block text-sm font-medium text-gray-300 mb-2">
                        Dirección
                     </label>
                     <input
                        type="text"
                        required
                        value={formData.address || ''}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                        placeholder="Pasaje la tablada 159, Salta Capital"
                     />
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                     </label>
                     <input
                        type="email"
                        value={formData.email || ''}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                        placeholder="contacto@almaiti.com"
                     />
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-gray-300 mb-2">
                        Horarios
                     </label>
                     <input
                        type="text"
                        value={formData.horarios || ''}
                        onChange={(e) => setFormData({ ...formData, horarios: e.target.value })}
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                        placeholder="Lunes a Sábado: 9:00 - 22:00hs"
                     />
                  </div>
               </div>
            </GlassCard>

            {/* Redes Sociales */}
            <GlassCard className="space-y-6">
               <h2 className="text-xl font-bold text-white">Redes Sociales</h2>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <label className="block text-sm font-medium text-gray-300 mb-2">
                        Instagram URL
                     </label>
                     <input
                        type="url"
                        value={formData.instagram || ''}
                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                        placeholder="https://www.instagram.com/almaitii_aii/"
                     />
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-gray-300 mb-2">
                        Facebook URL
                     </label>
                     <input
                        type="url"
                        value={formData.facebook || ''}
                        onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                        placeholder="https://www.facebook.com/almaitistudio/"
                     />
                  </div>
               </div>
            </GlassCard>

            {/* Imagen de Perfil */}
            <GlassCard className="space-y-6">
               <h2 className="text-xl font-bold text-white">Imagen de Perfil (Sobre Mí)</h2>

               <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                     Ruta de la imagen
                  </label>
                  <input
                     type="text"
                     value={formData.profileImage || ''}
                     onChange={(e) => setFormData({ ...formData, profileImage: e.target.value })}
                     className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none transition-colors"
                     placeholder="/img/principal.jpg"
                  />
                  {formData.profileImage && (
                     <div className="mt-4">
                        <p className="text-xs text-gray-500 mb-2">Preview:</p>
                        <img
                           src={formData.profileImage}
                           alt="Profile Preview"
                           className="w-full max-w-md h-64 object-cover rounded-lg"
                           onError={(e) => {
                              (e.target as HTMLImageElement).src = '/img/principal.jpg';
                           }}
                        />
                     </div>
                  )}
               </div>
            </GlassCard>

            {/* Botón Guardar */}
            <div className="flex justify-end">
               <button
                  type="submit"
                  disabled={saving}
                  className="px-8 py-4 bg-brand-pink text-white rounded-lg hover:bg-brand-pinkDim transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 text-lg font-bold shadow-lg"
               >
                  {saving ? (
                     <>
                        <Loader className="animate-spin" size={24} />
                        Guardando...
                     </>
                  ) : (
                     <>
                        <Save size={24} />
                        Guardar Configuración
                     </>
                  )}
               </button>
            </div>
         </form>
      </div>
   );
};

export default AdminSettings;