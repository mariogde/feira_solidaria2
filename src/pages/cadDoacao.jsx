// cadastro de doação
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function CadastroPage() {
 
  const navigate = useNavigate();

  const [nomeItem, setNomeItem] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [telefone, setTelefone] = useState('');
  const [imagem, setImagem] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ nomeItem, descricao, categoria, localizacao, telefone, imagem });
    alert('Doação cadastrada (simulado)!');
    navigate('/perfil'); // Redireciona para o perfil após o "cadastro"
  };

  return (
    <div className="layout-container">
      <div className="cadastro-doacao-container"> {/* Container principal */}
        <h1>Cadastrar Nova Doação</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nomeItem">Nome do Item:</label>
            <input type="text" id="nomeItem" value={nomeItem} onChange={(e) => setNomeItem(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="descricao">Descrição:</label>
            <textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} rows="4"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="categoria">Categoria:</label>
            <select id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
              <option value="">Selecione uma categoria</option>
              <option value="alimentos">Alimentos</option>
              <option value="higiene">Higiene Pessoal</option>
              <option value="limpeza">Limpeza</option>
              <option value="roupas">Roupas</option>
              <option value="outros">Outros</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="localizacao">Localização (Bairro/Cidade):</label>
            <input type="text" id="localizacao" value={endereco} onChange={(e) => setLocalizacao(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone para Contato:</label>
            <input type="tel" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="imagem">Upload de Imagem:</label>
            <input type="file" id="imagem" onChange={(e) => setImagem(e.target.files[0])} accept="image/*" />
          </div>
          <div className="form-actions"> {/* botões */}
            <button type="submit" className="btn-publicar">Publicar Doação</button>
            <button type="button" className="btn-cancelar" onClick={() => navigate('/')}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroPage;