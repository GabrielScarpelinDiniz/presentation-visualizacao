import React, { useEffect, useState } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";

// Import the highlighting plugin correctly
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import "reveal.js/plugin/highlight/monokai.css";

import "./slides.css"; // We'll create this file

const ChartSlide = ({
  pythonCode,
  resultImg,
  title,
  imageCaption,
}: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  pythonCode?: string;
  resultImg?: string;
  title?: string;
  imageCaption?: string;
}) => {
  return (
    <>
      <section>
        <h2 className="section-title">{title || "Chart Example"}</h2>
        <div style={{ display: "flex", marginTop: "2rem" }}>
          {/* Left side: code snippet */}
          <div style={{ width: "100%" }}>
            <pre
              style={{
                height: "100%",
                margin: 0,
                width: "100%",
                borderRadius: "8px",
                padding: "1rem",
              }}
            >
              <code
                className="language-python"
                style={{ textWrap: "wrap", fontSize: "0.9rem" }}
              >
                {pythonCode ||
                  `def saudacao(nome):
    print(f"Olá, {nome}!")
    
saudacao("Gabriel")`}
              </code>
            </pre>
          </div>

          {/* Right side: result image */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {resultImg ? (
              <>
                <img
                  src={resultImg}
                  alt={`${title} Result`}
                  style={{
                    maxWidth: "95%",
                    maxHeight: "70vh",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                  }}
                />
                {imageCaption && (
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "#666",
                      marginTop: "0.5rem",
                    }}
                  >
                    {imageCaption}
                  </p>
                )}
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  border: "2px dashed #ccc",
                  borderRadius: "8px",
                  padding: "2rem",
                }}
              >
                <p style={{ color: "#666", textAlign: "center" }}>
                  Resultado da visualização aparecerá aqui
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

// New component for explanation slides
const AnalysisSlide = ({
  children,
  style,
  imageUrl,
  title,
  imageCaption,
}: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  imageUrl: string;
  title: string;
  imageCaption?: string;
}) => {
  return (
    <section>
      <h2 className="section-title">{title}</h2>
      <div style={{ display: "flex", gap: "2rem" }}>
        {/* Left side: explanation text */}
        <div style={{ flex: 1, ...style, textAlign: "left" }}>{children}</div>

        {/* Right side: chart image */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={imageUrl}
            alt={`${title} visualization`}
            style={{
              maxWidth: "95%",
              maxHeight: "70vh",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              borderRadius: "8px",
            }}
          />
          {imageCaption && (
            <p
              style={{ fontSize: "0.8rem", color: "#666", marginTop: "0.2rem" }}
            >
              {imageCaption}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

const DataVisualizationSlides: React.FC = () => {
  const [quizWhatAreData, setQuizWhatAreData] = useState<
    "A" | "B" | "C" | "D" | null
  >(null);
  const [quizPandasDifference, setQuizPandasDifference] = useState<
    "A" | "B" | "C" | "D" | null
  >(null);

  useEffect(() => {
    const deck = new Reveal({
      hash: true,
      controls: true,
      progress: true,
      center: true,
      transition: "slide",
      backgroundTransition: "fade",
      width: "100%",
      height: "100%",
      margin: 0.04,
      minScale: 0.2,
      maxScale: 1.5,
      keyboard: true,
      overview: true,
      touch: true,
      embedded: false, // Changed to false for full-screen slides
      // Add plugins array with highlight plugin
      plugins: [RevealHighlight],
    });

    deck.initialize();

    return () => {
      deck.destroy();
    };
  }, []);

  return (
    <div className="slides-container">
      <div className="reveal">
        <div className="slides">
          {/* Slide 1: Título */}
          <section data-background="#fff" className="">
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <h1 className="slide-title">Visualização de Dados</h1>
              <h3 className="slide-subtitle">
                Transformando dados em insights visuais
              </h3>
              <img
                src="/src/assets/logo_fundo_claro.svg"
                alt="Inteli Academy"
                className="slide-logo"
                style={{
                  height: "100px",
                  marginTop: "1rem",
                  marginInline: "auto",
                }}
              />
            </div>
          </section>

          {/* Slide 2: Agenda */}
          <section>
            <h2 className="section-title">Agenda da Aula</h2>
            <div className="content-left">
              <ol className="agenda-list">
                <li>
                  📊 <strong>O que é Visualização de Dados?</strong>
                </li>
                <li>
                  🎯 <strong>Por que visualizar dados?</strong>
                </li>
                <li>
                  🧩 <strong>Conceitos fundamentais</strong>
                </li>
                <li>
                  📈 <strong>Tipos de visualizações</strong>
                </li>
                <li>
                  🔍 <strong>Análise univariada</strong>
                </li>
                <li>
                  🔗 <strong>Análise bivariada</strong>
                </li>
                <li>
                  🚀 <strong>Conclusões e próximos passos</strong>
                </li>
              </ol>
            </div>
          </section>

          {/* New Slide: Por que visualizar dados? */}
          <section>
            <h2 className="section-title">Por que visualizar dados?</h2>
            <div
              className="content-left"
              style={{ maxWidth: "90%", margin: "0 auto" }}
            >
              <ul className="importance-list">
                <li className="importance-item">
                  <div className="importance-icon">📊</div>
                  <div className="importance-content">
                    <strong>
                      Transformar números em insights compreensíveis
                    </strong>
                    <p>
                      Visualizações facilitam a interpretação de grandes volumes
                      de dados
                    </p>
                  </div>
                </li>

                <li className="importance-item">
                  <div className="importance-icon">🔎</div>
                  <div className="importance-content">
                    <strong>Identificar padrões e anomalias nos dados</strong>
                    <p>
                      Permite descobrir tendências e outliers que passariam
                      despercebidos em análises tabulares
                    </p>
                  </div>
                </li>

                <li className="importance-item">
                  <div className="importance-icon">🧪</div>
                  <div className="importance-content">
                    <strong>
                      Detectar problemas e vieses antes da modelagem
                    </strong>
                    <p>
                      Identificação precoce de questões que poderiam comprometer
                      análises futuras
                    </p>
                  </div>
                </li>

                <li className="importance-item">
                  <div className="importance-icon">📣</div>
                  <div className="importance-content">
                    <strong>Comunicar resultados de forma eficaz</strong>
                    <p>
                      Transmitir insights complexos para stakeholders de forma
                      acessível e persuasiva
                    </p>
                  </div>
                </li>

                <li className="importance-item">
                  <div className="importance-icon">🔄</div>
                  <div className="importance-content">
                    <strong>
                      Etapa essencial em projetos de IA e ciência de dados
                    </strong>
                    <p>
                      Componente crítico do ciclo de vida da análise de dados e
                      desenvolvimento de modelos
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="section-title">Afinal, o que são dados?</h2>

            {/* Alternative approach with separately contained fragments */}
            <div
              style={{ textAlign: "center", marginBottom: "2rem" }}
              id="data-question"
            >
              <div className="fragment fade-in">
                <button
                  className={`quiz-button ${
                    quizWhatAreData === "A" ? "selected" : ""
                  }`}
                  onClick={() => setQuizWhatAreData("A")}
                  style={{ marginBottom: "1rem", width: "100%" }}
                >
                  A) Dados são números e textos sem significado
                </button>
              </div>

              <div className="fragment fade-in">
                <button
                  className={`quiz-button ${
                    quizWhatAreData === "B" ? "selected" : ""
                  }`}
                  onClick={() => setQuizWhatAreData("B")}
                  style={{ marginBottom: "1rem", width: "100%" }}
                >
                  B) Dados são informações estruturadas e processáveis
                </button>
              </div>

              <div className="fragment fade-in">
                <button
                  className={`quiz-button ${
                    quizWhatAreData === "C" ? "selected" : ""
                  }`}
                  onClick={() => setQuizWhatAreData("C")}
                  style={{ marginBottom: "1rem", width: "100%" }}
                >
                  C) Dados são apenas gráficos e tabelas
                </button>
              </div>

              <div className="fragment fade-in">
                <button
                  className={`quiz-button ${
                    quizWhatAreData === "D" ? "selected" : ""
                  }`}
                  onClick={() => setQuizWhatAreData("D")}
                  style={{ marginBottom: "1rem", width: "100%" }}
                >
                  D) Dados são apenas imagens e vídeos
                </button>
              </div>
            </div>
            <div
              className="fragment fade-in"
              style={{
                marginTop: "1rem",
                marginInline: "auto",
                width: "50%",
              }}
            >
              {quizWhatAreData && quizWhatAreData === "B" ? (
                <p
                  className="quiz-feedback correct"
                  style={{
                    color: "#28a745",
                    textAlign: "center",
                    marginInline: "auto",
                  }}
                >
                  ✅ Correto! Dados são informações estruturadas e processáveis,
                  fundamentais para análise e tomada de decisão.
                </p>
              ) : (
                <p
                  className="quiz-feedback incorrect"
                  style={{ color: "#dc3545", textAlign: "center" }}
                >
                  ❌ Incorreto. Dados vão além de números e gráficos; eles
                  representam informações que podem ser analisadas e
                  interpretadas.
                </p>
              )}
            </div>
          </section>

          {/* New Slide: Tipos de Dados */}
          <section>
            <h2 className="section-title">Tipos de Dados na Visualização</h2>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <p
                className="regular-text"
                style={{ maxWidth: "80%", margin: "0 auto" }}
              >
                Entender os diferentes tipos de dados é fundamental para
                escolher as visualizações mais adequadas e extrair insights
                valiosos.
              </p>
            </div>

            <div className="data-structure-grid">
              <div className="data-structure-card card-blue fragment fade-up">
                <div className="data-structure-icon">📋</div>
                <h3 className="data-structure-title">Dados Qualitativos</h3>
                <p>Categorias, textos e atributos não numéricos</p>
              </div>

              <div
                className="data-structure-card card-green fragment fade-up"
                data-fragment-index="1"
              >
                <div className="data-structure-icon">📊</div>
                <h3 className="data-structure-title">Dados Quantitativos</h3>
                <p>Valores numéricos, medições e contagens</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="section-title">Dados Qualitativos / Categóricos</h2>

            <div
              style={{
                marginBottom: "1.5rem",
                maxWidth: "80%",
                marginInline: "auto",
              }}
            >
              <p className="regular-text" style={{ textAlign: "center" }}>
                Dados que expressam <strong>características</strong> ou{" "}
                <strong>atributos</strong> que não podem ser medidos
                numericamente.
              </p>
            </div>

            <div className="w-full">
              <div
                style={{
                  display: "flex",
                  gap: "4rem",
                  marginTop: "4rem",
                  marginInline: "auto",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Left column - Key characteristics */}
                <div className="text-left">
                  <h4
                    style={{
                      color: "#42A4FF",
                      marginBottom: "1rem",
                      fontSize: "1.3rem",
                    }}
                  >
                    Características
                  </h4>
                  <ul
                    style={{
                      listStyleType: "none",
                      padding: 0,
                      fontSize: "1.1rem",
                      lineHeight: 1.6,
                    }}
                  >
                    <li style={{ marginBottom: "0.8rem" }}>
                      ○ Expressos como texto ou categorias
                    </li>
                    <li style={{ marginBottom: "0.8rem" }}>
                      ○ <strong>Nominais</strong>: sem ordem (cor, gênero)
                    </li>
                    <li style={{ marginBottom: "0.8rem" }}>
                      ○ <strong>Ordinais</strong>: com ordem (ruim, bom, ótimo)
                    </li>
                  </ul>
                </div>

                {/* Right column - Examples */}
                <div className="text-left">
                  <h4
                    style={{
                      color: "#42A4FF",
                      marginBottom: "1rem",
                      fontSize: "1.3rem",
                    }}
                  >
                    Exemplos
                  </h4>
                  <ul
                    style={{
                      listStyleType: "none",
                      padding: 0,
                      fontSize: "1.1rem",
                      lineHeight: 1.6,
                    }}
                  >
                    <li style={{ marginBottom: "0.8rem" }}>
                      ○ Categorias: Gênero, Estado civil, Região
                    </li>
                    <li style={{ marginBottom: "0.8rem" }}>
                      ○ Textos: Comentários, Avaliações, Descrições
                    </li>
                    <li style={{ marginBottom: "0.8rem" }}>
                      ○ Escalas: Péssimo → Excelente
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image placeholder - simplified */}
            <div
              style={{
                margin: "2rem auto 0",
                maxWidth: "70%",
                height: "220px",
                border: "1px solid #eaeaea",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              <img
                src="https://blog.olyng.com/assets/images/uploads/dados-qualitativos.png"
                alt="Exemplo de Dados Qualitativos"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>

            {/* Simple note about processing - optional, can be removed if too cluttered */}
            <div
              className="fragment fade-in"
              style={{
                maxWidth: "80%",
                margin: "1.5rem auto 0",
                padding: "0.8rem 1.5rem",
                borderLeft: "3px solid #42A4FF",
                backgroundColor: "rgba(66, 164, 255, 0.05)",
                borderRadius: "0 8px 8px 0",
              }}
            >
              <p style={{ margin: 0, fontSize: "0.95rem", color: "#555" }}>
                <strong>Processamento:</strong> Para uso em modelos de ML, dados
                qualitativos precisam ser transformados em representações
                numéricas (ex: <i>one-hot encoding</i>, <i>embeddings</i>).
              </p>
            </div>
          </section>

          {/* New slide for Quantitative Data */}
          <section>
            <h2 className="section-title">Dados Quantitativos / Numéricos</h2>

            <div
              style={{
                marginBottom: "1.5rem",
                maxWidth: "80%",
                marginInline: "auto",
              }}
            >
              <p className="regular-text" style={{ textAlign: "center" }}>
                Dados que expressam <strong>quantidades</strong> ou{" "}
                <strong>medidas</strong> que podem ser representados
                numericamente.
              </p>
            </div>

            <div className="w-full">
              <div
                style={{
                  display: "flex",
                  gap: "4rem",
                  marginTop: "4rem",
                  marginInline: "auto",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Left column - Key characteristics */}
                <div className="text-left">
                  <h4
                    style={{
                      color: "#42A4FF",
                      marginBottom: "1rem",
                      fontSize: "1.3rem",
                    }}
                  >
                    Características
                  </h4>
                  <ul
                    style={{
                      listStyleType: "none",
                      padding: 0,
                      fontSize: "1.1rem",
                      lineHeight: 1.6,
                    }}
                  >
                    <li style={{ marginBottom: "0.8rem" }}>
                      ○ Podem ser medidos e contados
                    </li>
                    <li style={{ marginBottom: "0.8rem" }}>
                      ○ <strong>Discretos</strong>: valores inteiros contáveis
                      (quantidade de pessoas)
                    </li>
                    <li style={{ marginBottom: "0.8rem" }}>
                      ○ <strong>Contínuos</strong>: valores em uma escala
                      contínua (altura, temperatura)
                    </li>
                  </ul>
                </div>

                {/* Right column - Examples */}
                <div className="text-left">
                  <h4
                    style={{
                      color: "#42A4FF",
                      marginBottom: "1rem",
                      fontSize: "1.3rem",
                    }}
                  >
                    Exemplos
                  </h4>
                  <ul
                    style={{
                      listStyleType: "none",
                      padding: 0,
                      fontSize: "1.1rem",
                      lineHeight: 1.6,
                    }}
                  >
                    <li style={{ marginBottom: "0.8rem" }}>
                      ○ Medições: Altura, Peso, Temperatura
                    </li>
                    <li style={{ marginBottom: "0.8rem" }}>
                      ○ Contagens: Número de clientes, Frequência
                    </li>
                    <li style={{ marginBottom: "0.8rem" }}>
                      ○ Valores: Preço, Tempo decorrido, Idade
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image placeholder */}
            <div
              style={{
                margin: "2rem auto 0",
                maxWidth: "70%",
                height: "220px",
                border: "1px solid #eaeaea",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              <img
                src="https://blog.olyng.com/assets/images/uploads/dados-quantitativos.png"
                alt="Exemplo de Dados Quantitativos"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>

            {/* Note about statistical analysis */}
            <div
              className="fragment fade-in"
              style={{
                maxWidth: "80%",
                margin: "1.5rem auto 0",
                padding: "0.8rem 1.5rem",
                borderLeft: "3px solid #42A4FF",
                backgroundColor: "rgba(66, 164, 255, 0.05)",
                borderRadius: "0 8px 8px 0",
              }}
            >
              <p style={{ margin: 0, fontSize: "0.95rem", color: "#555" }}>
                <strong>Análise:</strong> Dados quantitativos permitem análises
                estatísticas como média, mediana, desvio padrão e correlações.
                Essenciais para modelagem preditiva e inferência estatística.
              </p>
            </div>
          </section>

          <section>
            <h2 className="section-title">Resumão</h2>
            <div className="w-full" style={{ marginTop: "4rem" }}>
              <sup>
                <p style={{ fontSize: "0.9rem", color: "#666" }}>
                  <strong>Distribuição de dados:</strong>
                </p>
              </sup>
              <img
                src="https://www.computersciencemaster.com.br/wp-content/uploads/2021/03/variaveis.jpg"
                alt="Exemplo de Dados Quantitativos"
                style={{ width: "50%", height: "auto", margin: "0 auto" }}
              />
              <sub
                style={{
                  display: "block",
                  textAlign: "center",
                  fontSize: "0.8rem",
                  color: "#666",
                  marginTop: "2rem",
                }}
              >
                Fonte: Computer Science Master
              </sub>
            </div>
          </section>

          {/* New slide about data structures */}
          <section>
            <h2 className="section-title">Estruturas de Dados</h2>

            <div
              style={{
                marginBottom: "1.5rem",
                maxWidth: "80%",
                marginInline: "auto",
              }}
            >
              <p className="regular-text" style={{ textAlign: "center" }}>
                Além do tipo, os dados podem ser classificados conforme sua{" "}
                <strong>estrutura</strong> e <strong>organização</strong>.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                maxWidth: "85%",
                margin: "0 auto",
              }}
            >
              {/* Structured Data */}
              <div
                className="fragment fade-up"
                style={{
                  display: "flex",
                  padding: "1.2rem",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg, rgba(66, 164, 255, 0.05), rgba(30, 64, 175, 0.08))",
                  border: "1px solid rgba(66, 164, 255, 0.2)",
                  alignItems: "center",
                  gap: "1.5rem",
                }}
              >
                <div className="text-3xl w-full">
                  <h4
                    style={{
                      color: "#42A4FF",
                      marginBottom: "0.5rem",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Dados Estruturados
                  </h4>
                  <p style={{ margin: 0 }}>
                    Formato rígido e bem definido. <strong>Exemplos:</strong>{" "}
                    Planilhas, bancos de dados SQL, CSV.
                    <span
                      style={{
                        display: "block",
                        marginTop: "0.5rem",
                        fontSize: "0.9rem",
                        color: "#666",
                      }}
                    >
                      São os mais fáceis de processar e analisar. Organizados em
                      linhas e colunas com tipos de dados consistentes.
                    </span>
                  </p>
                </div>
              </div>

              {/* Semi-structured Data */}
              <div
                className="fragment fade-up"
                style={{
                  display: "flex",
                  padding: "1.2rem",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(76, 29, 149, 0.08))",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                  alignItems: "center",
                  gap: "1.5rem",
                }}
              >
                <div className="text-3xl w-full">
                  <h4
                    style={{
                      color: "#8B5CF6",
                      marginBottom: "0.5rem",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Dados Semi-estruturados
                  </h4>
                  <p style={{ margin: 0 }}>
                    Não possuem formato rígido, mas têm elementos
                    organizacionais. <strong>Exemplos:</strong> JSON, XML, HTML.
                    <span
                      style={{
                        display: "block",
                        marginTop: "0.5rem",
                        fontSize: "0.9rem",
                        color: "#666",
                      }}
                    >
                      Possuem tags ou marcadores que facilitam a interpretação,
                      permitem hierarquia e relações flexíveis.
                    </span>
                  </p>
                </div>
              </div>

              {/* Unstructured Data */}
              <div
                className="fragment fade-up"
                style={{
                  display: "flex",
                  padding: "1.2rem",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(6, 78, 59, 0.08))",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  alignItems: "center",
                  gap: "1.5rem",
                }}
              >
                <div className="text-3xl w-full">
                  <h4
                    style={{
                      color: "#10B981",
                      marginBottom: "0.5rem",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Dados Não-estruturados
                  </h4>
                  <p style={{ margin: 0 }}>
                    Sem estrutura formal definida. <strong>Exemplos:</strong>{" "}
                    Imagens, vídeos, áudios, textos livres.
                    <span
                      style={{
                        display: "block",
                        marginTop: "0.5rem",
                        fontSize: "0.9rem",
                        color: "#666",
                      }}
                    >
                      Representam a maior parte dos dados gerados atualmente.
                      Requerem técnicas avançadas de processamento.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="fragment fade-in"
              style={{
                maxWidth: "80%",
                margin: "2rem auto 0",
                padding: "1rem",
                backgroundColor: "rgba(66, 164, 255, 0.05)",
                borderRadius: "8px",
                textAlign: "center",
                fontSize: "1.8rem",
              }}
            >
              <p style={{ margin: 0, color: "#555" }}>
                <strong>Desafio:</strong> Grande parte do trabalho em ciência de
                dados envolve transformar dados não-estruturados em formatos
                estruturados para análise e modelagem.
              </p>
            </div>
          </section>

          <section>
            <h2 className="section-title">Imagem de exemplo</h2>
            <div
              style={{
                margin: "8rem auto 0",
                maxWidth: "70%",
                height: "400px",
                border: "1px solid #eaeaea",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              <img
                src="https://static.wixstatic.com/media/c10b0b_68fa8fa7ce76416ca72234747a0b73c2~mv2.png/v1/fit/w_1000,h_1000,al_c,q_80/file.jpg"
                alt="Imagem mostrando diferentes tipos de dados"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
              <sub
                style={{
                  display: "block",
                  textAlign: "center",
                  fontSize: "0.8rem",
                  color: "#666",
                  marginTop: "1rem",
                }}
              >
                Fonte: Dataside
              </sub>
            </div>
          </section>

          {/* New Pandas Quiz Slide */}
          <section>
            <h2 className="section-title">Revisão: Pandas</h2>
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <p
                className="regular-text"
                style={{
                  maxWidth: "80%",
                  margin: "4rem auto",
                  fontSize: "2rem",
                }}
              >
                Relembrando da aula passada: Qual a principal diferença entre
                Series e DataFrame no pandas?
              </p>
            </div>

            {/* Quiz options */}
            <div
              style={{ textAlign: "center", marginBottom: "2rem" }}
              id="data-question"
            >
              <div className="fragment fade-in">
                <button
                  className={`quiz-button ${
                    quizPandasDifference === "A" ? "selected" : ""
                  }`}
                  onClick={() => setQuizPandasDifference("A")}
                  style={{ marginBottom: "1rem", width: "100%" }}
                >
                  A) Series é para dados textuais, DataFrame é para dados
                  numéricos
                </button>
              </div>

              <div className="fragment fade-in">
                <button
                  className={`quiz-button ${
                    quizPandasDifference === "B" ? "selected" : ""
                  }`}
                  onClick={() => setQuizPandasDifference("B")}
                  style={{ marginBottom: "1rem", width: "100%" }}
                >
                  B) Series é unidimensional (1D), DataFrame é bidimensional
                  (2D)
                </button>
              </div>

              <div className="fragment fade-in">
                <button
                  className={`quiz-button ${
                    quizPandasDifference === "C" ? "selected" : ""
                  }`}
                  onClick={() => setQuizPandasDifference("C")}
                  style={{ marginBottom: "1rem", width: "100%" }}
                >
                  C) Series não tem índices, DataFrame tem índices
                </button>
              </div>

              <div className="fragment fade-in">
                <button
                  className={`quiz-button ${
                    quizPandasDifference === "D" ? "selected" : ""
                  }`}
                  onClick={() => setQuizPandasDifference("D")}
                  style={{ marginBottom: "1rem", width: "100%" }}
                >
                  D) Series é para análise estatística, DataFrame é para
                  visualização
                </button>
              </div>
            </div>

            {/* Feedback section */}
            <div
              className="fragment fade-in"
              style={{
                marginTop: "1rem",
                marginInline: "auto",
                width: "70%",
              }}
            >
              {quizPandasDifference && quizPandasDifference === "B" ? (
                <div
                  className="quiz-feedback correct"
                  style={{ color: "#28a745", textAlign: "center" }}
                >
                  <p style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                    ✅ Correto!
                  </p>
                  <p style={{ fontSize: "1.3rem" }}>
                    Series é uma estrutura unidimensional similar a um array ou
                    lista, enquanto DataFrame é uma estrutura tabular
                    bidimensional com linhas e colunas, como uma planilha ou
                    tabela SQL. Vale lembrar também que, quando combinamos os
                    índices de um Series, formamos um dataframe.
                  </p>
                </div>
              ) : quizPandasDifference ? (
                <div
                  className="quiz-feedback incorrect"
                  style={{ color: "#dc3545", textAlign: "center" }}
                >
                  <p style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                    ❌ Incorreto
                  </p>
                  <p>
                    Ambos Series e DataFrame podem conter qualquer tipo de dado.
                    A diferença principal é que Series é uma estrutura
                    unidimensional (como uma coluna), enquanto DataFrame é
                    bidimensional (linhas e colunas).
                  </p>
                </div>
              ) : null}
            </div>
          </section>
          <section>
            <h3 className="section-title">
              Antes... Um pouquinho de estatística
            </h3>
            <h6>Vamos para a lousa</h6>
          </section>
          <section>
            <h2 className="section-title">Dataset da aula de hoje</h2>
            <div
              style={{
                textAlign: "center",
                marginBottom: "2rem",
                maxWidth: "80%",
                margin: "0 auto",
              }}
            >
              <p className="regular-text">
                Nesta aula, vamos trabalhar com o dataset de perfomance de
                alunos baseado no seu tempo de estudo e uso de redes sociais.
              </p>
              <a
                href="https://www.kaggle.com/datasets/jayaantanaath/student-habits-vs-academic-performance"
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#42A4FF",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "5px",
                  fontSize: "1.2rem",
                }}
                target="_blank"
              >
                ACESSAR DATASET
              </a>
            </div>
          </section>

          {/* Section Header for Univariate Analysis */}
          <section>
            <h2 className="section-title">Análise Univariada</h2>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <p
                className="regular-text"
                style={{ maxWidth: "80%", margin: "0 auto" }}
              >
                Análise de uma única variável por vez para entender sua
                distribuição e características.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.5rem",
                maxWidth: "90%",
                margin: "2rem auto",
              }}
            >
              <div className="chart-type-card">
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                  📊
                </div>
                <h3>Distribuição</h3>
                <p>Histogramas, Densidade, Box plots</p>
              </div>

              <div className="chart-type-card">
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                  📈
                </div>
                <h3>Contagem</h3>
                <p>Gráficos de barras, Gráficos de pizza</p>
              </div>

              <div className="chart-type-card">
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                  🔍
                </div>
                <h3>Tendência</h3>
                <p>Gráficos de linha ao longo do tempo</p>
              </div>
            </div>
          </section>

          {/* Histogram - Explanation Slide */}
          <AnalysisSlide
            title="Histograma"
            imageUrl="https://leansixsigmabrasil.com.br/site/wp-content/uploads/2020/01/Exemplo-de-histograma-de-temperatura.jpg"
            imageCaption="Exemplo de histograma. Fonte: Lean Six Sigma Brasil"
          >
            <h3 style={{ color: "#42A4FF", marginBottom: "1rem" }}>
              O que é um Histograma?
            </h3>
            <p>
              Um histograma é uma representação gráfica da{" "}
              <strong>distribuição de frequência</strong> de dados numéricos
              contínuos.
            </p>

            <h4
              style={{
                color: "#42A4FF",
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Características:
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                • Divida os dados em intervalos (bins)
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Conta quantos valores caem em cada intervalo
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Altura das barras representa a frequência
              </li>
            </ul>

            <h4
              style={{
                color: "#42A4FF",
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Quando usar:
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para entender a distribuição de dados numéricos
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para identificar assimetrias e multimodalidade
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para detectar outliers
              </li>
            </ul>
          </AnalysisSlide>

          {/* Histogram - Code Slide */}
          <ChartSlide
            title="Histograma - Implementação"
            pythonCode={`import pandas as pd
df = pd.read_csv('/content/student_habits_performance.csv')
df.plot.hist(y='sleep_hours', bins=10, edgecolor='black')
`}
            resultImg="src/assets/histograma.png"
            imageCaption="Exemplo de histograma em Python. Fonte: Material da aula"
          />

          {/* Boxplot - Explanation Slide */}
          <AnalysisSlide
            title="Box Plot"
            imageUrl="https://miro.medium.com/v2/resize:fit:1400/1*2c21SkzJMf3frPXPAR_gZA.png"
            imageCaption="Anatomia de um Box Plot. Fonte: Towards Data Science"
          >
            <h3 style={{ color: "#42A4FF", marginBottom: "1rem" }}>
              O que é um Box Plot?
            </h3>
            <p>
              Um box plot (ou diagrama de caixa) é uma representação gráfica da{" "}
              <strong>distribuição estatística</strong> dos dados através de
              quartis.
            </p>

            <h4
              style={{
                color: "#42A4FF",
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Elementos principais:
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                • <strong>Caixa central:</strong> representa o intervalo
                interquartil (Q1 a Q3)
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • <strong>Linha central:</strong> mediana (Q2)
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • <strong>Bigodes:</strong> extensão dos dados até 1.5 * IQR
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • <strong>Pontos:</strong> outliers (valores além dos bigodes)
              </li>
            </ul>

            <h4
              style={{
                color: "#42A4FF",
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Quando usar:
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para comparar distribuições entre grupos
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para identificar assimetria
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para detectar e visualizar outliers
              </li>
            </ul>
          </AnalysisSlide>

          {/* Boxplot - Code Slide */}
          <ChartSlide
            title="Box Plot - Implementação"
            pythonCode={`import pandas as pd
df = pd.read_csv('/content/student_habits_performance.csv')
df.plot.box(y='sleep_hours')`}
            resultImg="src/assets/boxplot.png"
            imageCaption="Exemplo de boxplots comparando grupos. Fonte: Material da aula"
          />

          {/* Bar Chart - Explanation Slide */}
          <AnalysisSlide
            title="Gráfico de Barras"
            imageUrl="https://www.hashtagtreinamentos.com/wp-content/uploads/2020/10/Grafico-de-Barras-12.png"
            imageCaption="Exemplo de gráfico de barras. Fonte: Chartio"
          >
            <h3 style={{ color: "#42A4FF", marginBottom: "1rem" }}>
              O que é um Gráfico de Barras?
            </h3>
            <p>
              Um gráfico de barras representa dados categóricos com barras
              retangulares, onde o comprimento é proporcional ao valor que
              representam.
            </p>

            <h4
              style={{
                color: "#42A4FF",
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Características:
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                • Compara valores entre diferentes categorias
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Pode ser vertical (barras) ou horizontal (barras horizontais)
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Pode exibir contagens, frequências ou outros valores agregados
              </li>
            </ul>

            <h4
              style={{
                color: "#42A4FF",
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Quando usar:
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para comparar valores entre categorias distintas
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para mostrar distribuição de dados categóricos
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Quando a ordem das barras pode transmitir informação adicional
              </li>
            </ul>
          </AnalysisSlide>

          <ChartSlide
            title="Gráfico de Barras - Implementação"
            pythonCode={`import pandas as pd
df = pd.read_csv('/content/student_habits_performance.csv')
df['gender'].value_counts().plot.bar()`}
            resultImg="src/assets/barplot2.png"
            imageCaption="Exemplo de gráfico de barras em Python. Fonte: Material da aula"
          />

          {/* Bar Chart - Code Slide */}
          <ChartSlide
            title="Gráfico de Barras - Implementação"
            pythonCode={`import pandas as pd
df = pd.read_csv('/content/student_habits_performance.csv')
df.groupby('internet_quality')['exam_score'].mean().plot.bar()`}
            resultImg="src/assets/barplot.png"
            imageCaption="Exemplo de gráfico de barras em Python. Fonte: Material da aula"
          />

          {/* Pie Chart - Explanation Slide */}
          <AnalysisSlide
            title="Gráfico de Pizza"
            imageUrl="https://andersonmdcanteli.github.io/images/curso-matplotlib/grafico-pizza/74/grafico-pizza-02.png"
            imageCaption="Exemplo de gráfico de pizza. Fonte: Jotform"
          >
            <h3 style={{ color: "#42A4FF", marginBottom: "1rem" }}>
              O que é um Gráfico de Pizza?
            </h3>
            <p>
              Um gráfico de pizza (ou gráfico circular) divide um círculo em
              fatias para ilustrar proporções numéricas ou porcentagens de um
              todo.
            </p>

            <h4
              style={{
                color: "#42A4FF",
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Características:
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                • Cada fatia representa uma categoria
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • O tamanho da fatia corresponde à proporção do valor
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • A soma de todas as fatias representa 100% do total
              </li>
            </ul>

            <h4
              style={{
                color: "#42A4FF",
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Quando usar (com cautela):
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para mostrar a composição de um todo
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Quando há poucas categorias (idealmente menos de 6)
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • <strong>Observação:</strong> Especialistas em dados geralmente
                preferem gráficos de barras, que permitem comparações mais
                precisas
              </li>
            </ul>
          </AnalysisSlide>

          {/* Pie Chart - Code Slide */}
          <ChartSlide
            title="Gráfico de Pizza - Implementação"
            pythonCode={`import pandas as pd
df = pd.read_csv('/content/student_habits_performance.csv')
df['internet_quality'].value_counts().plot.pie(autopct='%1.1f%%', startangle=90, colors=['#FF6384', '#36A2EB', '#FFCE56'])
              `}
            resultImg="src/assets/pieplot.png"
            imageCaption="Exemplo de gráfico de pizza em Python. Fonte: Matplotlib"
          />

          {/* Density Plot - Explanation Slide */}
          <AnalysisSlide
            title="Gráfico de Densidade"
            imageUrl="https://miro.medium.com/v2/resize:fit:1400/0*n07oUTuHYMboQi5r"
            imageCaption="Exemplo de gráfico de densidade. Fonte: Seaborn"
          >
            <h3 style={{ color: "#42A4FF", marginBottom: "1rem" }}>
              O que é um Gráfico de Densidade?
            </h3>
            <p>
              Um gráfico de densidade (ou KDE - Kernel Density Estimation)
              mostra a distribuição de uma variável contínua como uma curva
              suave.
            </p>

            <h4
              style={{
                color: "#42A4FF",
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Características:
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                • Versão suavizada de um histograma
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Mostra onde os valores estão concentrados
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Permite identificar multimodalidade (múltiplos picos)
              </li>
            </ul>

            <h4
              style={{
                color: "#42A4FF",
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Quando usar:
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para visualizar distribuições contínuas de forma suave
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para comparar distribuições de diferentes grupos
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Quando um histograma parece "ruidoso" ou irregular
              </li>
            </ul>
          </AnalysisSlide>

          {/* Density Plot - Code Slide */}
          <ChartSlide
            title="Gráfico de Densidade - Implementação"
            pythonCode={`import pandas as pd
df = pd.read_csv('/content/student_habits_performance.csv')
df['sleep_hours'].plot.kde(bw_method=0.5, color='blue', linewidth=2)
              `}
            resultImg="src/assets/kde.png"
            imageCaption="Exemplo de gráficos de densidade em Python. Fonte: Seaborn"
          />

          <section>
            <h2 className="section-title">
              Interpretação do gráfico de densidade e histograma
            </h2>
            <div
              style={{
                margin: "4rem auto",
                maxWidth: "80%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              <div>
                <img
                  src="https://blog.proffernandamaciel.com.br/wp-content/uploads/2022/02/modalidade.jpeg"
                  alt="Modalidade"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <sub
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontSize: "0.8rem",
                    color: "#666",
                    marginTop: "1rem",
                  }}
                >
                  Fonte: Blog do Professor Fernando Maciel
                </sub>
              </div>
              <div
                style={{
                  marginLeft: "2rem",
                  textAlign: "left",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                }}
              >
                <img
                  src="https://i0.wp.com/content.dynamox.net/wp-content/uploads/2023/03/skewness.webp?resize=750%2C326&ssl=1"
                  alt="Assimetria"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <sub
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontSize: "0.8rem",
                    color: "#666",
                    marginTop: "1rem",
                  }}
                >
                  Fonte: Dynamox
                </sub>
              </div>
            </div>
          </section>

          {/* Section Header for Bivariate Analysis */}
          <section>
            <h2 className="section-title">Análise Bivariada</h2>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <p
                className="regular-text"
                style={{ maxWidth: "80%", margin: "0 auto" }}
              >
                Análise da relação entre duas variáveis, identificando padrões,
                tendências e correlações.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.5rem",
                maxWidth: "90%",
                margin: "2rem auto",
              }}
            >
              <div className="chart-type-card">
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                  📊
                </div>
                <h3>Scatter Plot</h3>
                <p>Relação entre variáveis numéricas</p>
              </div>

              <div className="chart-type-card">
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                  🔄
                </div>
                <h3>Correlação</h3>
                <p>Força e direção da relação</p>
              </div>

              <div className="chart-type-card">
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                  📈
                </div>
                <h3>Séries Temporais</h3>
                <p>Evolução de variáveis ao longo do tempo</p>
              </div>
            </div>
          </section>

          {/* Scatter Plot - Explanation Slide */}
          <AnalysisSlide
            title="Scatter Plot (Gráfico de Dispersão)"
            imageUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6J_McAL09Cj_BwC_cbSCGlPtNFvFAPVW_qzA2QMdVCp0tovVzFd-GgFiHiwVxOGrApcrL4-3HZB-AKQVQ-DuAww07luGfTOcaREyq3tow8XRROJiBpa0oWeilKvFOfGhuh1ZSenWlz09F/s1600/dispersao+peso+x+alt.png"
            imageCaption="Exemplo de scatter plot mostrando correlações. Fonte: SabherMed"
          >
            <h3 style={{ color: "#42A4FF", marginBottom: "1rem" }}>
              O que é um Scatter Plot?
            </h3>
            <p>
              Um gráfico de dispersão mostra a relação entre duas variáveis
              numéricas, exibindo pontos onde cada coordenada corresponde aos
              valores das variáveis.
            </p>

            <h4
              style={{
                color: "#42A4FF",
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Características:
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                • Cada ponto representa uma observação/registro
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Posição no eixo X e Y mostra os valores das duas variáveis
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Padrão dos pontos revela relações (linear, não-linear)
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Pode incorporar uma terceira variável via cor ou tamanho dos
                pontos
              </li>
            </ul>

            <h4
              style={{
                color: "#42A4FF",
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Quando usar:
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para investigar relações entre variáveis numéricas
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para identificar correlações e tendências
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para detectar clusters e outliers
              </li>
            </ul>
          </AnalysisSlide>

          {/* Scatter Plot - Code Slide */}
          <ChartSlide
            title="Scatter Plot - Implementação"
            pythonCode={`import pandas as pd
df = pd.read_csv('/content/student_habits_performance.csv')
df.plot.scatter(x='study_hours', y='exam_score', alpha=0.5, color='blue', s=50, edgecolor='black')
`}
            resultImg="src/assets/scatterplot.png"
            imageCaption="Exemplo de scatter plot com múltiplas variáveis. Fonte: Seaborn"
          />

          {/* Correlation - Explanation Slide */}
          <AnalysisSlide
            title="Matriz de Correlação"
            imageUrl="https://miro.medium.com/v2/resize:fit:853/1*qos4XleVY1X1RevkjjS2uA.png"
            imageCaption="Exemplo de matriz de correlação. Fonte: Medium"
          >
            <h3 style={{ color: "#42A4FF", marginBottom: "1rem" }}>
              O que é uma Matriz de Correlação?
            </h3>
            <p>
              Uma matriz de correlação mostra os coeficientes de correlação
              entre múltiplas variáveis, geralmente visualizada como um heatmap.
            </p>

            <h4
              style={{
                color: "#42A4FF",
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Características:
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                • Tabela quadrada com variáveis nas linhas e colunas
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Valores variam de -1 (correlação negativa perfeita) a 1
                (correlação positiva perfeita)
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • 0 indica ausência de correlação linear
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Visualizada como heatmap com escala de cores
              </li>
            </ul>

            <h4
              style={{
                color: "#42A4FF",
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Quando usar:
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para identificar relações entre múltiplas variáveis
                simultaneamente
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para detectar multicolinearidade em análise preditiva
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para guiar seleção de variáveis em modelos
              </li>
            </ul>
          </AnalysisSlide>

          {/* Correlation - Code Slide */}
          <ChartSlide
            title="Matriz de Correlação - Implementação"
            pythonCode={`import pandas as pd

df = pd.read_csv('/content/student_habits_performance.csv')
correlation_matrix = df.corr()
import seaborn as sns
import matplotlib.pyplot as plt
plt.figure(figsize=(10, 8))
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', fmt='.2f', square=True, cbar_kws={"shrink": .8})
plt.title('Matriz de Correlação')
plt.show()
`}
            resultImg="src/assets/correlation.png"
            imageCaption="Exemplo de matriz de correlação visualizada como heatmap. Fonte: Seaborn"
          />

          {/* Time Series - Explanation Slide */}
          <AnalysisSlide
            title="Séries Temporais"
            imageUrl="https://mariofilho.com/img/guia_ts/0.png"
            imageCaption="Exemplo de visualização de séries temporais. Fonte: Mario Filho"
          >
            <h3 style={{ color: "#42A4FF", marginBottom: "1rem" }}>
              O que são Gráficos de Séries Temporais?
            </h3>
            <p>
              Visualizações que mostram a evolução de uma ou mais variáveis ao
              longo do tempo, permitindo identificar padrões temporais,
              tendências e sazonalidades.
            </p>

            <h4
              style={{
                color: "#42A4FF",
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Características:
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                • Tempo no eixo X, variável(is) no eixo Y
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Pontos conectados por linhas para mostrar a continuidade
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Podem mostrar múltiplas séries para comparação
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Permitem identificar componentes: tendência, sazonalidade,
                ciclos, ruído
              </li>
            </ul>

            <h4
              style={{
                color: "#42A4FF",
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Quando usar:
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para analisar dados que evoluem no tempo
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para detectar padrões sazonais
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para identificar pontos de mudança e anomalias
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                • Para prever tendências futuras
              </li>
            </ul>
          </AnalysisSlide>

          {/* Time Series - Code Slide */}
          <ChartSlide
            title="Séries Temporais - Implementação"
            pythonCode={`import pandas as pd

df = pd.read_csv('/content/air_quality_data.csv')
df["DateTime"] = pd.to_datetime(df["Date"] + ' ' + df["Time"])

df.groupby(df["DateTime"].dt.date).agg({'PM10': 'mean'}).plot(title='Média diária de NO2 e PM10', xlabel='Data', ylabel='Concentração (µg/m³)', figsize=(12, 6))

              `}
            resultImg="src/assets/temporalserie.png"
            imageCaption="Exemplo de visualização de séries temporais. Fonte: Matplotlib"
          />

          {/* Insights e Conclusões */}
          <section>
            <h2 className="section-title">
              Transformando Visualizações em Insights
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              <div>
                <h3 style={{ color: "#0e6cbe", marginBottom: "1.5rem" }}>
                  🎯 Perguntas-Chave
                </h3>
                <ul
                  style={{
                    textAlign: "left",
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                  }}
                >
                  <li>O que os dados estão me mostrando?</li>
                  <li>Existem padrões inesperados?</li>
                  <li>Quais são os outliers e por quê?</li>
                  <li>Como isso impacta o negócio?</li>
                  <li>Que ações posso tomar?</li>
                </ul>
              </div>

              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "8rem", marginBottom: "1rem" }}>💡</div>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#666",
                    fontStyle: "italic",
                  }}
                >
                  "Dados sem insights são apenas números.
                  <br />
                  Insights sem ação são apenas curiosidades."
                </p>
              </div>
            </div>
          </section>

          {/* Slide final */}
          <section data-background="linear-gradient(to bottom right, #f5f7fa, #e4eff9)">
            <h2 className="section-title">Recursos & Próximos Passos</h2>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "3rem",
                marginTop: "2rem",
                maxWidth: "85%",
                margin: "0 auto",
              }}
            >
              {/* Coluna de recursos */}
              <div style={{ flex: 1 }}>
                <h3 style={{ color: "#0e6cbe", marginBottom: "1.2rem" }}>
                  Recursos Úteis
                </h3>
                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    textAlign: "left",
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                  }}
                >
                  <li style={{ marginBottom: "0.8rem" }}>
                    <strong>Docs:</strong>
                    <a
                      href="https://matplotlib.org/"
                      target="_blank"
                      style={{ marginLeft: "0.5rem", color: "#1a73e8" }}
                    >
                      Matplotlib
                    </a>
                    ,
                    <a
                      href="https://seaborn.pydata.org/"
                      target="_blank"
                      style={{ marginLeft: "0.5rem", color: "#1a73e8" }}
                    >
                      Seaborn
                    </a>
                  </li>
                  <li style={{ marginBottom: "0.8rem" }}>
                    <strong>Datasets:</strong>
                    <a
                      href="https://www.kaggle.com/datasets"
                      target="_blank"
                      style={{ marginLeft: "0.5rem", color: "#1a73e8" }}
                    >
                      Kaggle
                    </a>
                    ,
                    <a
                      href="https://data.gov/"
                      target="_blank"
                      style={{ marginLeft: "0.5rem", color: "#1a73e8" }}
                    >
                      Data.gov
                    </a>
                  </li>
                </ul>
              </div>

              {/* Coluna de próximos passos */}
              <div style={{ flex: 1 }}>
                <h3 style={{ color: "#0e6cbe", marginBottom: "1.2rem" }}>
                  🚀 Próximos Passos
                </h3>
                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    textAlign: "left",
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                  }}
                >
                  <li style={{ marginBottom: "0.8rem" }}>
                    ✅ Aprender técnicas avançadas de visualização de dados
                    multidimensionais
                  </li>
                </ul>
              </div>
            </div>

            {/* Linha de separação */}
            <div
              style={{
                width: "60%",
                height: "2px",
                background:
                  "linear-gradient(to right, transparent, rgba(66, 164, 255, 0.6), transparent)",
                margin: "2rem auto",
              }}
            ></div>

            {/* Obrigado e logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1.5rem",
                gap: "3rem",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    color: "#333",
                    marginBottom: "0.5rem",
                  }}
                >
                  Obrigado!
                </h2>
                <p style={{ fontSize: "1.3rem", color: "#555" }}>
                  Alguma pergunta?
                </p>
              </div>

              <img
                src="/src/assets/logo_fundo_claro.svg"
                alt="Inteli Academy"
                style={{
                  height: "110px",
                }}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataVisualizationSlides;
