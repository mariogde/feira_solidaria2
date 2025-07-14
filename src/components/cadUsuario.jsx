import './componentes.css'

const User = ()=> {
  
  return (
    //Alterei para className porque o react usa assim para diferenciar do HTML que usa class
    <div className="inputs"> 
    {/*Aqui vai ter um formulário: */}
        <form className="loginConteiner" >
            <label className="labelLogin">Email :</label>
            <input
                className="inputLogin" 
                type="email"
                placeholder="Digite o seu Email"
            
            />
            <label className="labelLogin">Senha :</label>
            <input
                className = "inputLogin"
                type="password"
                placeholder="Digite a sua senha"
                
            />
            <label className="labelLogin">Repita a senha :</label>
            <input
                className = "inputLogin"
                type="password"
                placeholder="Digite a sua senha"
                
            />
            <button className="btnLogin" type="submit">Cadastrar</button>
        </form>
    </div>
    
  );
}


export default User;