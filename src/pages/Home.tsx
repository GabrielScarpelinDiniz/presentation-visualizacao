import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const slidesData = [
    {
      id: "data-visualization",
      title: "Visualização de Dados",
      description:
        "Aprenda as melhores práticas para criar visualizações eficazes e insights significativos a partir de dados.",
      icon: "📊",
      topics: [
        "Tipos de gráficos",
        "Ferramentas de visualização",
        "Design de dashboards",
      ],
    },
    {
      id: "supervised-learning",
      title: "Aprendizado Supervisionado",
      description:
        "Entenda os fundamentos do aprendizado supervisionado e como aplicá-lo em problemas reais.",
      icon: "🤖",
      topics: ["Regressão", "Classificação", "Modelos preditivos"],
    },
  ];

  return (
    <div className="home-container fade-in-up">
      <div className="hero-section">
        <h1 className="hero-title">Slides da aula</h1>
      </div>

      <div className="slides-grid">
        {slidesData.map((slide) => (
          <div key={slide.id} className="slide-card">
            <div className="slide-icon">{slide.icon}</div>
            <h3 className="slide-title">{slide.title}</h3>
            <p className="slide-description">{slide.description}</p>

            <div className="topics-list">
              {slide.topics.map((topic, index) => (
                <span key={index} className="topic-tag">
                  {topic}
                </span>
              ))}
            </div>

            <Link to={`/${slide.id}`} className="slide-button">
              Iniciar Apresentação →
            </Link>
          </div>
        ))}
      </div>

      <div className="additional-info">
        <div className="info-card">
          <h3>🎓 Sobre as Aulas</h3>
          <p>
            Estas aulas são projetadas para fornecer uma compreensão profunda
            dos conceitos de IA. Qualquer dúvida, contate alguém da liga.
          </p>
        </div>

        <div className="info-card">
          <h3>🛠️ Ferramentas Utilizadas</h3>
          <p>
            As aulas abordam ferramentas modernas como Python, Pandas,
            Matplotlib, Seaborn, Plotly, Scikit Learn e outras bibliotecas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
