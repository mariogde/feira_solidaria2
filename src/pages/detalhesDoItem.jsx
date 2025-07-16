import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DetalhesdoItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dados simulados
  const item = {
    id: id,
    name: `Item de Doação ${id}`,
    description: `Esta é uma descrição detalhada do Item ${id}. Ele está em ótimo estado e pronto para ser doado. Exemplo de uso, validade, quantidade e outras informações relevantes que o doador forneceu.`,
    category: 'Alimentos',
    location: 'Bairro Novo - Fortaleza',
    contactPhone: '(85) 99999-9999',
    imageUrl: `https://via.placeholder.com/500x400?text=Doacao+Item+${id}`
  };

  // Simulação de user logado
  const userIsLoggedIn = true; 

  const handleContact = () => {
    alert(`Entrar em contato com o doador: ${item.contactPhone}`);
    // Futuramente, pode ser um modal, link para WhatsApp, etc.
  };

  return (
    <div className="layout-container">
      <div className="detalhes-item-container"> {/* Container principal */}
        <button onClick={() => navigate('/')} className="btn-voltar">Voltar para a Listagem</button>
        
        <h1>Detalhes da Doação: {item.name}</h1>
        <img src={item.imageUrl} alt={item.name} />
        
        <div className="detalhes-item-info"> {/* Informações do item em escrita forte */}
          <p><strong>Descrição:</strong> {item.description}</p>
          <p><strong>Categoria:</strong> {item.category}</p>
          <p><strong>Localização:</strong> {item.location}</p>
        </div>

        {userIsLoggedIn ? (
          <section className="contato-section"> 
            <h2>Contato do Doador</h2>
            <button onClick={handleContact}>Entrar em Contato</button>
            <p>* O contato completo será disponibilizado após clicar no botão.</p>
          </section>
        ) : (
          <p className="contato-section">Faça login para ver o contato do doador.</p>
        )}
      </div>
    </div>
  );
}

export default DetalhesdoItem;