import React, { useEffect } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";

// Import the highlighting plugin correctly
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import "reveal.js/plugin/highlight/monokai.css";

import "./slides.css";
import { BrainCircuit, ScanQrCode } from "lucide-react";

const SupervisedLearning: React.FC = () => {
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
              <h1
                className="section-title"
                style={{ marginTop: "2rem", fontSize: "3rem" }}
              >
                Modelos Supervisionados
              </h1>
              <h3 style={{ color: "#666", marginTop: "1rem" }}>
                Machine Learning & Inteligência Artificial
              </h3>
            </div>
          </section>

          {/* Slide 2: Agenda */}
          <section>
            <h2 className="section-title">Agenda da Aula</h2>
            <div
              className="content-left"
              style={{ maxWidth: "80%", margin: "0 auto" }}
            >
              <ul
                style={{
                  fontSize: "1.5rem",
                  lineHeight: "2",
                  listStyle: "none",
                  padding: 0,
                }}
              >
                <li>
                  🧠 <strong>Revisão & Motivação</strong> - Por que precisamos
                  de modelos?
                </li>
                <li>
                  🎯 <strong>Aprendizado Supervisionado</strong> - Conceitos
                  fundamentais
                </li>
                <li>
                  📊 <strong>Regressão vs Classificação</strong> - Diferenças
                  práticas
                </li>
                <li>
                  📈 <strong>Regressão Linear</strong> - Teoria completa
                </li>
                <li>
                  ⚙️ <strong>Implementação do Zero</strong> - Python + NumPy
                </li>
                <li>
                  🔧 <strong>Scikit-learn</strong> - Comparação prática
                </li>
                <li>
                  🌟 <strong>Outros Modelos</strong> - Visão geral
                </li>
                <li>
                  🎯 <strong>Exercícios</strong> - Fixação dos conceitos
                </li>
              </ul>
            </div>
          </section>

          {/* Slide 3: Revisão & Motivação */}
          <section>
            <h2 className="section-title">Revisão: Tratamento de Dados</h2>
            <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
              <div style={{ flex: 1, textAlign: "left" }}>
                <h3 style={{ color: "#42A4FF", marginBottom: "1rem" }}>
                  O que vimos até agora:
                </h3>
                <ul style={{ fontSize: "1.3rem", lineHeight: "1.8" }}>
                  <li>✅ Limpeza de dados</li>
                  <li>✅ Tratamento de valores ausentes</li>
                  <li>✅ Identificação de outliers</li>
                  <li>✅ Visualização de dados</li>
                </ul>

                <div
                  className="fragment fade-in"
                  style={{
                    marginTop: "2rem",
                    padding: "1rem",
                    backgroundColor: "rgba(66, 164, 255, 0.1)",
                    borderRadius: "8px",
                  }}
                >
                  <h4 style={{ color: "#42A4FF", margin: "0 0 0.5rem 0" }}>
                    Próximo passo:
                  </h4>
                  <p style={{ margin: 0, fontSize: "1.2rem" }}>
                    Como fazer o computador <strong>aprender</strong> padrões
                    dos dados?
                  </p>
                </div>
              </div>

              <div
                style={{ flex: 1, textAlign: "center" }}
                className="fragment fade-in"
              >
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🏠</div>
                <h4 style={{ color: "#42A4FF" }}>
                  Exemplo: Previsão de Preços
                </h4>
                <p style={{ fontSize: "1.1rem", color: "#666" }}>
                  Como prever o preço de uma casa baseado em:
                </p>
                <ul
                  style={{ listStyle: "none", padding: 0, fontSize: "1.1rem" }}
                >
                  <li>📐 Área (m²)</li>
                  <li>🛏️ Número de quartos</li>
                  <li>📍 Localização</li>
                  <li>🏗️ Ano de construção</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Slide 4: O que é Aprendizado Supervisionado */}
          <section>
            <h2 className="section-title">
              O que é Aprendizado Supervisionado?
            </h2>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <p
                style={{
                  fontSize: "1.4rem",
                  maxWidth: "80%",
                  color: "#333",
                  margin: "24px auto",
                }}
              >
                É quando ensinamos o computador usando{" "}
                <strong>exemplos com respostas corretas</strong>
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "3rem",
                marginTop: "3rem",
              }}
            >
              <div
                className="fragment fade-in"
                style={{
                  textAlign: "center",
                  padding: "2rem",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "12px",
                  width: "100%",
                }}
              >
                <div className="mx-auto w-full flex items-center justify-center mb-4">
                  <BrainCircuit className="text-primary w-14 h-14" />
                </div>
                <h3 style={{ color: "#42A4FF", marginBottom: "1rem" }}>
                  Fase de Treino
                </h3>
                <p style={{ fontSize: "1.1rem" }}>
                  Mostramos muitos exemplos:
                  <br />
                  <strong>Dados → Resposta Correta</strong>
                </p>
              </div>

              <div
                className="fragment fade-in"
                style={{
                  textAlign: "center",
                  padding: "2rem",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "12px",
                }}
              >
                <div className="mx-auto w-full flex items-center justify-center mb-4">
                  <ScanQrCode className="text-primary w-14 h-14" />
                </div>
                <h3 style={{ color: "#42A4FF", marginBottom: "1rem" }}>
                  Fase de Predição
                </h3>
                <p style={{ fontSize: "1.1rem" }}>
                  Modelo faz previsões:
                  <br />
                  <strong>Novos Dados → Predição</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Slide 5: Conceitos Fundamentais */}
          <section>
            <h2 className="section-title">Conceitos Fundamentais</h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <div
                className="fragment fade-in"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  padding: "1.5rem",
                  backgroundColor: "#f0f8ff",
                  borderRadius: "12px",
                }}
              >
                <div style={{ fontSize: "3rem" }}>📊</div>
                <div>
                  <h3 style={{ color: "#42A4FF", margin: "0 0 0.5rem 0" }}>
                    Features (X) - Variáveis de Entrada
                  </h3>
                  <p style={{ margin: 0, fontSize: "1.2rem" }}>
                    As características que usamos para fazer a predição
                    <br />
                    <em>
                      Exemplo: área da casa, número de quartos, localização
                    </em>
                  </p>
                </div>
              </div>

              <div
                className="fragment fade-in"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  padding: "1.5rem",
                  backgroundColor: "#fff5f5",
                  borderRadius: "12px",
                }}
              >
                <div style={{ fontSize: "3rem" }}>🎯</div>
                <div>
                  <h3 style={{ color: "#e53e3e", margin: "0 0 0.5rem 0" }}>
                    Target (y) - Variável de Saída
                  </h3>
                  <p style={{ margin: 0, fontSize: "1.2rem" }}>
                    O que queremos prever
                    <br />
                    <em>
                      Exemplo: preço da casa, nota do aluno, diagnóstico médico
                    </em>
                  </p>
                </div>
              </div>

              <div
                className="fragment fade-in"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  padding: "1.5rem",
                  backgroundColor: "#f0fff4",
                  borderRadius: "12px",
                }}
              >
                <div style={{ fontSize: "3rem" }}>🔄</div>
                <div>
                  <h3 style={{ color: "#38a169", margin: "0 0 0.5rem 0" }}>
                    Train/Test Split
                  </h3>
                  <p style={{ margin: 0, fontSize: "1.2rem" }}>
                    Dividimos os dados: parte para treinar, parte para testar
                    <br />
                    <em>Exemplo: 80% treino, 20% teste</em>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 6: Exemplo Prático */}
          <section>
            <h2 className="section-title">
              Exemplo: Predição de Nota do Aluno
            </h2>
            <div style={{ display: "flex", gap: "3rem", alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: "#42A4FF", marginBottom: "1rem" }}>
                  Dados de Treino:
                </h3>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "1.1rem",
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: "#42A4FF", color: "white" }}>
                      <th
                        style={{ padding: "0.8rem", border: "1px solid #ddd" }}
                      >
                        Horas Estudadas
                      </th>
                      <th
                        style={{ padding: "0.8rem", border: "1px solid #ddd" }}
                      >
                        Nota
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          padding: "0.8rem",
                          border: "1px solid #ddd",
                          textAlign: "center",
                        }}
                      >
                        2
                      </td>
                      <td
                        style={{
                          padding: "0.8rem",
                          border: "1px solid #ddd",
                          textAlign: "center",
                        }}
                      >
                        5.0
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "0.8rem",
                          border: "1px solid #ddd",
                          textAlign: "center",
                        }}
                      >
                        4
                      </td>
                      <td
                        style={{
                          padding: "0.8rem",
                          border: "1px solid #ddd",
                          textAlign: "center",
                        }}
                      >
                        6.5
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "0.8rem",
                          border: "1px solid #ddd",
                          textAlign: "center",
                        }}
                      >
                        6
                      </td>
                      <td
                        style={{
                          padding: "0.8rem",
                          border: "1px solid #ddd",
                          textAlign: "center",
                        }}
                      >
                        8.0
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "0.8rem",
                          border: "1px solid #ddd",
                          textAlign: "center",
                        }}
                      >
                        8
                      </td>
                      <td
                        style={{
                          padding: "0.8rem",
                          border: "1px solid #ddd",
                          textAlign: "center",
                        }}
                      >
                        9.2
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div
                  className="fragment fade-in"
                  style={{
                    marginTop: "2rem",
                    padding: "1rem",
                    backgroundColor: "#e8f5e8",
                    borderRadius: "8px",
                  }}
                >
                  <h4 style={{ color: "#2d5016", margin: "0 0 0.5rem 0" }}>
                    Pergunta:
                  </h4>
                  <p style={{ margin: 0, fontSize: "1.2rem" }}>
                    Se um aluno estudar <strong>7 horas</strong>, qual nota ele
                    tirará?
                  </p>
                </div>
              </div>

              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: "6rem", marginBottom: "1rem" }}>📈</div>
                <p style={{ fontSize: "1.3rem", color: "#666" }}>
                  O modelo precisa encontrar o <strong>padrão</strong> nos dados
                </p>

                <div
                  className="fragment fade-in"
                  style={{
                    marginTop: "2rem",
                    padding: "1.5rem",
                    backgroundColor: "#fff5cc",
                    borderRadius: "8px",
                  }}
                >
                  <h4 style={{ color: "#8b4513", margin: "0 0 0.5rem 0" }}>
                    Padrão descoberto:
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1.4rem",
                      fontWeight: "bold",
                    }}
                  >
                    Mais horas = Nota maior
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 7: Supervisionado vs Não-supervisionado */}
          <section>
            <h2 className="section-title">
              Supervisionado vs Não-supervisionado
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "3rem",
                marginTop: "2rem",
              }}
            >
              <div
                style={{
                  padding: "2rem",
                  backgroundColor: "#e8f5e8",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>👨‍🏫</div>
                <h3 style={{ color: "#2d5016", marginBottom: "1rem" }}>
                  Supervisionado
                </h3>
                <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
                  <strong>Temos as respostas corretas</strong>
                </p>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "1rem" }}>
                  <li>✅ Dados + Rótulos</li>
                  <li>✅ Aprende com exemplos</li>
                  <li>✅ Faz predições</li>
                </ul>
                <div
                  style={{
                    marginTop: "1rem",
                    fontSize: "0.9rem",
                    fontStyle: "italic",
                  }}
                >
                  Ex: Email → Spam/Não-spam
                </div>
              </div>

              <div
                style={{
                  padding: "2rem",
                  backgroundColor: "#fff5f5",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
                <h3 style={{ color: "#c53030", marginBottom: "1rem" }}>
                  Não-supervisionado
                </h3>
                <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
                  <strong>Não temos as respostas</strong>
                </p>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "1rem" }}>
                  <li>🔍 Só os dados</li>
                  <li>🔍 Encontra padrões ocultos</li>
                  <li>🔍 Agrupa similaridades</li>
                </ul>
                <div
                  style={{
                    marginTop: "1rem",
                    fontSize: "0.9rem",
                    fontStyle: "italic",
                  }}
                >
                  Ex: Agrupar clientes similares
                </div>
              </div>
            </div>
          </section>

          {/* Slide 8: Regressão vs Classificação */}
          <section>
            <h2 className="section-title">Regressão vs Classificação</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "3rem",
                marginTop: "2rem",
              }}
            >
              <div
                style={{
                  padding: "2rem",
                  backgroundColor: "#e6f3ff",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📈</div>
                <h3 style={{ color: "#0066cc", marginBottom: "1rem" }}>
                  Regressão
                </h3>
                <p
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Saída <span style={{ color: "#0066cc" }}>Contínua</span>
                </p>
                <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                  Prevemos um número que pode ter infinitos valores
                </p>
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginTop: "1rem",
                  }}
                >
                  <h4 style={{ margin: "0 0 0.5rem 0", color: "#0066cc" }}>
                    Exemplos:
                  </h4>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      fontSize: "0.9rem",
                    }}
                  >
                    <li>🏠 Preço de casas: R$ 350.000</li>
                    <li>🌡️ Temperatura: 23.5°C</li>
                    <li>📊 Nota: 8.7</li>
                    <li>⏰ Tempo: 2.3 horas</li>
                  </ul>
                </div>
              </div>

              <div
                style={{
                  padding: "2rem",
                  backgroundColor: "#fff0e6",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🏷️</div>
                <h3 style={{ color: "#cc6600", marginBottom: "1rem" }}>
                  Classificação
                </h3>
                <p
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Saída <span style={{ color: "#cc6600" }}>Discreta</span>
                </p>
                <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                  Prevemos uma categoria/classe específica
                </p>
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginTop: "1rem",
                  }}
                >
                  <h4 style={{ margin: "0 0 0.5rem 0", color: "#cc6600" }}>
                    Exemplos:
                  </h4>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      fontSize: "0.9rem",
                    }}
                  >
                    <li>📧 Email: Spam/Não-spam</li>
                    <li>🏥 Diagnóstico: Sim/Não</li>
                    <li>🌦️ Clima: Sol/Chuva/Nuvem</li>
                    <li>⭐ Avaliação: 1, 2, 3, 4, 5</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 9: Atividade - Quiz */}
          <section>
            <h2 className="section-title">
              🧠 Atividade: Regressão ou Classificação?
            </h2>
            <div
              style={{ fontSize: "1.3rem", maxWidth: "90%", margin: "0 auto" }}
            >
              <div
                className="fragment fade-in"
                style={{
                  padding: "1.5rem",
                  margin: "1rem 0",
                  backgroundColor: "#f0f8ff",
                  borderRadius: "12px",
                }}
              >
                <h3 style={{ color: "#42A4FF", margin: "0 0 1rem 0" }}>
                  Cenário 1: 🏪
                </h3>
                <p style={{ margin: "0 0 1rem 0" }}>
                  Prever quantos produtos uma loja venderá no próximo mês
                </p>
                <div
                  className="fragment fade-in"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "#0066cc",
                  }}
                >
                  ✅ Regressão (número contínuo)
                </div>
              </div>

              <div
                className="fragment fade-in"
                style={{
                  padding: "1.5rem",
                  margin: "1rem 0",
                  backgroundColor: "#fff5f0",
                  borderRadius: "12px",
                }}
              >
                <h3 style={{ color: "#cc6600", margin: "0 0 1rem 0" }}>
                  Cenário 2: 🎬
                </h3>
                <p style={{ margin: "0 0 1rem 0" }}>
                  Classificar um filme como "Comédia", "Drama" ou "Ação"
                </p>
                <div
                  className="fragment fade-in"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "#cc6600",
                  }}
                >
                  ✅ Classificação (categorias discretas)
                </div>
              </div>

              <div
                className="fragment fade-in"
                style={{
                  padding: "1.5rem",
                  margin: "1rem 0",
                  backgroundColor: "#f0fff0",
                  borderRadius: "12px",
                }}
              >
                <h3 style={{ color: "#2d5016", margin: "0 0 1rem 0" }}>
                  Cenário 3: 🏥
                </h3>
                <p style={{ margin: "0 0 1rem 0" }}>
                  Determinar se um paciente tem COVID-19 baseado nos sintomas
                </p>
                <div
                  className="fragment fade-in"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "#2d5016",
                  }}
                >
                  ✅ Classificação (Positivo/Negativo)
                </div>
              </div>
            </div>
          </section>

          {/* Slide 10: Regressão Linear - Introdução */}
          <section>
            <h2 className="section-title">Regressão Linear</h2>
            <div style={{ display: "flex", gap: "3rem", alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: "#42A4FF", marginBottom: "1rem" }}>
                  O modelo mais simples e fundamental!
                </h3>
                <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
                  Encontra a <strong>melhor linha reta</strong> que passa pelos
                  pontos dos dados.
                </p>

                <div
                  style={{
                    backgroundColor: "#f0f8ff",
                    padding: "1.5rem",
                    borderRadius: "12px",
                    marginBottom: "1.5rem",
                  }}
                >
                  <h4 style={{ color: "#42A4FF", margin: "0 0 1rem 0" }}>
                    Fórmula da Reta:
                  </h4>
                  <div
                    style={{
                      fontSize: "2rem",
                      textAlign: "center",
                      fontFamily: "monospace",
                      color: "#333",
                    }}
                  >
                    ŷ = mx + b
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      marginTop: "1rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    <li>
                      <strong>ŷ</strong> = valor predito
                    </li>
                    <li>
                      <strong>m</strong> = inclinação (slope)
                    </li>
                    <li>
                      <strong>x</strong> = variável de entrada
                    </li>
                    <li>
                      <strong>b</strong> = intercepto
                    </li>
                  </ul>
                </div>
              </div>

              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>📈</div>
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    padding: "2rem",
                    borderRadius: "12px",
                  }}
                >
                  <h4 style={{ color: "#666", marginBottom: "1rem" }}>
                    Visualização:
                  </h4>
                  <p style={{ fontSize: "1rem", color: "#666" }}>
                    Imagine pontos espalhados em um gráfico e uma linha tentando
                    "encaixar" o melhor possível entre eles.
                  </p>
                  <div
                    style={{
                      marginTop: "1rem",
                      fontSize: "0.9rem",
                      fontStyle: "italic",
                    }}
                  >
                    (Vamos ver isso na prática!)
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 11: Como funciona o aprendizado */}
          <section>
            <h2 className="section-title">Como o Modelo "Aprende"?</h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <div
                className="fragment fade-in"
                style={{
                  textAlign: "center",
                  padding: "1.5rem",
                  backgroundColor: "#fff5f5",
                  borderRadius: "12px",
                }}
              >
                <h3 style={{ color: "#e53e3e", marginBottom: "1rem" }}>
                  1. Função de Custo (Erro)
                </h3>
                <div
                  style={{
                    fontSize: "1.8rem",
                    fontFamily: "monospace",
                    marginBottom: "1rem",
                  }}
                >
                  J(m, b) = (1/n) × Σ(y<sub>i</sub> - ŷ<sub>i</sub>)²
                </div>
                <p style={{ fontSize: "1.1rem" }}>
                  Mede o <strong>quão longe</strong> nossas predições estão dos
                  valores reais
                </p>
              </div>

              <div
                className="fragment fade-in"
                style={{
                  textAlign: "center",
                  padding: "1.5rem",
                  backgroundColor: "#f0f8ff",
                  borderRadius: "12px",
                }}
              >
                <h3 style={{ color: "#42A4FF", marginBottom: "1rem" }}>
                  2. Gradiente Descendente
                </h3>
                <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
                  Algoritmo que <strong>ajusta</strong> os parâmetros m e b para{" "}
                  <strong>minimizar</strong> o erro
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                    marginTop: "1rem",
                  }}
                >
                  <div>
                    <div
                      style={{ fontSize: "1.1rem", fontFamily: "monospace" }}
                    >
                      m = m - α × ∂J/∂m
                    </div>
                  </div>
                  <div>
                    <div
                      style={{ fontSize: "1.1rem", fontFamily: "monospace" }}
                    >
                      b = b - α × ∂J/∂b
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    marginTop: "0.5rem",
                  }}
                >
                  α = learning rate (taxa de aprendizado)
                </p>
              </div>

              <div
                className="fragment fade-in"
                style={{
                  textAlign: "center",
                  padding: "1.5rem",
                  backgroundColor: "#f0fff0",
                  borderRadius: "12px",
                }}
              >
                <h3 style={{ color: "#2d5016", marginBottom: "1rem" }}>
                  3. Iteração
                </h3>
                <p style={{ fontSize: "1.1rem" }}>
                  Repete o processo centenas/milhares de vezes até encontrar os{" "}
                  <strong>melhores valores</strong> de m e b
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="section-title">Vamos para a nossa lousa virtual</h2>
          </section>

          {/* Slide 12: Implementação do Zero - Setup */}
          <section>
            <h2 className="section-title">
              Implementação do Zero - Momento live coding
            </h2>
          </section>

          {/* Slide 15: Outros Modelos Supervisionados */}
          <section>
            <h2 className="section-title">Outros Modelos Supervisionados</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                marginTop: "2rem",
              }}
            >
              <div
                className="fragment fade-in"
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#f0f8ff",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                  📊
                </div>
                <h3 style={{ color: "#42A4FF", marginBottom: "1rem" }}>
                  Regressão Logística
                </h3>
                <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                  Para <strong>classificação binária</strong>
                </p>
                <div style={{ fontSize: "0.9rem", color: "#666" }}>
                  Ex: Spam/Não-spam, Aprovado/Reprovado
                </div>
              </div>

              <div
                className="fragment fade-in"
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#f0fff0",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                  🌳
                </div>
                <h3 style={{ color: "#2d5016", marginBottom: "1rem" }}>
                  Árvores de Decisão
                </h3>
                <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                  Faz <strong>perguntas sequenciais</strong>
                </p>
                <div style={{ fontSize: "0.9rem", color: "#666" }}>
                  Ex: "Idade &gt; 30?" → "Salário &gt; 5000?"
                </div>
              </div>

              <div
                className="fragment fade-in"
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#fff5f0",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                  👥
                </div>
                <h3 style={{ color: "#cc6600", marginBottom: "1rem" }}>
                  K-Nearest Neighbors
                </h3>
                <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                  <strong>"Diga-me com quem andas..."</strong>
                </p>
                <div style={{ fontSize: "0.9rem", color: "#666" }}>
                  Ex: Classifica baseado nos vizinhos mais próximos
                </div>
              </div>

              <div
                className="fragment fade-in"
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#f5f0ff",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                  🚀
                </div>
                <h3 style={{ color: "#6b46c1", marginBottom: "1rem" }}>
                  Support Vector Machine
                </h3>
                <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                  Encontra a <strong>melhor fronteira</strong>
                </p>
                <div style={{ fontSize: "0.9rem", color: "#666" }}>
                  Ex: Separa classes com máxima margem
                </div>
              </div>
            </div>
          </section>

          {/* Slide 16: Quando usar cada modelo */}
          <section>
            <h2 className="section-title">Quando usar cada modelo?</h2>
            <div style={{ maxWidth: "90%", margin: "0 auto" }}>
              <div
                className="fragment fade-in"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  padding: "1rem",
                  margin: "1rem 0",
                  backgroundColor: "#e6f3ff",
                  borderRadius: "12px",
                }}
              >
                <div style={{ fontSize: "2rem" }}>📈</div>
                <div>
                  <h4 style={{ color: "#0066cc", margin: "0 0 0.5rem 0" }}>
                    Regressão Linear
                  </h4>
                  <p style={{ margin: 0, fontSize: "1rem" }}>
                    Relação linear simples, fácil interpretação, baseline
                  </p>
                </div>
              </div>

              <div
                className="fragment fade-in"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  padding: "1rem",
                  margin: "1rem 0",
                  backgroundColor: "#f0f8ff",
                  borderRadius: "12px",
                }}
              >
                <div style={{ fontSize: "2rem" }}>📊</div>
                <div>
                  <h4 style={{ color: "#42A4FF", margin: "0 0 0.5rem 0" }}>
                    Regressão Logística
                  </h4>
                  <p style={{ margin: 0, fontSize: "1rem" }}>
                    Classificação binária, probabilidades, interpretável
                  </p>
                </div>
              </div>

              <div
                className="fragment fade-in"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  padding: "1rem",
                  margin: "1rem 0",
                  backgroundColor: "#f0fff0",
                  borderRadius: "12px",
                }}
              >
                <div style={{ fontSize: "2rem" }}>🌳</div>
                <div>
                  <h4 style={{ color: "#2d5016", margin: "0 0 0.5rem 0" }}>
                    Árvores de Decisão
                  </h4>
                  <p style={{ margin: 0, fontSize: "1rem" }}>
                    Dados categóricos, relações não-lineares, fácil visualização
                  </p>
                </div>
              </div>

              <div
                className="fragment fade-in"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  padding: "1rem",
                  margin: "1rem 0",
                  backgroundColor: "#fff5f0",
                  borderRadius: "12px",
                }}
              >
                <div style={{ fontSize: "2rem" }}>👥</div>
                <div>
                  <h4 style={{ color: "#cc6600", margin: "0 0 0.5rem 0" }}>
                    KNN
                  </h4>
                  <p style={{ margin: 0, fontSize: "1rem" }}>
                    Poucos dados, padrões locais, sistemas de recomendação
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 17: Recapitulação */}
          <section>
            <h2 className="section-title">Recapitulação</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "3rem",
              }}
            >
              <div>
                <h3 style={{ color: "#42A4FF", marginBottom: "1rem" }}>
                  O que aprendemos:
                </h3>
                <ul
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    listStyle: "none",
                    padding: 0,
                  }}
                >
                  <li>
                    ✅ <strong>Aprendizado supervisionado</strong> - conceitos
                  </li>
                  <li>
                    ✅ <strong>Regressão vs Classificação</strong> - diferenças
                  </li>
                  <li>
                    ✅ <strong>Regressão Linear</strong> - teoria completa
                  </li>
                  <li>
                    ✅ <strong>Implementação do zero</strong> - Python/NumPy
                  </li>
                  <li>
                    ✅ <strong>Scikit-learn</strong> - facilidade de uso
                  </li>
                  <li>
                    ✅ <strong>Outros modelos</strong> - visão geral
                  </li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: "#e53e3e", marginBottom: "1rem" }}>
                  Conceitos-chave:
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      padding: "1rem",
                      backgroundColor: "#f0f8ff",
                      borderRadius: "8px",
                    }}
                  >
                    <strong>Features (X)</strong> → <strong>Target (y)</strong>
                  </div>
                  <div
                    style={{
                      padding: "1rem",
                      backgroundColor: "#f0fff0",
                      borderRadius: "8px",
                    }}
                  >
                    <strong>ŷ = mx + b</strong>
                  </div>
                  <div
                    style={{
                      padding: "1rem",
                      backgroundColor: "#fff5f0",
                      borderRadius: "8px",
                    }}
                  >
                    <strong>Gradiente Descendente</strong>
                  </div>
                  <div
                    style={{
                      padding: "1rem",
                      backgroundColor: "#f5f0ff",
                      borderRadius: "8px",
                    }}
                  >
                    <strong>Train/Test Split</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 18: Atividades de Fixação */}
          <section>
            <h2 className="section-title">Atividades de Fixação</h2>
            <div style={{ maxWidth: "90%", margin: "0 auto" }}>
              <div
                className="fragment fade-in"
                style={{
                  padding: "1.5rem",
                  margin: "1rem 0",
                  backgroundColor: "#e8f5e8",
                  borderRadius: "12px",
                }}
              >
                <h3 style={{ color: "#2d5016", margin: "0 0 1rem 0" }}>
                  1. Regressão com Múltiplas Variáveis
                </h3>
                <p style={{ margin: 0, fontSize: "1.1rem" }}>
                  Implementar regressão linear com 2+ features (ex: preço de
                  casas baseado em área + quartos)
                </p>
              </div>

              <div
                className="fragment fade-in"
                style={{
                  padding: "1.5rem",
                  margin: "1rem 0",
                  backgroundColor: "#f0f8ff",
                  borderRadius: "12px",
                }}
              >
                <h3 style={{ color: "#42A4FF", margin: "0 0 1rem 0" }}>
                  2. Visualizar Função de Custo
                </h3>
                <p style={{ margin: 0, fontSize: "1.1rem" }}>
                  Plotar como o erro diminui ao longo das épocas (curva de
                  aprendizado)
                </p>
              </div>

              <div
                className="fragment fade-in"
                style={{
                  padding: "1.5rem",
                  margin: "1rem 0",
                  backgroundColor: "#f5f0ff",
                  borderRadius: "12px",
                }}
              >
                <h3 style={{ color: "#6b46c1", margin: "0 0 1rem 0" }}>
                  3. Comparar Learning Rates
                </h3>
                <p style={{ margin: 0, fontSize: "1.1rem" }}>
                  Testar diferentes valores de α (0.001, 0.01, 0.1, 1.0) e ver o
                  impacto na convergência
                </p>
              </div>
            </div>
          </section>

          {/* Slide 19: Desafio Final */}
          <section>
            <h2 className="section-title">🚀 Desafio Final</h2>
            <div
              style={{ textAlign: "center", maxWidth: "80%", margin: "0 auto" }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "2rem" }}>🤔</div>

              <div
                style={{
                  padding: "2rem",
                  backgroundColor: "#f0f8ff",
                  borderRadius: "12px",
                  marginBottom: "2rem",
                }}
              >
                <h3 style={{ color: "#42A4FF", marginBottom: "1rem" }}>
                  Questão para Reflexão:
                </h3>
                <p
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  "Qual modelo supervisionado você acha que serviria para prever
                  se um cliente vai cancelar um serviço?"
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#666",
                    fontStyle: "italic",
                  }}
                >
                  Dica: Pense no tipo de saída que queremos (contínua ou
                  discreta)
                </p>
              </div>

              <div
                className="fragment fade-in"
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#fff5cc",
                  borderRadius: "12px",
                }}
              >
                <h4 style={{ color: "#8b4513", margin: "0 0 1rem 0" }}>
                  Resposta:
                </h4>
                <p
                  style={{ margin: 0, fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  <strong>Classificação!</strong> 🏷️
                  <br />
                  (Regressão Logística, Árvore de Decisão, ou KNN)
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#666",
                    marginTop: "0.5rem",
                  }}
                >
                  Saída: "Vai cancelar" ou "Não vai cancelar"
                </p>
              </div>
            </div>
          </section>

          {/* Slide 20: Próximos Passos */}
          <section data-background="linear-gradient(to bottom right, #f5f7fa, #e4eff9)">
            <h2 className="section-title">NOS VEMOS EM AGOSTO!!!</h2>

            <div
              style={{
                textAlign: "center",
                marginTop: "3rem",
                padding: "1.5rem",
                backgroundColor: "rgba(255,255,255,0.8)",
                borderRadius: "12px",
              }}
            >
              <h3 style={{ color: "#42A4FF", margin: "0 0 1rem 0" }}>
                Obrigado e boas férias!
              </h3>
              <p style={{ margin: 0, fontSize: "1.2rem" }}>Dúvidas?</p>
            </div>
            <img
              src="/src/assets/logo_fundo_claro.svg"
              alt="Inteli Academy"
              style={{
                height: "110px",
                margin: "6rem auto",
              }}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default SupervisedLearning;
