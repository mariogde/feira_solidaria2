import api from "./api";
/* listar usuarios /api/usuarios' */
const ListarDados = async () => {
    try {
        const response = await api.get('/api/usuarios/');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

/*Buscar usuario especidico GET /api/usuarios/:id*/
const BuscarDadosUsuario = async (id_usuario) => {
    try {
        const response = await api.get(`/usuarios/${id_usuario}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados do usuario:", error);
        throw error;
    }
};

/*Criar usuario POST /api/usuarios*/

const CriarDadosUsuario = async (payload) => {
    try {
        const response = await api.post(`/usuarios/`, payload);
        return response.data;
    } catch (error) {
        console.error("Erro criar usuario:", error);
        throw error;
    }
}

/*Atualizar usuario PUT /api/usuarios/:id*/

const AtualizarDadosUsuario = async (id_usuario, payload) => {
    try {
        const response = await api.put(`/usuarios/${id_usuario}, ${payload}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar dados:", error);
        throw error;
    }
};

/*Deletar usuario DELETE /api/usuarios/:id*/

const DeletarDadosUsuario = async (id_usuario) => {
    try {
        const response = await api.delete(`/usuarios/${id_usuario}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar dados:", error);
        throw error;
    }
};

export default {
    ListarDados,
    BuscarDadosUsuario,
    CriarDadosUsuario,
    AtualizarDadosUsuario,
    DeletarDadosUsuario

};
