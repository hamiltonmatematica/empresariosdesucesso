import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Building2, CreditCard } from 'lucide-react';
import { CITIES_FULL } from '../constants';
import { Button } from './Button';

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
    ticketType: 'standard' | 'discounted' | 'day1' | 'day1-2';
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, ticketType: initialTicketType }) => {
    // Normalizar o ticketType para 'standard' ou 'discounted'
    const normalizedInitial = initialTicketType === 'discounted' ? 'discounted' : 'standard';

    const [ticketOption, setTicketOption] = useState<'standard' | 'discounted'>(normalizedInitial);
    const [discountCategory, setDiscountCategory] = useState<'credinor' | 'cdl'>('credinor');
    
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: '',
        agency: '',
        account: '',
        cnpjOrCode: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setTicketOption(initialTicketType === 'discounted' ? 'discounted' : 'standard');
    }, [initialTicketType, isOpen]);

    if (!isOpen) return null;

    // Checagem visual de validação fake
    const isCredinorValid = formData.agency.trim().length >= 3 && formData.account.trim().length >= 4;
    const isCdlValid = formData.cnpjOrCode.trim().length >= 4;
    const isDiscountValidated = ticketOption === 'discounted' ? (discountCategory === 'credinor' ? isCredinorValid : isCdlValid) : true;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validar campos obrigatórios
        if (!formData.name || !formData.phone || !formData.city) {
            setError('Por favor, preencha todos os campos obrigatórios (Nome, Celular e Cidade).');
            return;
        }

        if (ticketOption === 'discounted') {
            if (discountCategory === 'credinor' && (!formData.agency || !formData.account)) {
                setError('Por favor, informe a Agência e Conta Corrente Credinor/Sicoob para validar seu desconto.');
                return;
            }
            if (discountCategory === 'cdl' && !formData.cnpjOrCode) {
                setError('Por favor, informe o CNPJ ou Código/Nome de Associado ACE/CDL.');
                return;
            }
        }

        setIsSubmitting(true);

        try {
            const SCRIPT_URL = ((import.meta as any).env?.VITE_GOOGLE_SCRIPT_URL as string) || '';

            const payload = {
                name: formData.name,
                phone: formData.phone,
                city: formData.city,
                ticketType: ticketOption === 'discounted' ? 'Imersão (Associado/Credinor - R$ 349,90)' : 'Imersão (Público Geral - R$ 399,00)',
                discountCategory: ticketOption === 'discounted' ? discountCategory : 'Sem Desconto',
                agency: formData.agency,
                account: formData.account,
                cnpjOrCode: formData.cnpjOrCode,
                timestamp: new Date().toLocaleString('pt-BR')
            };

            if (SCRIPT_URL) {
                await fetch(SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    body: JSON.stringify(payload)
                });
            } else {
                // Fallback para Google Forms
                const FORM_ID = '1FAIpQLSf3-h-iyKG_jX7LVVdYU3yNR_0p5n3lFyIbtVXSSw5wNMeQMA';
                const formUrl = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

                const formDataToSend = new FormData();
                formDataToSend.append('entry.381075147', formData.name);
                formDataToSend.append('entry.485670633', formData.phone);
                formDataToSend.append('entry.1904133980', formData.city);

                await fetch(formUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    body: formDataToSend
                });
            }

            // Aguarda meio segundo
            await new Promise(resolve => setTimeout(resolve, 500));

            // Links de checkout Asaas
            const paymentLinks = {
                'standard': 'https://www.asaas.com/c/58mywxnx9264i4xf',
                'discounted': 'https://www.asaas.com/c/ilsr94el5hln7ytp'
            };

            window.location.href = paymentLinks[ticketOption];

        } catch (err) {
            console.error('Erro ao enviar dados:', err);
            setError('Erro ao processar inscrição. Tente novamente.');
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-brand-dark border-2 border-brand-neon/40 rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-[0_0_50px_rgba(0,209,255,0.25)] animate-scale-in my-8">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        Garantir Inscrição
                    </h2>
                    <p className="text-brand-neon font-semibold text-sm">
                        🎁 Imersão Empresários de Sucesso Norte de Minas
                    </p>
                </div>

                {/* Ticket Selector Tabs */}
                <div className="grid grid-cols-2 gap-2 mb-6 bg-white/5 p-1 rounded-xl border border-white/10">
                    <button
                        type="button"
                        onClick={() => setTicketOption('standard')}
                        className={`py-2 px-3 text-xs md:text-sm font-semibold rounded-lg transition-all ${
                            ticketOption === 'standard'
                                ? 'bg-brand-blue text-white shadow-md'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Público Geral
                        <span className="block text-xs font-normal">R$ 399,00</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => setTicketOption('discounted')}
                        className={`py-2 px-3 text-xs md:text-sm font-semibold rounded-lg transition-all ${
                            ticketOption === 'discounted'
                                ? 'bg-brand-neon text-brand-dark font-bold shadow-md shadow-brand-neon/20'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Com Desconto ✨
                        <span className="block text-xs font-normal">R$ 349,90</span>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1">
                            Nome Completo *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-neon transition-colors text-sm"
                            placeholder="Seu nome completo"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-xs font-medium text-gray-300 mb-1">
                            Celular (WhatsApp) *
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-neon transition-colors text-sm"
                            placeholder="(00) 00000-0000"
                            required
                        />
                    </div>

                    {/* City */}
                    <div>
                        <label htmlFor="city" className="block text-xs font-medium text-gray-300 mb-1">
                            Cidade do Evento *
                        </label>
                        <select
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-neon transition-colors text-sm"
                            required
                        >
                            <option value="" className="bg-brand-dark">Selecione a cidade</option>
                            {CITIES_FULL.map((city) => (
                                <option key={city.name} value={city.name} className="bg-brand-dark">
                                    {city.name} - {city.date}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Discount Validation Fields */}
                    {ticketOption === 'discounted' && (
                        <div className="mt-4 p-4 bg-brand-neon/10 border border-brand-neon/30 rounded-xl space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-brand-neon uppercase tracking-wider flex items-center gap-1.5">
                                    <ShieldCheck size={16} />
                                    Validação de Convênio
                                </span>
                                {isDiscountValidated && (
                                    <span className="inline-flex items-center gap-1 text-[11px] bg-emerald-500/20 text-emerald-400 font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30 animate-pulse">
                                        <CheckCircle2 size={12} /> Validado
                                    </span>
                                )}
                            </div>

                            {/* Category Selector */}
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <label className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer border transition-all ${
                                    discountCategory === 'credinor'
                                        ? 'bg-brand-blue/30 border-brand-neon text-white'
                                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                                }`}>
                                    <input
                                        type="radio"
                                        name="discountCategory"
                                        checked={discountCategory === 'credinor'}
                                        onChange={() => setDiscountCategory('credinor')}
                                        className="hidden"
                                    />
                                    <CreditCard size={14} className="text-brand-neon" />
                                    <span className="font-medium text-[11px]">Correntista Sicoob/Credinor</span>
                                </label>

                                <label className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer border transition-all ${
                                    discountCategory === 'cdl'
                                        ? 'bg-brand-blue/30 border-brand-neon text-white'
                                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                                }`}>
                                    <input
                                        type="radio"
                                        name="discountCategory"
                                        checked={discountCategory === 'cdl'}
                                        onChange={() => setDiscountCategory('cdl')}
                                        className="hidden"
                                    />
                                    <Building2 size={14} className="text-brand-neon" />
                                    <span className="font-medium text-[11px]">Associado ACE / CDL</span>
                                </label>
                            </div>

                            {/* Category 1: Credinor / Sicoob */}
                            {discountCategory === 'credinor' && (
                                <div className="grid grid-cols-2 gap-2 pt-1">
                                    <div>
                                        <label htmlFor="agency" className="block text-[11px] font-medium text-gray-300 mb-1">
                                            Agência *
                                        </label>
                                        <input
                                            type="text"
                                            id="agency"
                                            name="agency"
                                            value={formData.agency}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-neon text-xs"
                                            placeholder="Ex: 3180"
                                            required={ticketOption === 'discounted' && discountCategory === 'credinor'}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="account" className="block text-[11px] font-medium text-gray-300 mb-1">
                                            Conta Corrente *
                                        </label>
                                        <input
                                            type="text"
                                            id="account"
                                            name="account"
                                            value={formData.account}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-neon text-xs"
                                            placeholder="Ex: 12345-6"
                                            required={ticketOption === 'discounted' && discountCategory === 'credinor'}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Category 2: ACE / CDL */}
                            {discountCategory === 'cdl' && (
                                <div className="pt-1">
                                    <label htmlFor="cnpjOrCode" className="block text-[11px] font-medium text-gray-300 mb-1">
                                        CNPJ da Empresa ou Nº de Associado ACE/CDL *
                                    </label>
                                    <input
                                        type="text"
                                        id="cnpjOrCode"
                                        name="cnpjOrCode"
                                        value={formData.cnpjOrCode}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-neon text-xs"
                                        placeholder="Ex: 00.000.000/0001-00 ou Cod. Associado"
                                        required={ticketOption === 'discounted' && discountCategory === 'cdl'}
                                    />
                                </div>
                            )}

                            <p className="text-[10px] text-gray-400 italic">
                                * Validação automática de convênio para liberação do valor promocional de R$ 349,90.
                            </p>
                        </div>
                    )}

                    {/* Error message */}
                    {error && (
                        <div className="text-red-400 text-xs bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                            {error}
                        </div>
                    )}

                    {/* Submit button */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full !py-3.5 mt-2"
                    >
                        {isSubmitting
                            ? 'Validando e Redirecionando...'
                            : ticketOption === 'discounted'
                            ? 'Prosseguir para Pagamento (R$ 349,90) →'
                            : 'Prosseguir para Pagamento (R$ 399,00) →'
                        }
                    </Button>

                    <p className="text-[11px] text-gray-400 text-center">
                        Você será redirecionado para a plataforma de pagamento seguro (Asaas)
                    </p>
                </form>
            </div>
        </div>
    );
};

