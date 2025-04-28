import React from 'react';

const Cart = ({ items, onRemove, onClose }) => {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart open">
      <div className="cart-header">
        <h2 className="cart-title">Seu Carrinho</h2>
        <button className="close-cart" onClick={onClose}>×</button>
      </div>
      
      <div className="cart-items">
        {items.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '2rem', color: 'var(--texto-suave)' }}>
            Seu carrinho está vazio
          </p>
        ) : (
          items.map(item => (
            <div key={item.id} className="cart-item">
              <img 
                src={item.image} 
                alt={item.name} 
                className="cart-item-image" 
              />
              <div className="cart-item-details">
                <h4 className="cart-item-name">{item.name}</h4>
                <p className="cart-item-price">R$ {item.price.toFixed(2)}</p>
                <button 
                  className="remove-item" 
                  onClick={() => onRemove(item.id)}
                >
                  Remover
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      
      {items.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>R$ {calculateTotal().toFixed(2)}</span>
          </div>
          <button className="checkout-button">
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;