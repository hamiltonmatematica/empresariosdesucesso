import { Speaker, AgendaItem, City, Benefit } from './types';
import { TrendingUp, Users, Lightbulb, MapPin, Target, ShieldCheck } from 'lucide-react';

export const SPEAKERS: Speaker[] = [
  {
    name: "Fred Rocha",
    role: "Vendas e Inovação",
    description: "Pesquisador, Consultor e Palestrante – Especialista em Varejo e Consumo. Reconhecido quatro vezes como Profissional de Marketing do Brasil, Fred Rocha é hoje o especialista em varejo mais contratado do país. Com mais de 30 anos de experiência e 19 negócios fundados em diferentes segmentos, ele já percorreu 33 países estudando consumo, inovação e comportamento de compra no mundo real. Pioneiro do e-commerce no Brasil, Fred é autor dos livros 'ManUAU do Novo Varejista' e 'O Novo Jeito de Vender' (Editora Gente), este último best-seller em negócios no Brasil. É também apresentador do programa Empreender, transmitido pela TV Globo em Minas Gerais, São Paulo, Rio de Janeiro, Espírito Santo, Mato Grosso e Mato Grosso do Sul — e disponível no Globoplay. Considerado por muitos como o mais inovador conferencista brasileiro, Fred se destaca por unir conhecimento técnico, visão prática e uma linguagem acessível, capaz de provocar reflexões profundas e transformações reais em negócios de todos os portes.",
    image: "/fred.png"
  },
  {
    name: "Diego Suzano",
    role: "Estratégia e Gestão",
    description: "Administrador pela UFMG, Mestre em Finanças e Estratégias Empresariais pela UNIMONTES, Especialista em PPPs e Concessões pela Fundação Escola de Sociologia e Política de São Paulo. Possui Especialização em Infraestrutura pelo HMT (Tesouro Britânico) e em PPPs pela LSE (Escola de Economia de Londres). CEO da Holding Terranova, empresa que atua Incorporação de Cemitérios, Crematorios Humanos e PET, além de ser idealizador da primeira e única franquia de cemitérios do mundo. No braço empresarial, é CEO da T3 Consultoria e T3 HUB, tendo mais de 07 anos de atuação pelo SEBRAE. Palestrante e treinador de alto impacto, suas palestras e treinamentos alcançaram palcos como o G4 Educação, FEDERAMINAS, Inovare, UFMG, dentre outros.",
    image: "/Diego.jpg"
  }
];

export const AGENDA_DAY_1: AgendaItem[] = [
  {
    time: "19h00",
    title: "COMO VENDER MAIS EM UM NOVO CENÁRIO DE CONSUMO",
    speaker: "Diego e Fred",
    description: "É o time entendendo o novo cenário do consumo, como vender melhor, como usar tecnologia, redes sociais e postura para se relacionar com o cliente de hoje."
  },
  {
    time: "20h30",
    title: "Sessão de Autógrafos e Networking",
    description: "Momento exclusivo para fotos, autógrafos e conexão com o palestrante."
  }
];

export const AGENDA_DAY_2: AgendaItem[] = [
  {
    time: "08h00 – 09h00",
    title: "Café da Manhã e Networking",
    description: "Recepção dos participantes e espaço para conexões qualificadas."
  },
  {
    time: "09h00 – 09h30",
    title: "Abertura Oficial",
    description: "Apresentação dos patrocinadores e alinhamento da agenda."
  },
  {
    time: "09h30 – 10h30",
    title: "Cenário Político e Econômico para 2026",
    speaker: "Diego Suzano",
    description: "Desafios e Oportunidades. Uma visão objetiva sobre os fatores que irão moldar o ambiente de negócios."
  },
  {
    time: "10h30 – 11h30",
    title: "O Novo Jeito De Vender",
    speaker: "Fred Rocha",
    description: "O novo jeito de vender muito Além da Inteligência Artificial - Um novo mundo dos negócios"
  },
  {
    time: "11h30 – 12h30",
    title: "Boarding de Conselho",
    speaker: "Diego e Fred",
    description: "Espaço de discussão prática e construção de insights facilitado pelos mentores."
  },
  {
    time: "14h00 – 15h00",
    title: "Rodada de Negócios",
    description: "Sessão estruturada para geração de oportunidades reais entre os participantes."
  },
  {
    time: "15h00 – 16h00",
    title: "Processos, Finanças e Gestão de Tempo",
    speaker: "Diego Suzano",
    description: "O Diferencial Competitivo da Alta Performance em 2026."
  },
  {
    time: "16h00 – 17h00",
    title: "Planejamento Estratégico de Vendas e Mkt",
    speaker: "Fred Rocha",
    description: "Preparando sua empresa para o próximo ciclo."
  },
  {
    time: "17h00 – 17h30",
    title: "Dinâmica de Mentoria: Pinga-Fogo",
    description: "Respostas diretas, debates aprofundados e orientações personalizadas."
  },
  {
    time: "17h30",
    title: "Encerramento",
  },
];

export const CITIES: City[] = [
  { name: "Montes Claros", date: "09 de Fevereiro" },
  { name: "Brasília de Minas", date: "04 de Março" },
  { name: "Rio Pardo de Minas", date: "16 e 17 de Março" },
  { name: "Taiobeiras", date: "18 e 19 de Março" },
  { name: "Bocaiuva", date: "26 e 27 de Março" },
  { name: "Coração de Jesus", date: "Data a confirmar" },
  { name: "Corinto", date: "Data a confirmar" },
  { name: "Guanambi", date: "Data a confirmar" }
];

export const CITIES_FULL: City[] = [
  { name: "Montes Claros", date: "09 e 10 de Fevereiro" },
  { name: "Brasília de Minas", date: "04 e 05 de Março" },
  { name: "Rio Pardo de Minas", date: "16 e 17 de Março" },
  { name: "Taiobeiras", date: "18 e 19 de Março" },
  { name: "Bocaiuva", date: "26 e 27 de Março" },
  { name: "Coração de Jesus", date: "Data a confirmar" },
  { name: "Corinto", date: "Data a confirmar" },
  { name: "Guanambi", date: "Data a confirmar" }
];

export const BENEFITS: Benefit[] = [
  { title: "Crescer acima da média", icon: TrendingUp },
  { title: "Construir visão de futuro", icon: Lightbulb },
  { title: "Tomar decisões antes da concorrência", icon: Target },
  { title: "Redes de relacionamento fortes", icon: Users },
  { title: "Elevar performance e gestão", icon: ShieldCheck },
  { title: "Estratégias locais", icon: MapPin },
];
