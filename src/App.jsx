// src/App.jsx (ATUALIZADO)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Importe SEU componente de Layout

// Importe todos os seus componentes de página
import HomePage from './pages/paginainicial'; 
import LoginPage from './pages/login';
import CadastroPage from './pages/cadDoacao';
import PerfilPage from './pages/perfilDoador';
import ItemDetailsPage from './pages/detalhesDoItem';

function App() {
  return (
    <Router>
      <Routes>
        {/* Todas as rotas agora usam o componente Layout */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/login" element={<Layout><LoginPage /></Layout>} />
        <Route path="/cadastro" element={<Layout><CadastroPage /></Layout>} />
        <Route path="/perfil" element={<Layout><PerfilPage /></Layout>} />
        <Route path="/item/:id" element={<Layout><ItemDetailsPage /></Layout>} />
        {/* Se tiver mais rotas, adicione-as aqui, sempre dentro de <Layout> */}
      </Routes>
    </Router>
  );
}

export default App;