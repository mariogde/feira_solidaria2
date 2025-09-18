import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import Header from '../components/Header';
import { login } from '../services/authService';
import { isAutenticado } from '../util/authLogin';


function Inputs() {
  const [email, setEmail] = useState('');
  const [senhaHash, setSenhaHash] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (isAutenticado()) {
      navigate();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviado para o backend: ", {email, senhaHash})
    try {
      // Chama a função login que retorna o token do backend
      const response = await login(email, senhaHash); //chama api

      // Salva o token no localStorage
      localStorage.setItem('token', response.data.token); //Salva tokein

      alert('Login realizado com sucesso!');
      navigate('/perfil'); // redireciona para a página de perfil
    } catch (error) {
      console.error('Erro ao logar:', error);
      alert('Email ou senha inválidos!');
    };

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
          value={senhaHash}
          onChange={(e) => setSenhaHash(e.target.value)}
          required
        />
        <button className="btnLogin" id='btnLogin' type="submit" >Entrar</button>
        <p style={{ marginTop: '15px', fontSize: '0.9em' }}>
          Não tem uma conta ? <Link to="/cadastro-usuario " style={{ color: 'rgba(29, 104, 202, 0.692)', fontWeight: 'bold' }}>Cadastre-se aqui</Link>
        </p>
      </form>
    </div>
  );
}

/*function Login() {
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
}*/

function LoginPage() {
  return (
    <div className="layout-container"> {/* Container principal */}
      <Inputs /> {/* Componente de inputs para login */}
    </div>
  );
}

export default LoginPage;
