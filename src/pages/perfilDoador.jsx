import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PerfilPage() {
  // Dados simulados de doações de usuário
  const userDonations = [
    { id: 1, name: 'Feijão Carioca 1kg', category: 'Alimentos', location: 'Centro' },
    { id: 2, name: 'Sabonetes Kit', category: 'Higiene Pessoal', location: 'Aldeota' },
  ];

  // Estados para filtros
  const [categoryFilter, setCategoryFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  // Lista única de categorias e localizações para os selects
  const categories = [...new Set(userDonations.map(d => d.category))];
  const locations = [...new Set(userDonations.map(d => d.location))];

  // Itens filtrados
  const filteredDonations = userDonations.filter(donation => {
    const categoryMatch = categoryFilter ? donation.category === categoryFilter : true;
    const locationMatch = locationFilter ? donation.location === locationFilter : true;
    return categoryMatch && locationMatch;
  });

  return (
    <div>
      <h1>Minhas Doações</h1>
      <p>Olá, [Nome do Usuário]!</p>

      <h2>Filtros</h2>
      <section className='filtrosContainer'>
        <div className='filtros'>
          <label>
            Categoria:
          </label>
          <select className='selectFiltro' value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
            <option value="">Todas</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <label style={{ marginLeft: '15px' }}>
            Localização:
          </label>
          <select className='selectFiltro' value={locationFilter} onChange={e => setLocationFilter(e.target.value)}>
            <option value="">Todas</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
      </section>

      <section>
        <h2>Itens Cadastrados por Você</h2>
        {filteredDonations.length > 0 ? (
          <ul>
            {filteredDonations.map((donation) => (
              <li key={donation.id} style={{ border: '1px solid #eee', padding: '8px', margin: '5px 0' }}>
                <h3>{donation.name}</h3>
                <p>Categoria: {donation.category} | Localização: {donation.location}</p>
                <Link to={`/item/${donation.id}`}>Ver Detalhes</Link> | <button>Editar</button> | <button>Remover</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Não há doações que correspondem aos filtros selecionados.</p>
        )}
      </section>

      <div className='cadastroButton'>
        <Link to="/cadastro">
          <button>Cadastrar Nova Doação</button>
        </Link>
      </div>
    </div>
  );
}

export default PerfilPage;
