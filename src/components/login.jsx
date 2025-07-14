import React, { useState } from 'react';
import './componentes.css'

const Inputs = ()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // SUPER IMPORTANTE! Impede a página de recarregar.

    //PRA VER DADOS DO FORMULÁRIO POR ENQUANTO:
    console.log('Email digitado:', email);
    console.log('Senha digitada:', password);

    // colocado um alerta:
    alert(`Tentativa de login com Email: ${email}`);

    //  esses dados para o backend.
};
  return (
    //Alterei para className porque o react usa assim para diferenciar do HTML que usa class
    <div className="inputs"> 
    {/*Aqui vai ter um formulário: */}
        <form className="loginConteiner" onSubmit={handleSubmit}>
            <label className="labelLogin">Email :</label>
            <input
                className="inputLogin" 
                type="email"
                placeholder="Digite o seu Email"
                value={email} //usar o valor guardado
                 onChange={(e) => setEmail(e.target.value)}
            
            />
            <label className="labelLogin">Senha :</label>
            <input
                className = "inputLogin"
                type="password"
                placeholder="Digite a sua senha"
                value={password} // pra usar o valor guardado
                onChange={(e) => setPassword(e.target.value)} 
                
            />
            <button className="btnLogin" type="submit">Entrar</button>
        </form>
    </div>
    
  );
}


export default Inputs;