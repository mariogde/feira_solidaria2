import api from './api'

/* listar categorias /api/categorias' */
const Listacategorias = async () => {
    try {
        const response = await api.get('/api/categorias/');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

/*Buscar categoria especidico GET /api/categorias/:id*/
const BuscarCategoriaID = async (id_categoria) => {
    try {
        const response = await api.get(`/api/usuarios/${id_usuario}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados da categorias:", error);
        throw error;
    }
};

/*Criar categoria POST /api/usuarios*/

const CriarCategoria = async (payload) => {
    try {
        const response = await api.post(`/api/categorias/`, payload);
        return response.data;
    } catch (error) {
        console.error("Erro criar categorias:", error);
        throw error;
    }
}

/*Atualizar categoria PUT /api/categorias/:id*/

const AtualizarCategoria = async (id_categoria, payload) => {
    try {
        const response = await api.put(`/api/categorias/${id_categoria}, ${payload}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar dados:", error);
        throw error;
    }
};

/*Deletar categoria DELETE /api/categorias/:id*/

const DeletarCategoria = async (id_categoria) => {
    try {
        const response = await api.delete(`/api/categorias/${id_categoria}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar dados:", error);
        throw error;
    }
};

export default {
    Listacategorias,
    BuscarCategoriaID,
    CriarCategoria,
    AtualizarCategoria,
    DeletarCategoria

};