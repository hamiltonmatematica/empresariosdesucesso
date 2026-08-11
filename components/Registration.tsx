import React, { useState } from 'react';
import { Button } from './Button';
import { CheckCircle2, ShieldCheck, Tag } from 'lucide-react';
import { RegistrationModal } from './RegistrationModal';

export const Registration: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<'standard' | 'discounted'>('discounted');

  const handleOpenModal = (ticketType: 'standard' | 'discounted') => {
    setSelectedTicket(ticketType);
    setIsModalOpen(true);
  };

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

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Selecione a opção desejada para participar da Imersão Empresários de Sucesso
          </p>

          {/* Ticket Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10 items-stretch">

            {/* Option 1: Público Geral (R$ 399,00) */}
            <div className="bg-white/5 backdrop-blur-md border border-brand-neon/30 hover:border-brand-neon rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_0_25px_rgba(0,209,255,0.05)]">
              <div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-white/10 text-brand-neon text-xs font-bold rounded-full mb-3 uppercase tracking-wider border border-white/10">
                    PÚBLICO GERAL
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">Imersão Completa</h3>
                  <p className="text-gray-300 text-xs mb-4">Acesso total à programação do evento</p>
                </div>

                <ul className="space-y-3 mb-6 text-left">
                  <li className="flex items-start gap-2 text-white text-sm font-medium">
                    <CheckCircle2 size={16} className="text-brand-neon mt-0.5 flex-shrink-0" />
                    <span>Imersão presencial completa</span>
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
                  <p className="text-3xl font-extrabold text-white mb-1">R$ 399,00</p>
                  <p className="text-xs text-brand-neon font-semibold">EM ATÉ 5X SEM JUROS</p>
                </div>

                <Button
                  onClick={() => handleOpenModal('standard')}
                  className="w-full"
                >
                  GARANTIR INGRESSO
                </Button>
              </div>
            </div>

            {/* Option 2: Convênios ACE/CDL e Credinor (R$ 349,90) */}
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
                    <span>Desconto exclusivo de R$ 49,10 garantido</span>
                  </li>
                  <li className="flex items-start gap-2 text-white text-sm font-medium">
                    <CheckCircle2 size={16} className="text-brand-neon mt-0.5 flex-shrink-0" />
                    <span>Validação simples de conta bancária ou associado</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="mb-6 pt-4 border-t border-white/10 text-center">
                  <div className="flex items-baseline justify-center gap-2 mb-1">
                    <span className="text-sm line-through text-gray-400">R$ 399,00</span>
                    <p className="text-3xl font-extrabold text-white">R$ 349,90</p>
                  </div>
                  <p className="text-xs text-brand-neon font-semibold">EM ATÉ 5X SEM JUROS COM DESCONTO</p>
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
      />
    </section>
  );
};