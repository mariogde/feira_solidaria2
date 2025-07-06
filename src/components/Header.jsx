import { Link } from 'react-router-dom';

// Certifique-se que esta linha importa o arquivo CSS do seu colega
import './Header.css'; 

function Header() {
  return (
    <header className="main-header"> {/* Vamos usar classes CSS */}
      <div className="logo-container">
        {/* O logo ou o nome da Feira será um link para a página inicial */}
        <Link to="/" className="logo-link">
          Feira Solidária
        </Link>
      </div>
      <nav className="main-nav"> {/* <nav> é para navegação */}
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-item">
              Início
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-item">
              Login
            </Link>
          </li>
          <li>
            <Link to="/cadastro" className="nav-item">
              Cadastro
            </Link>
          </li>
          <li>
            <Link to="/perfil" className="nav-item">
              Perfil
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;