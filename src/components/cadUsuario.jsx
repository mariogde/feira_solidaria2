import { Link } from 'react-router-dom';
import './componentes.css'

const User = ()=> {
  
  return (
    //Alterei para className porque o react usa assim para diferenciar do HTML que usa class
    <div className="inputsCadastro"> 
    {/*Aqui vai ter um formulário: */}
        <form className="loginConteiner" >
            <label className="labelLogin">Nome de Usuário :</label>
            <input
                className="inputLogin" 
                id="inputEmail" 
                type="text"
                placeholder="Digite o seu nome de usuário"
                required
            />
            <label className="labelLogin">Email :</label>
            <input
                className="inputLogin" 
                id="inputEmail" 
                type="email"
                placeholder="Digite o seu Email"
                required
            />
            <label className="labelLogin">Senha :</label>
            <input
                className = "inputLogin"
                id = "inputSenha"
                type="password"
                placeholder="Digite a sua senha"
                required
            />
            <label className="labelLogin">Repita a senha :</label>
            <input
                className = "inputLogin"
                id = "inputRepSenha"
                type="password"
                placeholder="Digite a sua senha"
                required
                
            />
            <label className="labelLogin">Tipo de conta :</label>
            <select className="selectCadastro">
                <option value="receptor">Receptor</option>
                <option value="doador">Doador</option>
            </select>
            <button className="btnLogin" type="submit" onClick={cadUser}>Cadastrar</button>
        </form>
        
    </div>

  );
}

function cadUser() {
    let email = document.getElementById('inputEmail').value;
    let senha = document.getElementById('inputSenha').value;    
    let repSenha = document.getElementById('inputRepSenha').value;

    if(email === '' || senha === '' || repSenha === '') {
        alert('Preencha todos os campos!');
    } else{
        alert('Usuário cadastrado com sucesso!');
        window.location.href = '../login'; 
    }
}

export default User;