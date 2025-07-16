// src/components/Footer.jsx

import React from 'react';
import './Footer'; 

const Footer = () => {
  return (
    // creio que a semantica fica legal aqui
    <footer className="main-footer">
      <div className="footer-content">
        {/*==> Seção de Navegação Rápida <==*/}
        <nav className="footer-section footer-links">
          <h3>Navegação Rápida</h3>
          <ul>
            <li><a href="/">Página Inicial</a></li>
            <li><a href="/cadastro">Cadastrar Doação</a></li>
            <li><a href="/perfil">Buscar Doação</a></li> {/* Ou "Meu Perfil" depois agente decide */}
            <li><a href="/sobre">Sobre a Feira Solidária</a></li> {/* Link futuro */}
            <li><a href="/contato">Contato</a></li> {/* Link futuro */}
          </ul>
        </nav>

        {/* Seção de Missão/Propósito */}
        <div className="footer-section footer-mission">
          <h3>Nossa Missão</h3>
          <p>
            Conectando doadores e famílias em vulnerabilidade social, de forma simples, digna e sem burocracia.
            Juntos, construímos um futuro mais justo.
          </p>
        </div>

        {/* Seção de Contato e Redes Sociais */}
        <div className="footer-section footer-contact">
          <h3>Fale Conosco</h3>
          <p>Email: contato@feirasolidaria.org</p>
          <p>Telefone: (XX) XXXX-XXXX</p>
          <div className="social-icons">
            {/* Ícones de redes sociais (pra colocar SVGs ou Font Awesome se tiver) */}
            <a href="#" aria-label="Facebook da Feira Solidária">Facebook</a> | 
            <a href="#" aria-label="Instagram da Feira Solidária">Instagram</a> | 
            <a href="#" aria-label="Twitter da Feira Solidária">Twitter</a>
          </div>
        </div>
      </div>

      {/* Seção de Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Feira Solidária. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
