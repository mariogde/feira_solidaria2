import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

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
        <label className="labelLogin">Email:</label>
        <input
          className="inputLogin"
          type="email"
          id='inputEmail'
          placeholder="Digite o seu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="labelLogin">Senha :</label>
        <input
          className="inputLogin"
          type="password"
          id='inputSenha'
          placeholder="Digite a sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btnLogin" id='btnLogin' type="submit" onClick={Login}>Entrar</button>
        <p style={{ marginTop: '15px', fontSize: '0.9em' }}>
          Não tem uma conta ? <Link to="/cadastro-usuario" style={{ color: 'rgba(29, 104, 202, 0.692)', fontWeight: 'bold' }}>Cadastre-se aqui</Link>
        </p>
      </form>
    </div>
  );
}

function Login() {
  let btnEntrar = document.getElementById('btnLogin');

  btnEntrar.addEventListener('click', () => {
    let inputEmail = document.getElementById('inputEmail');
    let inputSenha = document.getElementById('inputSenha');

    if (inputEmail.value === '' || inputSenha.value === '') {
      alert('Preencha todos os campos!');
    } else {
      alert(`Login realizado com sucesso!`);
      window.location.href = '/perfil'; // Redireciona para a página de perfil 
    }
  });
}

function LoginPage() {
  return (
    <div className="layout-container"> {/* Container principal */}
      <Inputs /> {/* Componente de inputs para login */}
    </div>
  );
}

export default LoginPage;