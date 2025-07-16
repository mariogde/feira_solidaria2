import React from 'react';
import { Link } from 'react-router-dom';

function PerfilPage() {
  // Dados simulados de doações de usuário
  const userDonations = [
    { id: 1, name: 'Feijão Carioca 1kg', category: 'Alimentos', location: 'Centro' },
    { id: 2, name: 'Sabonetes Kit', category: 'Higiene Pessoal', location: 'Aldeota' },
  ];

  return (
    <div>
      <h1>Minhas Doações</h1>
      <p>Olá, [Nome do Usuário]!</p>

      <section>
        <h2>Itens Cadastrados por Você</h2>
        {userDonations.length > 0 ? (
          <ul>
            {userDonations.map((donation) => (
              <li key={donation.id} style={{ border: '1px solid #eee', padding: '8px', margin: '5px 0' }}>
                <h3>{donation.name}</h3>
                <p>Categoria: {donation.category} | Localização: {donation.location}</p>
                <Link to={`/item/${donation.id}`}>Ver Detalhes</Link> | <button>Editar</button> | <button>Remover</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Você ainda não tem doações cadastradas.</p>
        )}
      </section>

      <Link to="/cadastro">
        <button>Cadastrar Nova Doação</button>
      </Link>
    </div>
  );
}

export default PerfilPage;