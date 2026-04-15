# 📊 Dashboard Analítico: O Impacto Socioeconómico das Bets no Brasil

Este projeto é uma plataforma web de análise exploratória focada no cruzamento de dados sobre transações via Pix destinadas a plataformas de apostas (bets), indicadores de incumprimento familiar (inadimplência) e a leitura socioeconómica do território brasileiro. 

Foi desenvolvido com um **forte foco em Acessibilidade Web (IHC e eMAG)**, garantindo que a informação está disponível para o maior número de utilizadores possível, independentemente das suas limitações.

---

## 🎯 Objetivo do Projeto

Estruturado para apoiar a visualização de dados e interpretação de risco, o painel serve como ferramenta para investigadores, banca, gestores públicos e entidades de crédito. Ajuda na discussão académica sobre:
- O comprometimento do rendimento básico familiar.
- A ludopatia digital.
- A pressão financeira em famílias vulneráveis.

---

## ✨ Funcionalidades Principais

- **Visualização de Dados Interativa:** Gráficos de linhas, gráficos de barras e mapas de calor (heatmaps) gerados nativamente em SVG.
- **Filtros Exploratórios:** Navegação por período temporal, região do Brasil, Objetivos de Desenvolvimento Sustentável (ODS) e variáveis estatísticas.
- **Design Responsivo:** Interface adaptável a diferentes tamanhos de ecrã (computadores, tablets e smartphones).
- **Métricas de Impacto:** Resumo de indicadores-chave como fluxo para apostas, rendimento comprometido e vulnerabilidade social.

---

## ♿ Foco em Acessibilidade (A11y)

A acessibilidade é um dos pilares deste projeto. Implementámos um **Menu Flutuante de Acessibilidade** (acessível via rato ou teclado) que inclui:

1. **Tradução para Língua Gestual (VLibras):** Integração com o widget oficial do Governo Brasileiro para tradução de conteúdos para Libras.
2. **Leitura de Ecrã por Voz (Text-to-Speech):** Sistema integrado que narra os textos, botões e gráficos ao passar o rato ou ao focar com a tecla `Tab`. A narração só ocorre se o utilizador a ativar ativamente no menu, garantindo que não é intrusiva.
3. **Modo de Alto Contraste:** Alternância de cores para fundos escuros e textos claros, auxiliando utilizadores com visão subnormal.
4. **Navegação por Teclado:** Total suporte a navegação via `Tab`, atalhos de teclado (Ex: `Alt + 1` para conteúdo, `Alt + 2` para filtros) e link invisível de "Pular para o conteúdo principal".
5. **Ajuste de Tamanho de Fonte:** Botões na barra superior para aumentar (A+) ou diminuir (A-) o tamanho do texto dinamicamente.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido focando na leveza e rapidez, sem dependência de frameworks pesadas:

- **HTML5:** Semântica estruturada e atributos ARIA para leitores de ecrã.
- **CSS3:** Variáveis de cor, Flexbox, CSS Grid e media queries para responsividade.
- **JavaScript (Vanilla):** Lógica de acessibilidade, manipulação de DOM e síntese de voz nativa (`window.speechSynthesis`).

---


