import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; 
import './components/componentes.css'; 

// Importação de todas as páginas
import HomePage from './pages/paginainicial'; 
import LoginPage from './pages/login';
import CadastroPage from './pages/cadDoacao';
import PerfilPage from './pages/perfilDoador';
import DetalhesdoItem from './pages/detalhesDoItem';

function App() {
  return (
    <Router>
      <Routes>
        {/* todas as rotas agora vão usar o componente Layout */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/login" element={<Layout><LoginPage /></Layout>} />
        <Route path="/cadastro" element={<Layout><CadastroPage /></Layout>} />
        <Route path="/perfil" element={<Layout><PerfilPage /></Layout>} />
        <Route path="/item/:id" element={<Layout><DetalhesdoItem /></Layout>} />
        {/* Se tiver mais rotas, colocar aqui, sempre dentro de !!!<Layout>!!! */}
      </Routes>
    </Router>
  );
}

export default App;