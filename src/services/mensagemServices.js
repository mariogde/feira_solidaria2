import api from 'api';

/* listar mensagem /api/usuarios' */
const ListarMensagem = async () => {
    try {
        const response = await api.get('/api/mensagens/');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar mensagem:", error);
        throw error;
    }
};

/*Criar mensagem POST /api/mensagess*/

const CriarMensagem = async (payload) => {
    try {
        const response = await api.post(`/api/mensagens/`, payload);
        return response.data;
    } catch (error) {
        console.error("Erro criar mensagem:", error);
        throw error;
    }
}

/*Deletar mensagem DELETE /api/mensagens/:id*/
const DeletarMensagem = async (id_msg) => {
    try {
        const response = await api.delete(`/api/mensagens/${id_msg}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao deletar a mensagem:", error);
        throw error;
    }
};

/*buscar conversa entre dois usuarios GET /api/mensagens/:id*/

const BuscarConversa = async (rementeID, destinatarioID) => {
     try {
        const response = await api.get(`/api/mensagens/conversa/${rementeID}/${destinatarioID}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar a conversa:", error);
        throw error;
    }
}

export default{
    ListarMensagem,
    CriarMensagem,
    DeletarMensagem,
    BuscarConversa
}