import api from './api';


//Função para realizar o cadastro de usuario
export const cadUsuario = (nome, email, senhaHash,telefone, endereco ) => {
  return api.post('/usuarios', {nome, email, senhaHash,telefone, endereco });
};

export const login = (email, senhaHash) => {
  return api.post('usuarios/login', { email, senhaHash });
};