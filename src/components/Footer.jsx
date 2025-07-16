// src/components/Footer.jsx

// Importe o React se você estiver usando JSX (o que é o caso)
import React from 'react';
// Importe o CSS específico para o Footer, se tiver um
// import './Footer.css'; // Ou o caminho para o seu CSS global, se for o caso

// Defina o componente funcional Footer
const Footer = () => {
  return (
    // Um div simples para o rodapé
    <footer style={{ 
        backgroundColor: '#f0f0f0', 
        padding: '20px', 
        textAlign: 'center', 
        borderTop: '1px solid #ddd',
        marginTop: '20px' // Apenas para separar do conteúdo
    }}>
      <p>&copy; {new Date().getFullYear()} Feira Solidária. Todos os direitos reservados.</p>
    </footer>
  );
};

// Exporte o componente Footer como padrão (default)
export default Footer;
