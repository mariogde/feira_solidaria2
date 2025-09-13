import api from "./api";
/* listar itens /api/itens' */
const ListarItens = async () => {
    try {
        const response = await api.get('/api/itens/');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

/*Buscar itens especidico GET /api/itens/:id*/
const BuscarItensID = async (id_item) => {
    try {
        const response = await api.get(`/api/itens/${id_item}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados do item", error);
        throw error;
    }
};

/*Criar itens o POST /api/itens*/

const CriarItens = async (payload) => {
    try {
        const response = await api.post(`/api/itens/`, payload);
        return response.data;
    } catch (error) {
        console.error("Erro criar item:", error);
        throw error;
    }
}

/*Atualizar itens PUT /api/itens/:id*/

const AtualizarItens = async (id_item, payload) => {
    try {
        const response = await api.put(`/api/itens/${id_item}, ${payload}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar dados:", error);
        throw error;
    }
};

/*Deletar itens DELETE /api/itens/:id*/

const DeletarItem = async (id_item) => {
    try {
        const response = await api.delete(`/api/itens/${id_item}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar dados:", error);
        throw error;
    }
};

export default {
    ListarItens,
    BuscarItensID,
    CriarItens,
    AtualizarItens,
    DeletarItem

};
