// src/App.jsx (Código com Layout Corrigido)

// 1. Importe o React (necessário para JSX)
import React from 'react';
// 2. Importe as partes do React Router DOM para roteamento
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 3. Importe seus componentes FIXOS de layout (Header, Footer)
// Certifique-se de que os caminhos e os nomes dos arquivos estão corretos
import Header from './components/Header'; // Seu componente de navegação (Navbar)
import Footer from './components/Footer'; // Seu componente de rodapé

// 4. Importe os componentes de CADA PÁGINA do seu aplicativo
// Verifique os caminhos e os nomes dos arquivos/componentes exportados
import HomePage from './pages/paginainicial';         // Ex: a página inicial
import LoginPage from './pages/login';                 // Ex: a página de login
import CadastroPage from './components/cadUsuario';    // Ex: a página de cadastro
import PerfilPage from './pages/perfilDoador';       // Ex: a página de perfil do doador
import ItemDetailsPage from './pages/detalhesDoItem'; // Ex: detalhes de um item

// 5. Defina o componente principal do seu aplicativo
function App() {
  return (
    // <Router> envolve toda a aplicação para que as rotas funcionem
    // Adicione um estilo flexbox ao corpo principal para empurrar o rodapé para baixo
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* O Header (Navbar) aparece NO TOPO, uma única vez, antes do conteúdo das rotas */}
        <Header />
        
        {/* <Routes> define onde o CONTEÚDO ESPECÍFICO das páginas vai aparecer.
            Este div/main com flexGrow: 1 fará com que o conteúdo principal ocupe todo o espaço disponível,
            empurrando o rodapé para o final da tela. */}
        <div style={{ flexGrow: 1 }}>
          <Routes>
            {/* Cada <Route> liga um caminho (path) a um componente de página */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastro" element={<CadastroPage />} /> 
            <Route path="/perfil" element={<PerfilPage />} />
            <Route path="/item/:id" element={<ItemDetailsPage />} />
            {/* Adicione todas as suas outras rotas aqui */}
          </Routes>
        </div>
        
        {/* O Footer aparece NO RODAPÉ, uma única vez, depois de todo o conteúdo */}
        <Footer />
      </div>
    </Router>
  );
}

// 6. Exporte o componente App para que ele possa ser usado (geralmente no index.js/main.jsx)
export default App;
