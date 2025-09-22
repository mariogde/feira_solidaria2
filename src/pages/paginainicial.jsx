// src/pages/paginainicial.jsx
import React from "react";
import "./paginainicial.css"; // mantém se você quiser CSS extra

const HomePage = () => {
  return (
    <main className="container my-5">
      {/* Banner */}
      <div className="text-center mb-4">
        <img
          src="https://placehold.co/1200x400/87CEEB/000000?text=Feira+Solidária+-+Conectando+Corações"
          alt="Banner Feira Solidária"
          className="banner img-fluid shadow"
        />
      </div>

      {/* Título Principal */}
      <h1 className="text-primary text-center mb-4">
        Conectando Corações, Transformando Vidas 💙
      </h1>

      {/* Seção introdutória */}
      <section className="card mb-4">
        <h2 className="text-success">🌍 Nosso Propósito</h2>
        <p>
          A <strong>Feira Solidária</strong> conecta quem deseja ajudar com quem
          mais precisa. Um espaço para doar alimentos, roupas, produtos de
          higiene e muito mais, de forma simples, direta e sem burocracia.
        </p>
      </section>

      {/* Doadores */}
      <section className="card mb-4">
        <h2 className="text-primary">🤝 Para Quem Doa</h2>
        <ul>
          <li>Cadastre-se como doador</li>
          <li>Liste os itens que deseja doar</li>
          <li>Transforme solidariedade em impacto real</li>
        </ul>
        <button className="btn btn-primary mt-2">Quero Doar</button>
      </section>

      {/* Beneficiários */}
      <section className="card mb-4">
        <h2 className="text-warning">💡 Para Quem Recebe</h2>
        <ul>
          <li>Encontre doações disponíveis</li>
          <li>Cadastre-se como beneficiário</li>
          <li>Conecte-se diretamente com doadores</li>
        </ul>
        <button className="btn btn-success mt-2">Preciso de Ajuda</button>
      </section>

      {/* Chamada final */}
      <section className="card text-center">
        <h2 className="text-primary">✨ Junte-se à Feira Solidária</h2>
        <p>
          Com a sua ajuda, podemos transformar generosidade em esperança.
          Cadastre-se, doe, receba e faça parte dessa rede de solidariedade.
        </p>
      </section>
    </main>
  );
};

export default HomePage;
