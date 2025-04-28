import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="#"><span>📱</span></a>
          <a href="#"><span>📷</span></a>
          <a href="#"><span>🌐</span></a>
        </div>
        <p>WILDFLOWER - Flores que despertam emoções selvagens</p>
        <p className="copyright">© {new Date().getFullYear()} Wildflower. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;