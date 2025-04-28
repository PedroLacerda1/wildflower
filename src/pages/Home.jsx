import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Descubra a Beleza Selvagem</h1>
        <p>
          Na Wildflower, trazemos as flores mais exóticas e raras diretamente da natureza 
          para o seu lar. Cada espécie conta uma história única de resiliência e beleza.
        </p>
        <Link to="/products" className="cta-button">Explorar Coleção</Link>
      </section>
      
      <section className="features">
        <div className="feature">
          <h3>Raridade</h3>
          <p>Espécies que você não encontra em nenhum outro lugar</p>
        </div>
        <div className="feature">
          <h3>Sustentabilidade</h3>
          <p>Colhidas de forma responsável e ética</p>
        </div>
        <div className="feature">
          <h3>Expertise</h3>
          <p>Cuidados especializados em cada etapa do processo</p>
        </div>
      </section>
    </div>
  );
};

export default Home;