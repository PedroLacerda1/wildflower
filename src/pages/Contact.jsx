import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Entre em Contato</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;