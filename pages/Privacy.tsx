import React from 'react';
import { SectionTitle } from '../components/UI';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-black py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-brand-pink hover:text-white transition-colors mb-8">
                    <ArrowLeft size={20} /> Volver al inicio
                </Link>

                <SectionTitle title="Política de Privacidad" subtitle="Última actualización: Febrero 2026" />

                <div className="prose prose-invert prose-pink max-w-none space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Información que Recopilamos</h2>
                        <p>
                            En <strong>Almaiti Hair Studio</strong>, recopilamos información personal cuando usted:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Reserva una cita a través de WhatsApp o nuestro formulario</li>
                            <li>Se comunica con nosotros por redes sociales o correo electrónico</li>
                            <li>Completa formularios en nuestro sitio web</li>
                        </ul>
                        <p>
                            La información puede incluir: nombre, número de teléfono, correo electrónico, y preferencias de servicio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Uso de la Información</h2>
                        <p>Utilizamos su información personal para:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Gestionar y confirmar sus citas</li>
                            <li>Enviarle recordatorios de turnos programados</li>
                            <li>Responder a sus consultas y solicitudes</li>
                            <li>Mejorar nuestros servicios y experiencia del cliente</li>
                            <li>Enviarle promociones especiales (solo con su consentimiento)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Protección de Datos</h2>
                        <p>
                            Implementamos medidas de seguridad apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sus datos son almacenados de forma segura y solo el personal autorizado tiene acceso a ellos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Cookies y Tecnolog you Similares</h2>
                        <p>
                            Nuestro sitio web puede utilizar cookies para mejorar su experiencia de navegación. Las cookies son pequeños archivos que se almacenan en su dispositivo. Puede configurar su navegador para rechazar cookies, aunque esto puede limitar algunas funcionalidades del sitio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Compartir Información</h2>
                        <p>
                            <strong>No vendemos ni alquilamos su información personal a terceros.</strong> Podemos compartir información únicamente con:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Proveedores de servicios que nos ayudan a operar nuestro negocio (plataformas de reserva, servicios de mensajería)</li>
                            <li>Autoridades legales, si es requerido por ley</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Sus Derechos</h2>
                        <p>Usted tiene derecho a:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Acceder</strong> a la información personal que tenemos about usted</li>
                            <li><strong>Rectificar</strong> información incorrecta o desactualizada</li>
                            <li><strong>Eliminar</strong> su información personal (derecho al olvido)</li>
                            <li><strong>Oponerse</strong> al procesamiento de sus datos para marketing directo</li>
                            <li><strong>Portabilidad</strong> de sus datos en un formato estructurado</li>
                        </ul>
                        <p className="mt-4">
                            Para ejercer cualquiera de estos derechos, contáctenos a través de WhatsApp al +54 9 387 623-4866 o por Instagram <a href="https://www.instagram.com/almaitii_aii/" target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:underline">@almaitii_aii</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Menores de Edad</h2>
                        <p>
                            Nuestros servicios están dirigidos a personas mayores de 18 años. No recopilamos intencionalmente información de menores sin el consentimiento de sus padres o tutores.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Cambios a esta Política</h2>
                        <p>
                            Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en esta página. Le recomendamos revisar periódicamente esta política.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Contacto</h2>
                        <p>
                            Si tiene preguntas o inquietudes sobre esta Política de Privacidad, puede contactarnos:
                        </p>
                        <ul className="list-none space-y-2 mt-4">
                            <li><strong>WhatsApp:</strong> <a href="https://wa.me/5493876234866" target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:underline">+54 9 387 623-4866</a></li>
                            <li><strong>Instagram:</strong> <a href="https://www.instagram.com/almaitii_aii/" target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:underline">@almaitii_aii</a></li>
                            <li><strong>Dirección:</strong> Pasaje la tablada 159, Salta Capital, Argentina</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
