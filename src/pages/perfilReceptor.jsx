import React from 'react';
import { Link } from 'react-router-dom';

function PerfilReceptor() {
  // Dados simulados de doações de usuário
  const userDonations = [
    { id: 1, name: 'Feijão Carioca 1kg', category: 'Alimentos', location: 'Centro' },
    { id: 2, name: 'Sabonetes Kit', category: 'Higiene Pessoal', location: 'Aldeota' },
  ];

  return (
    <div>
      <p>Olá, [Nome do Usuário]!</p>
      <h1>Itens doados: </h1>

      <section>
        {userDonations.length > 0 ? (
          <ul>
            {userDonations.map((donation) => (
              <li key={donation.id} style={{ border: '1px solid #eee', padding: '8px', margin: '5px 0' }}>
                <h3>{donation.name}</h3>
                <p>Categoria: {donation.category} | Localização: {donation.location}</p>
                <Link to={`/item/${donation.id}`}>Ver Detalhes</Link> 
              </li>
            ))}
          </ul>
        ) : (
          <p>Ainda não há doações cadastradas.</p>
        )}
      </section>

    </div>
  );
}

export default PerfilReceptor;