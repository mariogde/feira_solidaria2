import api from './api';

const buscarItens = async () => {
  try {
    const response = await api.get('/api/itens'); 
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};

const buscarItemPorId = async (id) => {
  try {
    const response = await api.get(`/api/itens/${id}`); 
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};

const criarItem = async (payload) => {
  try {
    const response = await api.post('/api/itens/',payload); 
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }                                   
};

const atualizarItem = async (id, payload) => {
  try {
    const response = await api.put(`/api/itens/${id}`, payload); 
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};

const deletarItem = async (id) => {
  try {
    const response = await api.delete(`/api/itens/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};


export default {
  buscarItens,
  buscarItemPorId,
  criarItem,
  atualizarItem,
  deletarItem,
};
