// src/data/plans.js
export const plans = [
  {
    id: 'basic',
    name: 'Básico',
    price: 'R$ 79,90',
    period: '/mês',
    description: 'Ideal para quem busca manter o carro limpo no dia a dia.',
    features: [
      '2 lavagens externas por mês',
      'Limpeza de vidros e espelhos',
      'Aplicação de pretinho nos pneus',
      'Desconto de 10% em serviços extras',
    ],
    popular: false,
    ctaText: 'Escolher Básico',
  },
  {
    id: 'plus',
    name: 'Plus',
    price: 'R$ 149,90',
    period: '/mês',
    description: 'O melhor custo-benefício para quem ama seu veículo impecável.',
    features: [
      '4 lavagens externas por mês',
      '1 lavagem completa com cera por mês',
      'Higienização interna básica',
      'Agendamento prioritário no app',
      'Desconto de 20% em serviços extras',
    ],
    popular: true,
    ctaText: 'Escolher Plus',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'R$ 249,90',
    period: '/mês',
    description: 'Cuidado total e ilimitado para quem exige o mais alto padrão.',
    features: [
      'Lavagens externas ilimitadas (1x/semana)',
      '2 lavagens completas detalhadas por mês',
      'Higienização profunda de estofados',
      'Cristalização de para-brisa',
      'Atendimento VIP sem fila de espera',
    ],
    popular: false,
    ctaText: 'Escolher Premium',
  },
];

