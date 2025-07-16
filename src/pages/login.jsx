import React, { useState } from 'react';


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
        <label className="labelLogin">Email :</label>
        <input
          className="inputLogin"
          type="email"
          placeholder="Digite o seu Email"
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
          Não tem uma conta? <Link to="/cadastro-usuario" style={{ color: 'rgba(29, 104, 202, 0.692)', fontWeight: 'bold' }}>Cadastre-se aqui</Link>
        </p>
      </form>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="layout-container"> {/* Container principal */}
      <Inputs /> 
    </div>
  );
}

export default LoginPage;