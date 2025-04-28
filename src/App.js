import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <div className="app">
        <Header 
          cartCount={cartItems.length} 
          onCartClick={() => setShowCart(!showCart)} 
        />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={
              <Products 
                onAddToCart={addToCart} 
                cartItems={cartItems}
                showCart={showCart}
                setShowCart={setShowCart}
              />} 
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;