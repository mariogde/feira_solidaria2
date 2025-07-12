import './componentes.css'

const Inputs = (props)=> {
  return (
    
    <div className="inputs">
        <div class="loginConteiner">
            <label class="labelLogin">Email :</label>
            <input
                class="inputLogin" 
                type="email"
                placeholder="Digite o seu Email"
                value={props.emailUser}
            
            />
            <label class="labelLogin">Senha :</label>
            <input
                class = "inputLogin"
                type="password"
                placeholder="Digite a sua senha"
                value={props.senhaUser}
                
            />
            <button class="btnLogin" type="submit">Entrar</button>
        </div>
    </div>
    
  );
}


export default Inputs;