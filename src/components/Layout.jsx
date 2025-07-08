// src/components/Layout.jsx
import Header from "./Header.jsx"; // O Header ajustado foi importado pra cá 
// import Footer from './footer'; // Se tiver um footer, importe-o pra cá

function Layout({ children }) {
  return (
    <div style={{ 
        minHeight: '100vh', // Div ocupa pelo menos a altura da tela
        display: 'flex', 
        flexDirection: 'column' 
    }}>
      <Header /> {/* O Header (agora com links e estilos) aparecerá aqui */}
      <main style={{ 
          flexGrow: 1, // Faz o conteúdo principal crescer e ocupar o espaço restante
          padding: '20px', 
          backgroundColor: '#F5F5DC' // Cinza Claro para o fundo do conteúdo
      }}>
        {children} {/* Conteúdo específico de cada página será renderizado aqui */}
      </main>
      {/* Rodapé, ele vem pra cá: <Footer /> */}
    </div>
  );
}

export default Layout;