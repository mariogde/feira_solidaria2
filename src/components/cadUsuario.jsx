import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './componentes.css';
import api from '../services/api'
import  usuarioServices  from '../services/usuarioServices';
/*
export const cadastrarUsuario = async (usuario) => {
  try {
    const response = await api.post('/usuarios', usuario); // apenas a rota relativa
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('Erro ao conectar com o servidor!');
    }
  }
};*/

const User = () => {


    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [senhaHash, setSenhaHash] = useState('');
    const [repSenha, setRepSenha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validação simples
        if (!nome || !email || !senhaHash || !repSenha) {
            alert('Preencha todos os campos obrigatórios!');
            return;
        }

        if (senhaHash !== repSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        // Aqui você chamaria a API para cadastrar o usuário
        // Exemplo: await cadUserAPI({nome, cpf, email, telefone, endereco, senha})
        /*
        alert('Usuário cadastrado com sucesso!');
        navigate('/login'); // Redireciona para a página de login
        */

        try {
            // Chama o serviço para cadastrar usuário
            const data = await usuarioServices.CriarDadosUsuario({
                nome,
                cpf,
                email,
                telefone,
                endereco,
                senha: senhaHash
            });

            alert(data.message); // Mensagem do backend (ex: "Usuário cadastrado com sucesso!")
            navigate('/login'); // Redireciona para a página de login
        } catch (error) {
            alert(error.message); // Mostra erro do backend (ex: "Email já cadastrado!")
        }

    };

    return (
        //Alterei para className porque o react usa assim para diferenciar do HTML que usa class
        <div className="inputsCadastro">
            {/*Aqui vai ter um formulário: */}
            <form className="loginConteiner" onSubmit={handleSubmit} >
                <label className="labelLogin">Nome de Usuário :</label>
                <input
                    className="inputLogin"
                    id="nome"
                    type="text"
                    placeholder="Digite o seu nome de usuário"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <label className="labelLogin"> CPF (opicional)</label>
                <input
                    className="inputLogin"
                    id="cpf"
                    type="text"
                    placeholder="Digite o CPF do usuario"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />

                <label className="labelLogin">Email :</label>
                <input
                    className="inputLogin"
                    id="emaill"
                    type="email"
                    placeholder="Digite o seu Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className="labelLogin">Telefone :</label>
                <input
                    className="inputLogin"
                    id="telefone"
                    type="text"
                    placeholder="Digite o seu Telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />

                <label className="labelLogin">Endereço :</label>
                <input
                    className="inputLogin"
                    id="endereco"
                    type="text"
                    placeholder="Digite o seu endereço"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                />

                <label className="labelLogin">Senha :</label>
                <input
                    className="inputLogin"
                    id="senha"
                    type="password"
                    placeholder="Digite a sua senha"
                    value={senhaHash}
                    onChange={(e) => setSenhaHash(e.target.value)}
                />
                <label className="labelLogin">Repita a senha :</label>
                <input
                    className="inputLogin"
                    id="RepSenha"
                    type="password"
                    placeholder="Digite a sua senha"
                    value={repSenha}
                    onChange={(e) => setRepSenha(e.target.value)}

                />

                <button className="btnLogin" type="submit" >Cadastrar</button>
            </form>

        </div>

    );
};


export default User;
