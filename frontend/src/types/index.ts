export type Finish = 'Fosco' | 'Semi-brilho' | 'Brilhante';
export type Application = 'Interior' | 'Exterior';
export type ProductType = 'Acrílica' | 'Esmalte' | 'Spray';
export type Brand = 'Coral' | 'Suvinil' | 'Eucatex';
export type Volume = '3.6L' | '18L';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  brand: Brand;
  type: ProductType;
  finish: Finish;
  application: Application[];
  category: 'Tintas Imobiliárias' | 'Tintas Automotivas' | 'Ferramentas' | 'Acessórios';
  volumes: Volume[];
  colors: ProductColor[];
  price: number;
  fullPrice?: number;
  installments?: { count: number; value: number };
  stock: number;
  rating: number;
  reviewCount: number;
  images: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVolume: Volume;
  selectedColor: ProductColor;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  title: string;
  links: NavLink[];
}

export interface MegaMenuCategory extends NavLink {
  columns?: MegaMenuColumn[];
}