import React from 'react';
import { AGENDA_DAY_2 } from '../constants';
import { Clock } from 'lucide-react';

export const Agenda: React.FC = () => {
    return (
        <section id="agenda" className="py-20 bg-brand-dark/50 relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-brand-neon font-bold tracking-widest uppercase text-sm mb-2 drop-shadow-[0_0_5px_rgba(0,209,255,0.5)]">Cronograma Oficial</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">
                        Imersão nas Cidades
                    </h3>
                </div>

                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Imersão */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <h4 className="text-3xl font-bold text-yellow-400 font-serif drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">IMERSÃO <span className="text-white text-lg md:text-2xl">: Voltado para empresários</span></h4>
                        </div>
                        <div className="relative border-l-2 border-brand-neon/20 ml-4 md:ml-0 space-y-8 md:space-y-12">
                            {AGENDA_DAY_2.map((item, index) => (
                                <div key={index} className="relative flex flex-col md:flex-row gap-4 md:gap-8 group">
                                    <div className="absolute -left-[9px] top-0 md:top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-brand-neon group-hover:bg-brand-neon group-hover:shadow-[0_0_10px_rgba(0,209,255,0.8)] transition-all duration-300"></div>
                                    <div className="md:w-32 flex-shrink-0 pt-1 md:text-right pl-6 md:pl-0">
                                        <span className="inline-flex items-center gap-2 text-brand-neon font-bold font-mono text-lg group-hover:text-white transition-colors">
                                            <Clock size={16} />
                                            {item.time.split(' – ')[0]}
                                        </span>
                                    </div>
                                    <div className="flex-1 bg-white/[0.03] backdrop-blur-sm p-6 rounded-lg border border-white/10 group-hover:border-brand-neon/50 transition-all duration-300 ml-6 md:ml-0 group-hover:shadow-[0_0_20px_rgba(0,209,255,0.05)]">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                            <h4 className="text-xl font-bold text-white group-hover:text-brand-neon transition-colors">{item.title}</h4>
                                            {item.speaker && (
                                                <span className="text-xs px-3 py-1 bg-brand-neon/10 text-brand-neon border border-brand-neon/20 rounded-full w-fit whitespace-nowrap">
                                                    com {item.speaker}
                                                </span>
                                            )}
                                        </div>
                                        {item.description && (
                                            <p className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors">{item.description}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};