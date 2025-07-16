import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PerfilReceptor() {
  // Dados simulados de doações de usuário
  const userDonations = [
    { id: 1, name: 'Feijão Carioca 1kg', category: 'Alimentos', location: 'Centro' },
    { id: 2, name: 'Sabonetes Kit', category: 'Higiene Pessoal', location: 'Aldeota' },
    { id: 3, name: 'Arroz 5kg', category: 'Alimentos', location: 'Centro' },
  ];

  // Estado para categoria selecionada
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  // Obtem categorias únicas dinamicamente
  const categorias = ['Todos', ...new Set(userDonations.map(item => item.category))];

  // Filtra os itens com base na categoria selecionada
  const doacoesFiltradas = 
    categoriaSelecionada === 'Todos'
      ? userDonations
      : userDonations.filter(d => d.category === categoriaSelecionada);

  return (
    <div>
      <p>Olá, [Nome do Usuário]!</p>
      <h1>Itens doados:</h1>

      {/* Filtro de categorias */}
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="filtro">Filtrar por categoria: </label>
        <select
          id="filtro"
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
        >
          {categorias.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Lista de doações filtradas */}
      <section>
        {doacoesFiltradas.length > 0 ? (
          <ul>
            {doacoesFiltradas.map((donation) => (
              <li key={donation.id} style={{ border: '1px solid #eee', padding: '8px', margin: '5px 0' }}>
                <h3>{donation.name}</h3>
                <p>Categoria: {donation.category} | Localização: {donation.location}</p>
                <Link to={`/item/${donation.id}`}>Ver Detalhes</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum item encontrado nesta categoria.</p>
        )}
      </section>
    </div>
  );
}

export default PerfilReceptor;
