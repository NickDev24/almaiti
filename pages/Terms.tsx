import React from 'react';
import { SectionTitle } from '../components/UI';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-black py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-brand-pink hover:text-white transition-colors mb-8">
                    <ArrowLeft size={20} /> Volver al inicio
                </Link>

                <SectionTitle title="Condiciones del Servicio" subtitle="Última actualización: Febrero 2026" />

                <div className="prose prose-invert prose-pink max-w-none space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
                        <p>
                            Al reservar una cita o utilizar los servicios de <strong>Almaiti Hair Studio</strong>, usted acepta estos Términos y Condiciones en su totalidad. Si no está de acuerdo con algún aspecto de estos términos, por favor no utilice nuestros servicios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Reservas y Citas</h2>
                        <p><strong>Política de Reservas:</strong></p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Las citas deben programarse con anticipación a través de WhatsApp o nuestro sistema de reservas</li>
                            <li>Trabajamos exclusivamente con turnos programados, no atendemos por orden de llegada</li>
                            <li>Al reservar, se requiere confirmación 24 horas antes del turno</li>
                            <li>Las citas no confirmadas pueden ser liberadas para otros clientes</li>
                        </ul>

                        <p className="mt-4"><strong>Política de Cancelaciones:</strong></p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Las cancelaciones deben realizarse con al menos <strong>24 horas de anticipación</strong></li>
                            <li>Cancelaciones tardías (menos de 24h) o inasistencias pueden resultar en:
                                <ul className="list-circle pl-6 mt-2">
                                    <li>Solicitud de seña para futuras reservas</li>
                                    <li>Limitación en la disponibilidad de horarios premium</li>
                                </ul>
                            </li>
                            <li>Comprendemos emergencias; contáctenos lo antes posible</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Servicios Ofrecidos</h2>
                        <p>
                            Ofrecemos una variedad de servicios capilares profesionales incluyendo colorimetría, tratamientos de recuperación, cortes, peinados y alisados. Los tiempos estimados y precios son aproximados y pueden variar según:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>El estado actual de su cabello</li>
                            <li>La longitud y densidad del cabello</li>
                            <li>La complejidad del servicio solicitado</li>
                            <li>Tratamientos adicionales recomendados durante la consulta</li>
                        </ul>
                        <p className="mt-4">
                            <strong>Diagnóstico Capilar:</strong> Realizamos una consulta de diagnóstico sin cargo al inicio de cada servicio para evaluar el estado de su cabello y personalizar el tratamiento.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Precios y Pagos</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Los precios publicados son aproximados y pueden ajustarse según el diagnóstico</li>
                            <li>El precio final se comunica antes de iniciar el servicio</li>
                            <li>Aceptamos efectivo y transferencias bancarias</li>
                            <li>Los productos utilizados son de calidad premium (importados/profesionales)</li>
                            <li>Los precios pueden variar con el tiempo sin previo aviso</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Salud y Seguridad del Cabello</h2>
                        <p>
                            En Almaiti priorizamos la salud capilar sobre cualquier tendencia. Esto significa:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Consulta Honesta:</strong> Si consideramos que un servicio podría dañar severamente su cabello, se lo informaremos y ofreceremos alternativas</li>
                            <li><strong>Procesos Gradual:</strong> Algunos resultados (ej. rubio platino desde cabello oscuro) pueden requerir múltiples sesiones para mantener la integridad capilar</li>
                            <li><strong>Pruebas de Sensibilidad:</strong> Para ciertos tratamientos químicos, podemos solicitar una prueba de sensibilidad 48h antes del servicio</li>
                            <li><strong>Cuidado Posterior:</strong> Proporcionamos instrucciones de cuidado post-servicio que son fundamentales para la durabilidad y salud de su tratamiento</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Responsabilidades del Cliente</h2>
                        <p>El cliente se compromete a:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Informar de alergias, sensibilidades o tratamientos médicos relevantes</li>
                            <li>Comunicar cualquier tratamiento químico previo (decoloración, alisados, etc.)</li>
                            <li>Llegar puntualmente a la cita (demoras mayores a 15 minutos pueden resultar en reprogramación)</li>
                            <li>Seguir las instrucciones de cuidado posterior al servicio</li>
                            <li>Utilizar productos recomendados para el mantenimiento en casa</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Limitación de Responsabilidad</h2>
                        <p>
                            Almaiti Hair Studio no se hace responsable por:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Resultados insatisfactorios derivados de información falsa u omitida por el cliente</li>
                            <li>Daños causados por no seguir las indicaciones de cuidado posterior</li>
                            <li>Reacciones alérgicas no reveladas en la consulta inicial</li>
                            <li>Deterioro del resultado por uso de productos no profesionales en casa</li>
                        </ul>
                        <p className="mt-4">
                            <strong>Garantía de Satisfacción:</strong> Si no está conforme con el resultado, contáctenos dentro de las 48 horas posteriores al servicio para evaluar ajustes sin costo adicional (siempre que el problema no sea causado por las razones mencionadas arriba).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Fotografías y Redes Sociales</h2>
                        <p>
                            Almaiti puede solicitar permiso para fotografiar el resultado de su servicio con fines de portafolio y redes sociales. La participación es completamente voluntaria. Si acepta:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Puede elegir si su rostro aparece o solo el cabello</li>
                            <li>Las imágenes pueden ser utilizadas en nuestro sitio web, Instagram y Facebook</li>
                            <li>Puede solicitar la eliminación de su imagen en cualquier momento</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Propiedad Intelectual</h2>
                        <p>
                            Todo el contenido de este sitio web (textos, imágenes, logotipos, diseños) es propiedad de Almaiti Hair Studio y está protegido por derechos de autor. No se permite su reproducción sin autorización expresa.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. Modificaciones a los Términos</h2>
                        <p>
                            Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en este sitio. El uso continuado de nuestros servicios constituye la aceptación de los términos modificados.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">11. Ley Aplicable y Jurisdicción</h2>
                        <p>
                            Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa será resuelta en los tribunales de Salta Capital, Argentina.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">12. Contacto</h2>
                        <p>
                            Para consultas sobre estos Términos y Condiciones:
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

export default Terms;
