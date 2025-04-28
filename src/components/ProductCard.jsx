import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image" 
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">R$ {product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        <button 
          className="add-to-cart" 
          onClick={() => onAddToCart(product)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;