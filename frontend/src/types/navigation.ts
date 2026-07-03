import type { MegaMenuCategory, NavLink } from '@/types';

export const primaryNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Loja', href: '/loja' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Cores', href: '/simulador-de-cores' },
  { label: 'Onde Encontrar', href: '/onde-encontrar' },
  { label: 'Contato', href: '/contato' },
];

export const megaMenuCategories: MegaMenuCategory[] = [
  {
    label: 'Tintas Imobiliárias',
    href: '/loja/tintas-imobiliarias',
    columns: [
      {
        title: 'Por ambiente',
        links: [
          { label: 'Interior', href: '/loja/tintas-imobiliarias?aplicacao=interior' },
          { label: 'Exterior', href: '/loja/tintas-imobiliarias?aplicacao=exterior' },
          { label: 'Fachadas', href: '/loja/tintas-imobiliarias?categoria=fachadas' },
        ],
      },
      {
        title: 'Marcas',
        links: [
          { label: 'Coral', href: '/loja/tintas-imobiliarias?marca=coral' },
          { label: 'Suvinil', href: '/loja/tintas-imobiliarias?marca=suvinil' },
          { label: 'Eucatex', href: '/loja/tintas-imobiliarias?marca=eucatex' },
        ],
      },
      {
        title: 'Acabamento',
        links: [
          { label: 'Fosco', href: '/loja/tintas-imobiliarias?acabamento=fosco' },
          { label: 'Semi-brilho', href: '/loja/tintas-imobiliarias?acabamento=semi-brilho' },
          { label: 'Brilhante', href: '/loja/tintas-imobiliarias?acabamento=brilhante' },
        ],
      },
    ],
  },
  {
    label: 'Tintas Automotivas',
    href: '/loja/tintas-automotivas',
    columns: [
      {
        title: 'Tipos',
        links: [
          { label: 'Spray', href: '/loja/tintas-automotivas?tipo=spray' },
          { label: 'Esmalte sintético', href: '/loja/tintas-automotivas?tipo=esmalte' },
          { label: 'Verniz', href: '/loja/tintas-automotivas?categoria=verniz' },
        ],
      },
    ],
  },
  { label: 'Ferramentas', href: '/loja/ferramentas' },
  { label: 'Acessórios', href: '/loja/acessorios' },
];

export const footerLinks = {
  institucional: [
    { label: 'Sobre a Tintel', href: '/sobre' },
    { label: 'Onde Encontrar', href: '/onde-encontrar' },
    { label: 'Trabalhe Conosco', href: '/carreiras' },
  ],
  ajuda: [
    { label: 'Central de Ajuda', href: '/ajuda' },
    { label: 'Trocas e Devoluções', href: '/trocas' },
    { label: 'Rastrear Pedido', href: '/conta/pedidos' },
    { label: 'Fale Conosco', href: '/contato' },
  ],
  loja: [
    { label: 'Todos os Produtos', href: '/loja' },
    { label: 'Promoções', href: '/loja/promocoes' },
    { label: 'Simulador de Cores', href: '/simulador-de-cores' },
  ],
} satisfies Record<string, NavLink[]>;