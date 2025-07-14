import './componentes.css'

const PerfilDoador = (props) =>{

    return(
        <div className="Perfil">
            <h1>Dados do Usuário</h1>
            <div className="Perfil_Dados">
                <div className="Perfil_itens">
                    <label>Nome:</label>
                    <input type="text" value={props.nome || ""} readOnly ></input> 
                </div>
                <div className="Perfil_itens">
                    <label>Endereço:</label>
                    <input type="text" value={props.endereco || ""} readOnly></input>
                </div>
                <div className="Perfil_itens">
                    <label>Senha:</label>
                    <input type="password" value={props.senha || ""} readOnly></input>
                </div>
                <div className="Perfil_itens">
                    <label>Email:</label>
                    <input type="text" value={props.email || ""} readOnly></input>
                </div>
                <div className="Perfil_itens">
                    <label>Telefone:</label>
                    <input type="text" value={props.telefone || ""} readOnly></input>
                </div>
            </div>
        </div>
    );
}

export default PerfilDoador;