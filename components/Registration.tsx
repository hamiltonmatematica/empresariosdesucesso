import React, { useState } from 'react';
import { Button } from './Button';
import { CheckCircle2, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { RegistrationModal } from './RegistrationModal';
import { CITIES_FULL, CITY_PRICING, getCityTier } from '../constants';

export const Registration: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('Montes Claros');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<'standard' | 'discounted'>('discounted');

  const handleOpenModal = (ticketType: 'standard' | 'discounted') => {
    setSelectedTicket(ticketType);
    setIsModalOpen(true);
  };

  const currentTier = getCityTier(selectedCity);
  const tierPricing = CITY_PRICING[currentTier];

  return (
    <section id="inscricao" className="py-20 relative overflow-hidden bg-brand-dark">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/40 to-brand-dark"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-brand-neon/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-brand-neon/30 rounded-3xl p-6 md:p-12 text-center max-w-5xl mx-auto shadow-[0_0_50px_rgba(0,209,255,0.1)]">

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Escolha sua <span className="text-brand-neon drop-shadow-[0_0_10px_rgba(0,209,255,0.5)]">Experiência</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Selecione a sua cidade para visualizar os valores e garantir seu ingresso
          </p>

          {/* City Selection Pills */}
          <div className="mb-10 max-w-3xl mx-auto">
            <label className="block text-xs uppercase tracking-widest text-brand-neon font-semibold mb-3 flex items-center justify-center gap-1.5">
              <MapPin size={16} /> Selecione a cidade do evento:
            </label>
            <div className="flex flex-wrap justify-center gap-2">
              {CITIES_FULL.map((city) => {
                const isSelected = selectedCity === city.name;
                return (
                  <button
                    key={city.name}
                    type="button"
                    onClick={() => setSelectedCity(city.name)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 border ${
                      isSelected
                        ? 'bg-brand-neon text-brand-dark border-brand-neon shadow-[0_0_15px_rgba(0,209,255,0.4)] scale-105'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:border-brand-neon/50 hover:text-white'
                    }`}
                  >
                    <span>{city.name}</span>
                    {city.date && (
                      <span className={`text-xs px-1.5 py-0.5 rounded ${isSelected ? 'bg-brand-dark/20 text-brand-dark font-bold' : 'bg-white/10 text-gray-400'}`}>
                        {city.date}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            
            {currentTier === 'regional' && (
              <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold animate-fade-in">
                <Sparkles size={14} /> Valores promocionais aplicados para {selectedCity}
              </div>
            )}
          </div>

          {/* Ticket Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10 items-stretch">

            {/* Option 1: Público Geral */}
            <div className="bg-white/5 backdrop-blur-md border border-brand-neon/30 hover:border-brand-neon rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_0_25px_rgba(0,209,255,0.05)]">
              <div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-white/10 text-brand-neon text-xs font-bold rounded-full mb-3 uppercase tracking-wider border border-white/10">
                    PÚBLICO GERAL
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">Imersão Completa</h3>
                  <p className="text-gray-300 text-xs mb-4">Acesso total à programação do evento em {selectedCity}</p>
                </div>

                <ul className="space-y-3 mb-6 text-left">
                  <li className="flex items-start gap-2 text-white text-sm font-medium">
                    <CheckCircle2 size={16} className="text-brand-neon mt-0.5 flex-shrink-0" />
                    <span>Imersão presencial completa ({selectedCity})</span>
                  </li>
                  <li className="flex items-start gap-2 text-white text-sm font-medium">
                    <CheckCircle2 size={16} className="text-brand-neon mt-0.5 flex-shrink-0" />
                    <span>Mentorias online pós-evento</span>
                  </li>
                  <li className="flex items-start gap-2 text-white text-sm font-medium">
                    <CheckCircle2 size={16} className="text-brand-neon mt-0.5 flex-shrink-0" />
                    <span>03 ingressos para as Confrarias Credinor na Venda do Fred no 2º semestre</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="mb-6 pt-4 border-t border-white/10 text-center">
                  <p className="text-3xl font-extrabold text-white mb-0.5">
                    {tierPricing.standard.pix.formatted}
                  </p>
                  <p className="text-xs text-emerald-400 font-semibold mb-1">
                    {tierPricing.standard.pix.discountText}
                  </p>
                  <p className="text-xs text-gray-400">
                    ou {tierPricing.standard.card.formatted} {tierPricing.standard.card.installments}
                  </p>
                </div>

                <Button
                  onClick={() => handleOpenModal('standard')}
                  className="w-full"
                >
                  GARANTIR INGRESSO
                </Button>
              </div>
            </div>

            {/* Option 2: Convênios ACE/CDL e Credinor */}
            <div className="bg-white/5 backdrop-blur-md border border-brand-neon/30 hover:border-brand-neon rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_0_25px_rgba(0,209,255,0.05)]">
              <div>
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-neon/15 text-brand-neon text-xs font-bold rounded-full mb-3 uppercase tracking-wider border border-brand-neon/20">
                    <ShieldCheck size={14} /> ACE/CDL & CREDINOR/SICOOB
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">Imersão Convênio</h3>
                  <p className="text-gray-300 text-xs mb-4">
                    Para associados ACE/CDL e correntistas Credinor/Sicoob
                  </p>
                </div>

                <ul className="space-y-3 mb-6 text-left">
                  <li className="flex items-start gap-2 text-white text-sm font-medium">
                    <CheckCircle2 size={16} className="text-brand-neon mt-0.5 flex-shrink-0" />
                    <span>Todos os benefícios da Imersão Completa</span>
                  </li>
                  <li className="flex items-start gap-2 text-white text-sm font-medium">
                    <CheckCircle2 size={16} className="text-brand-neon mt-0.5 flex-shrink-0" />
                    <span>Desconto exclusivo para cooperados e associados</span>
                  </li>
                  <li className="flex items-start gap-2 text-white text-sm font-medium">
                    <CheckCircle2 size={16} className="text-brand-neon mt-0.5 flex-shrink-0" />
                    <span>Validação simples de conta bancária ou associado</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="mb-6 pt-4 border-t border-white/10 text-center">
                  <div className="flex items-baseline justify-center gap-2 mb-0.5">
                    <span className="text-sm line-through text-gray-400">
                      {tierPricing.standard.pix.formatted}
                    </span>
                    <p className="text-3xl font-extrabold text-white">
                      {tierPricing.discounted.pix.formatted}
                    </p>
                  </div>
                  <p className="text-xs text-emerald-400 font-semibold mb-1">
                    {tierPricing.discounted.pix.discountText}
                  </p>
                  <p className="text-xs text-gray-400">
                    ou {tierPricing.discounted.card.formatted} {tierPricing.discounted.card.installments}
                  </p>
                </div>

                <Button
                  onClick={() => handleOpenModal('discounted')}
                  className="w-full"
                >
                  GARANTIR COM DESCONTO
                </Button>
              </div>
            </div>

          </div>

          <p className="text-xs md:text-sm text-gray-400">
            * Vagas limitadas por cidade. Garanta seu ingresso com segurança no Asaas.
          </p>
        </div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ticketType={selectedTicket}
        initialCity={selectedCity}
      />
    </section>
  );
};