import api from './api';


//Função para realizar o cadastro de usuario
export const cadUsuario = (nome, email, senha,telefone, endereco ) => {
  return api.post('/usuarios', {nome, email, senha,telefone, endereco });
};

export const login = (email, senha) => {
  return api.post('/usuarios/login', { email, senha });
};