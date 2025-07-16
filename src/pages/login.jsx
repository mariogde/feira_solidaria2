import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Inputs() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDoador, setEmail2] = useState('');
  const [passwordDoador, setPassword2] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email digitado:', email);
    console.log('Senha digitada:', password);
    alert(`Tentativa de login com Email: ${email} ${emailDoador}`)
  };

  return (
    <div className="inputs"> 
      <form className="loginConteiner" onSubmit={handleSubmit}>
        <label className="labelLogin">Email Receptor:</label>
        <input
          className="inputLogin"
          type="email"
          id='inputEmail'
          placeholder="Digite o email do Receptor"
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
        <button className="btnLogin" type="submit" onClick={loginReceptor}>Entrar</button>
        <p style={{ marginTop: '15px', fontSize: '0.9em' }}>
          Não tem uma conta Receptor? <Link to="/cadastro-usuario" style={{ color: 'rgba(29, 104, 202, 0.692)', fontWeight: 'bold' }}>Cadastre-se aqui</Link>
        </p>
      </form>

      <form className="loginConteiner" onSubmit={handleSubmit}>
        <label className="labelLogin">Email Doador:</label>
        <input
          className="inputLogin"
          type="email"
          id='inputEmailDoador'
          value={emailDoador}
          placeholder="Digite o email do Doador"
          onChange={(e) => setEmail2(e.target.value)}
          required
        />
        <label className="labelLogin">Senha :</label>
        <input
          className="inputLogin"
          type="password"
          id='inputSenhaDoador'
          value={passwordDoador}
          placeholder="Digite a sua senha"
          onChange={(e) => setPassword2(e.target.value)}
          required
        />
        <button className="btnLogin" type="submit" onClick={loginDoador}>Entrar</button>
        <p style={{ marginTop: '15px', fontSize: '0.9em' }}>
          Não tem uma conta Doador? <Link to="/cadastro-usuario" style={{ color: 'rgba(29, 104, 202, 0.692)', fontWeight: 'bold' }}>Cadastre-se aqui</Link>
        </p>
      </form>
    </div>
  );
}

function loginReceptor() {
    let email = document.getElementById('inputEmail').value;
    let senha = document.getElementById('inputSenha').value;    

    if(email === '' || senha === '') {
        alert('Preencha todos os campos!');
    } else{
        alert('Usuário logado!');
        window.location.href = '../perfil-receptor'; // Redireciona para o perfil do receptor
    }
}

function loginDoador() {
    let email = document.getElementById('inputEmailDoador').value;
    let senha = document.getElementById('inputSenhaDoador').value;    

    if(email === '' || senha === '') {
        alert('Preencha todos os campos!');
    } else{
        alert('Usuário logado!');
        window.location.href = '../perfil'; // Redireciona para o perfil do receptor
    }
}

function LoginPage() {
  return (
    <div className="layout-container"> {/* Container principal */}
      <Inputs /> {/* Componente de inputs para login */}
    </div>
  );
}

export default LoginPage;