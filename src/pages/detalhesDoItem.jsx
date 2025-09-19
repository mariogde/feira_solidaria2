import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import itemService from '../services/itensServices';

function DetalhesdoItem() {
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

async function load(){
  try {
    setLoading(true);
    const itens = await itemService.buscarItemPorId(id);
    setItem(itens);
  } catch (error) {
    setError('Erro ao carregar os detalhes do item. Por favor, tente novamente mais tarde.');
    console.error("Erro ao carregar os detalhes do item:", error);
  } finally {
    setLoading(false);
  }
}
useEffect(() => {
  if(id) load();
} ,[id])  // Simulação de user logado


  if (loading) return <p>Carregando...</p>;
  if (error) return (
    <div>
      <p>{error}</p>
      <button onClick={() => navigate('/')}>Voltar</button>
    </div>
  );
  if (!item) return (
    <div>
      <p>Item não encontrado.</p>
      <button onClick={() => navigate('/')}>Voltar</button>
    </div>
  );

 // Simulação de user logado
  const userIsLoggedIn = true;

  const handleContact = () => {
    // Como o modelo não tem telefone, mostramos o endereço (se houver)
    alert(
      item.endereco
        ? `Endereço do doador: ${item.endereco}`
        : 'Nenhuma informação de contato disponível.'
    );
  };

 const formatDate = (iso) => {
    try {
      return new Date(iso).toLocaleString('pt-BR');
    } catch {
      return iso;
    }
  };

return (
    <div className="layout-container">
      <div className="detalhes-item-container">
        <button onClick={() => navigate('/')} className="btn-voltar">
          Voltar para a Listagem
        </button>

        <h1>Detalhes da Doação: {item.titulo}</h1>

        {/* Campos do seu modelo */}
        <div className="detalhes-item-info">
          <p><strong>Descrição:</strong> {item.descricao}</p>
          {item.endereco && <p><strong>Localização:</strong> {item.endereco}</p>}
          <p><strong>Status:</strong> {item.status}</p>
          <p><strong>Criado em:</strong> {formatDate(item.criadoEm)}</p>
          <p><strong>Atualizado em:</strong> {formatDate(item.atualizadoEm)}</p>
        </div>

        {userIsLoggedIn ? (
          <section className="contato-section">
            <h2>Contato do Doador</h2>
            <button onClick={handleContact}>Ver contato</button>
            <p>* Por ora, exibimos o endereço (se existir). Telefone exige campo no modelo.</p>
          </section>
        ) : (
          <p className="contato-section">Faça login para ver o contato do doador.</p>
        )}
      </div>
    </div>
  );
}

export default DetalhesdoItem;


