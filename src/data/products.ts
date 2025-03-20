import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'electronics', name: 'Electrónicos', icon: 'smartphone' },
  { id: 'clothing', name: 'Ropa', icon: 'shirt' },
  { id: 'home', name: 'Hogar', icon: 'home' },
  { id: 'sports', name: 'Deportes', icon: 'dumbbell' },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Smartphone Pro Max',
    description: 'Último modelo con cámara de alta resolución y batería de larga duración',
    price: 999.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80'
  },
  {
    id: 2,
    name: 'Camiseta Premium',
    description: 'Camiseta de algodón 100% orgánico',
    price: 29.99,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80'
  },
  {
    id: 3,
    name: 'Lámpara Moderna',
    description: 'Lámpara de diseño minimalista para tu hogar',
    price: 89.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80'
  },
  {
    id: 4,
    name: 'Balón de Fútbol',
    description: 'Balón profesional de alta calidad',
    price: 49.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=800&q=80'
  }
];