import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Inputs() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email digitado:', email);
    console.log('Senha digitada:', password);
    alert(`Tentativa de login com Email: ${email}`);
    
  };

  return (
    <div className="inputs"> 
      <form className="loginConteiner" onSubmit={handleSubmit}>
        <label className="labelLogin">Email Receptor:</label>
        <input
          className="inputLogin"
          type="email"
          placeholder="Digite o email do Receptor"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="labelLogin">Senha :</label>
        <input
          className="inputLogin"
          type="password"
          placeholder="Digite a sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btnLogin" type="submit">Entrar</button>
        <p style={{ marginTop: '15px', fontSize: '0.9em' }}>
          Não tem uma conta Receptor? <Link to="/cadastro" style={{ color: 'rgba(29, 104, 202, 0.692)', fontWeight: 'bold' }}>Cadastre-se aqui</Link>
        </p>
      </form>

      <form className="loginConteiner" onSubmit={handleSubmit}>
        <label className="labelLogin">Email Doador:</label>
        <input
          className="inputLogin"
          type="email"
          placeholder="Digite o email do Doador"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="labelLogin">Senha :</label>
        <input
          className="inputLogin"
          type="password"
          placeholder="Digite a sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btnLogin" type="submit">Entrar</button>
        <p style={{ marginTop: '15px', fontSize: '0.9em' }}>
          Não tem uma conta Doador? <Link to="/cadastro" style={{ color: 'rgba(29, 104, 202, 0.692)', fontWeight: 'bold' }}>Cadastre-se aqui</Link>
        </p>
      </form>
    </div>
  );
}


function LoginPage() {
  return (
    <div className="layout-container"> {/* Container principal */}
      <Inputs /> {/* Componente de inputs para login */}
    </div>
  );
}

export default LoginPage;