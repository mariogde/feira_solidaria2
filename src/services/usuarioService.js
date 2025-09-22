import api from "./api";

/* Listar usuários - GET /api/usuarios */
const ListarDados = async () => {
    try {
        const response = await api.get('/api/usuarios/');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

/* Buscar usuário específico - GET /api/usuarios/:id */
const BuscarDadosUsuario = async (id_usuario) => {
    try {
        const response = await api.get(`/api/usuarios/${id_usuario}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados do usuario:", error);
        throw error;
    }
};

/* Criar usuário - POST /api/usuarios */
const CriarDadosUsuario = async (payload) => {
    try {
        const response = await api.post(`/api/usuarios/`, payload);
        return response.data;
    } catch (error) {
        console.error("Erro criar usuario:", error);
        throw error;
    }
};

/* Atualizar usuário - PUT /api/usuarios/:id */
const AtualizarDadosUsuario = async (id_usuario, payload) => {
    try {
        const response = await api.put(`/api/usuarios/${id_usuario}`, payload);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar dados:", error);
        throw error;
    }
};

/* Deletar usuário - DELETE /api/usuarios/:id */
const DeletarDadosUsuario = async (id_usuario) => {
    try {
        const response = await api.delete(`/api/usuarios/${id_usuario}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao deletar usuario:", error);
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
