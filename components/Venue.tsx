import React from 'react';
import { MapPin } from 'lucide-react';

export const Venue: React.FC = () => {
    return (
        <section id="local" className="py-20 relative overflow-hidden bg-gradient-to-b from-brand-dark to-brand-deep">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-brand-neon/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 text-center">
                        Local do <span className="text-brand-neon drop-shadow-[0_0_10px_rgba(211,225,51,0.5)]">Evento</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 mb-12 text-center">
                        Confira onde acontecerá cada dia do evento em Montes Claros
                    </p>

                    {/* Venue Cards */}
                    <div className="space-y-6">
                        {/* Day 1 */}
                        <div className="bg-white/5 backdrop-blur-xl border border-brand-neon/30 rounded-2xl p-6 md:p-8 hover:border-brand-neon/50 transition-all duration-300 shadow-[0_0_30px_rgba(211,225,51,0.1)]">
                            <div className="flex items-start gap-4">
                                <div className="bg-brand-neon/20 p-3 rounded-xl">
                                    <MapPin className="text-brand-neon" size={24} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="inline-block px-3 py-1 bg-brand-deep/50 text-brand-deep text-xs font-bold rounded-full">
                                            DIA 01
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Auditório da Sociedade Rural de Montes Claros
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-3">
                                        Parque de Exposições João Alencar Athayde
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        <strong>Endereço:</strong> Avenida Geraldo Athayde, 1373 – Bairro São João, CEP 39400-292, Montes Claros – MG
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Day 2 */}
                        <div className="bg-white/5 backdrop-blur-xl border border-brand-neon/30 rounded-2xl p-6 md:p-8 hover:border-brand-neon/50 transition-all duration-300 shadow-[0_0_30px_rgba(211,225,51,0.1)]">
                            <div className="flex items-start gap-4">
                                <div className="bg-brand-neon/20 p-3 rounded-xl">
                                    <MapPin className="text-brand-neon" size={24} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="inline-block px-3 py-1 bg-brand-neon/20 text-brand-neon text-xs font-bold rounded-full">
                                            DIA 02
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Venda do Fred
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        <strong>Endereço:</strong> Rua Deputado Antônio Pimenta, 489, bairro Jardim São Luiz, CEP 39401-054, Montes Claros – MG
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
