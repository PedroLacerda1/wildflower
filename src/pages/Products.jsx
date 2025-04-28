import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import { href } from 'react-router';

const Products = ({ onAddToCart, cartItems, showCart, setShowCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  
  const allProducts = [
    {
      id: 1,
      name: 'Orquídea Negra da Selva',
      price: 249.99,
      image: '/images/orquidea-negra.jpg',
      description: 'Raridade amazônica com pétalas aveludadas quase negras.',
      category: 'orquideas',
      origin: 'Amazônia Brasileira',
      careLevel: 'Avançado'
    },
    {
      id: 2,
      name: 'Rosa do Deserto Negra',
      price: 189.99,
      image: '/images/rosa-do-deserto.jpg',
      description: 'Variedade rara do Oriente Médio com tonalidades profundas.',
      category: 'suculentas',
      origin: 'Oriente Médio',
      careLevel: 'Intermediário'
    },
    {
      id: 3,
      name: 'Flor de Jade Selvagem',
      price: 299.99,
      image: '/images/flor-de-jade.jpg',
      description: 'Trepadeira rara com flores em formato de garra.',
      category: 'trepadeiras',
      origin: 'Filipinas',
      careLevel: 'Avançado'
    },
    {
      id: 4,
      name: 'Lótus do Himalaia',
      price: 229.99,
      image: '/images/flor-de-lotus.jpg',
      description: 'Cresce em altitudes extremas.',
      category: 'aquaticas',
      origin: 'Himalaia',
      careLevel: 'Intermediário'
    },
    {
      id: 5,
      name: 'Flor Cadáver Silvestre',
      price: 399.99,
      image: '/images/flor-cadaver.jpg',
      description: 'Maior flor do mundo com aroma intenso característico.',
      category: 'raras',
      origin: 'Sumatra',
      careLevel: 'Especialista'
    },
    {
      id: 6,
      name: 'Hibisco Azul de Madagascar',
      price: 179.99,
      image: '/images/hibisco-azul.jpg',
      description: 'Variedade endêmica com tonalidades azul-violeta vibrantes.',
      category: 'hibiscos',
      origin: 'Madagascar',
      careLevel: 'Iniciante'
    }
  ];

  // Filtra produtos por categoria
  const filteredProducts = selectedCategory === 'todos' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  // Categorias disponíveis
  const categories = [
    { id: 'todos', name: 'Todas as Flores' },
    { id: 'orquideas', name: 'Orquídeas Raras' },
    { id: 'suculentas', name: 'Suculentas Exóticas' },
    { id: 'trepadeiras', name: 'Trepadeiras' },
    { id: 'hibiscos', name: 'Hibiscos' },
    { id: 'raras', name: 'Espécies Raras' }
  ];

const removeFromCart = (productId) => {
  onAddToCart(cartItems.filter(item => item.id !== productId));
};

return (
  <div className="products-container">
    <div className="products-header">
      <h1 className="elegant-title">Nossas Flores Selvagens</h1>
      <p className="subtitle">Cada flor em nossa coleção foi cuidadosamente selecionada por sua raridade e beleza única.</p>
    </div>

    <div className="category-filter">
      <h3 className="filter-title">Filtrar por categoria</h3>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="elegant-select"
      >
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>

    {showCart ? (
      <Cart items={cartItems} onRemove={removeFromCart} onClose={() => setShowCart(false)} />
    ) : (
      <ProductList products={filteredProducts} onAddToCart={onAddToCart} />
    )}
  </div>
);
};

export default Products;