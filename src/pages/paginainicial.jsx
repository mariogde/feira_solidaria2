import React from 'react';
import { Link } from 'react-router-dom';

function PerfilPage() {
  const userDonations = [
    { id: 1, name: 'Feijão Carioca 1kg', category: 'Alimentos', location: 'Centro', imageUrl: 'https://via.placeholder.com/150x150?text=Feijao' },
    { id: 2, name: 'Sabonetes Kit', category: 'Higiene Pessoal', location: 'Aldeota', imageUrl: 'https://via.placeholder.com/150x150?text=Sabonete' },
    { id: 3, name: 'Roupas Bebê (3-6m)', category: 'Roupas', location: 'Parangaba', imageUrl: 'https://via.placeholder.com/150x150?text=Roupa+Bebe' },
  ];

  // Dados simulados de usuário
  const userData = {
    nome: 'Maria Silva',
    email: 'maria.silva@email.com',
    telefone: '(85) 98765-4321',
    localizacao: 'Fortaleza - CE',
    tipoUsuario: 'Doador'
  };

  return (
    <div className="layout-container">
      <div className="Perfil"> {/* Perfil */}
        <h1>Meu Perfil</h1>

        <section className="Perfil_Dados">
          <div className="Perfil_itens">
            <label>Nome:</label>
            <input type="text" value={userData.nome} readOnly />
          </div>
          <div className="Perfil_itens">
            <label>Email:</label>
            <input type="email" value={userData.email} readOnly />
          </div>
          <div className="Perfil_itens">
            <label>Telefone:</label>
            <input type="tel" value={userData.telefone} readOnly />
          </div>
          <div className="Perfil_itens">
            <label>Localização:</label>
            <input type="text" value={userData.localizacao} readOnly />
          </div>
          <div className="Perfil_itens">
            <label>Tipo de Usuário:</label>
            <input type="text" value={userData.tipoUsuario} readOnly />
          </div>
        </section>

        <section>
          <h2>Minhas Doações Ativas</h2>
          {userDonations.length > 0 ? (
            <div className="perfil-doacoes-list"> {/* Grade de doação */}
              {userDonations.map((donation) => (
                <div key={donation.id} className="doacao-card">
                  <img src={donation.imageUrl} alt={donation.name} />
                  <h3>{donation.name}</h3>
                  <p>Categoria: {donation.category}</p>
                  <p>Localização: {donation.location}</p>
                  <div>
                    <Link to={`/item/${donation.id}`}><button style={{ marginRight: '5px' }}>Ver Detalhes</button></Link>
                    <button style={{ marginRight: '5px' }}>Editar</button>
                    <button>Remover</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Você ainda não tem doações cadastradas. Use o botão abaixo para começar!</p>
          )}
        </section>

        <Link to="/cadastro">
          <button className="btn-cadastrar-doacao">Cadastrar Nova Doação</button>
        </Link>
      </div>
    </div>
  );
}

export default PerfilPage;