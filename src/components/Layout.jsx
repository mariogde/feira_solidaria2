// src/components/Layout.jsx
import Header from "./Header.jsx"; // Importe o Header que você acabou de ajustar
// import Footer from './footer'; // Se tiver um footer, importe-o aqui

function Layout({ children }) {
  return (
    <div style={{ 
        minHeight: '100vh', // Garante que o div ocupe pelo menos a altura da tela
        display: 'flex', 
        flexDirection: 'column' 
    }}>
      <Header /> {/* Seu Header (agora com links e estilos) aparecerá aqui */}
      <main style={{ 
          flexGrow: 1, // Faz o conteúdo principal crescer e ocupar o espaço restante
          padding: '20px', 
          backgroundColor: '#F5F5DC' // Seu Cinza Claro para o fundo do conteúdo
      }}>
        {children} {/* Aqui é onde o conteúdo específico de cada página será renderizado */}
      </main>
      {/* Se você tiver um rodapé, ele viria aqui: <Footer /> */}
    </div>
  );
}

export default Layout;