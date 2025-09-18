//Salvar o token do usuario
export const isAutenticado = () => {
    return !!localStorage.getItem('token');
  };
  
  //remover o token do usuario após ele se desconectar da página
  export const logout = () => {
    localStorage.removeItem('token');
  };
  