// src/pages/paginainicial.jsx

import React from 'react';
// Importa o arquivo CSS para estilização
import './paginainicial'; 

const HomePage = () => {
  return (
    // Usa a tag <main> para indicar o conteúdo principal da página (semântica)
    <main className="homepage-container">
      
      {/* Título Principal da Página */}
      <h1 className="main-title">
        Feira Solidária: Conectando Corações, Transformando Vidas
      </h1>

      {/* Seção de Introdução ao Propósito */}
      <section className="content-section">
        <h2 className="section-title">
          Um Propósito Simples, um Impacto Gigante
        </h2>
        <p>
          A <strong className="highlight-blue">Feira Solidária</strong> nasce de um ideal poderoso: conectar quem quer ajudar a quem mais precisa, de forma <strong className="highlight-green">direta, digna e sem burocracia</strong>. Acreditamos que a solidariedade pode e deve ser acessível a todos, e a tecnologia é a nossa ponte para tornar isso realidade.
        </p>
        <p>
          Nossa plataforma web é um espaço onde a generosidade encontra a necessidade. Aqui, <strong className="highlight-blue">qualquer pessoa pode cadastrar doações</strong> de alimentos, produtos de higiene ou limpeza, sabendo que seus itens chegarão a famílias em situação de vulnerabilidade social que realmente precisam.
        </p>
      </section>

      {/* Separador visual para seções */}
      <hr className="homepage-separator" aria-hidden="true" /> {/* aria-hidden para leitores de tela */}

      {/* Seção de Chamada para Ação */}
      <section className="content-section">
        <h2 className="section-title center-text">
          Sua Solidariedade, ao Alcance de um Clique
        </h2>

        {/* Artigo/Subseção para Doadores */}
        <article className="content-section">
          <h3 className="subsection-title">
            Para Quem Doa:
          </h3>
          <p>
            Você tem alimentos em excesso, produtos de higiene que não usa ou itens de limpeza que pode compartilhar? Sua contribuição faz toda a diferença!
          </p>
          <ul className="content-list">
            <li><strong>Cadastre-se como doador:</strong> É rápido e fácil.</li>
            <li><strong>Liste seus itens:</strong> Descreva os produtos que deseja doar.</li>
            <li><strong>Faça a diferença:</strong> Sua doação será encontrada por quem mais precisa em sua região.</li>
          </ul>
          <p className="call-to-action">
            Seja a mão que estende a ajuda! Cadastre sua doação agora e inspire a mudança.
          </p>
        </article>

        {/* Artigo/Subseção para Receptores */}
        <article className="content-section">
          <h3 className="subsection-title">
            Para Quem Recebe:
          </h3>
          <p>
            Se você ou sua família estão em busca de apoio, a Feira Solidária é o seu ponto de encontro com a esperança.
          </p>
          <ul className="content-list">
            <li><strong>Cadastre-se como receptor:</strong> Acesse uma rede de solidariedade em sua comunidade.</li>
            <li><strong>Busque o que precisa:</strong> Utilize filtros para encontrar doações disponíveis em sua região.</li>
            <li><strong>Acesse com facilidade:</strong> Conecte-se diretamente com doadores e retire os itens sem complicação.</li>
          </ul>
          <p className="call-to-action">
            Encontre o apoio que você precisa. Sua dignidade é nossa prioridade.
          </p>
        </article>
      </section>

      {/* Seção de Tecnologia e Chamada Final */}
      <section className="content-section">
        <h2 className="section-title">
          Tecnologia a Serviço da Humanidade
        </h2>
        <p>
          Por meio de um sistema intuitivo e eficiente, a Feira Solidária visa eliminar as barreiras sociais e burocráticas que muitas vezes dificultam o acesso à ajuda. Incentivamos a solidariedade prática, transformando a boa vontade em ações concretas e o acesso à necessidade em uma jornada mais simples.
        </p>
        <p className="call-to-action">
          Junte-se a nós! Seja um doador, seja um receptor. Juntos, construímos uma comunidade mais forte e solidária.
        </p>
      </section>

      {/* Contêiner da Imagem */}
      <div className="image-container">
        <img 
          src="https://placehold.co/800x450/ADD8E6/000000?text=Comunidade+Solidaria" 
          alt="Pessoas felizes interagindo em uma feira comunitária, com alimentos frescos e produtos essenciais em exposição, transmitindo união e esperança." 
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x450/cccccc/000000?text=Imagem+Nao+Disponivel'; }}
        />
      </div>

    </main>
  );
};

export default HomePage;
