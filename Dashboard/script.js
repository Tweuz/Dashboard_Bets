// =====================================================
// Aula 13 – Unidade 3: JavaScript e Interatividade
// DOM e Eventos
// =====================================================

// --- Seletores (getElementById) ---
const btnFlutuanteLibras = document.getElementById('btn-flutuante-libras');
const btnFlutuanteVoz = document.getElementById('btn-flutuante-voz');
const btnFlutuanteContraste = document.getElementById('btn-flutuante-contraste');

const statusLeitura = document.getElementById('status-leitura');
const aumentarTextoBtn = document.getElementById('aumentar-texto');
const diminuirTextoBtn = document.getElementById('diminuir-texto');
const contrasteBtn = document.getElementById('alternar-contraste');

let tamanhoFonte = 100;
let ultimoTextoFalado = '';
let ultimoElementoLido = null;
let leituraAtivada = false;

// --- Manipulação do DOM: atualiza o texto do status ---
function atualizarStatus(texto) {
  if (statusLeitura) statusLeitura.textContent = texto;
}

function obterVozPtPT() {
  const vozes = window.speechSynthesis.getVoices();
  return vozes.find(v => v.lang === 'pt-PT') || vozes.find(v => v.lang.toLowerCase().startsWith('pt')) || null;
}

function falarTexto(texto) {
  if (!('speechSynthesis' in window)) {
    atualizarStatus('O seu navegador não suporta leitura por voz.');
    return;
  }

  if (!texto || !texto.trim()) return;
  const textoLimpo = texto.trim().replace(/\s+/g, ' ');

  if (textoLimpo === ultimoTextoFalado) return;

  window.speechSynthesis.cancel();
  const fala = new SpeechSynthesisUtterance(textoLimpo);
  fala.lang = 'pt-PT';
  fala.rate = 1;
  fala.pitch = 1;

  const voz = obterVozPtPT();
  if (voz) fala.voice = voz;

  ultimoTextoFalado = textoLimpo;
  window.speechSynthesis.speak(fala);
}

function extrairTextoFalado(elemento) {
  if (elemento.dataset.voice) return elemento.dataset.voice;

  if (elemento.tagName === 'SELECT') {
    const label = document.querySelector(`label[for="${elemento.id}"]`);
    const nome = label ? label.textContent.trim() : 'Campo de seleção';
    const valor = elemento.options[elemento.selectedIndex]?.text || '';
    return `${nome}. Opção atual: ${valor}.`;
  }

  if (elemento.tagName === 'INPUT') {
    const label = document.querySelector(`label[for="${elemento.id}"]`);
    return label ? label.textContent.trim() : 'Campo de entrada';
  }

  return elemento.innerText?.trim() || elemento.textContent?.trim() || '';
}

function lidarLeitura(elemento) {
  if (!leituraAtivada) return;
  if (ultimoElementoLido === elemento) return;
  ultimoElementoLido = elemento;
  falarTexto(extrairTextoFalado(elemento));
}

// --- Evento: onmouseover (mouseenter) ---
function aplicarLeituraPorHover() {
  const elementos = document.querySelectorAll('h1, h2, h3, p, li, a, button, label, select, input, th, td, caption, article, section, .metric, .chart-card, .heat-card, .insight-card, .tag');

  elementos.forEach((elemento) => {
    elemento.addEventListener('mouseenter', () => lidarLeitura(elemento));
    elemento.addEventListener('focus', () => lidarLeitura(elemento));
  });

  document.addEventListener('mousemove', () => {
    ultimoElementoLido = null;
  });
}

function adicionarTitlesAutomaticamente() {
  const elementos = document.querySelectorAll(
    'a, button, h1, h2, h3, h4, h5, h6, p, li, span, strong, label, select, option, input, textarea, th, td, caption, article, section, img'
  );

  elementos.forEach((elemento) => {
    if (elemento.hasAttribute('title')) return;

    let texto = '';

    if (elemento.dataset.voice) {
      texto = elemento.dataset.voice.trim();
    } else if (elemento.getAttribute('aria-label')) {
      texto = elemento.getAttribute('aria-label').trim();
    } else if (elemento.tagName === 'INPUT' || elemento.tagName === 'TEXTAREA' || elemento.tagName === 'SELECT') {
      const id = elemento.id;
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
      texto = label ? label.textContent.trim() : '';
    } else if (elemento.tagName === 'IMG') {
      texto = elemento.getAttribute('alt')?.trim() || '';
    } else {
      texto = (elemento.innerText || elemento.textContent || '').trim().replace(/\s+/g, ' ');
    }

    if (texto) {
      elemento.setAttribute('title', texto);
    }
  });
}

document.addEventListener('DOMContentLoaded', adicionarTitlesAutomaticamente);

// --- Evento: onclick – Libras ---
btnFlutuanteLibras.addEventListener('click', () => {
  const botaoVlibrasOriginal = document.querySelector('[vw-access-button]');
  if (botaoVlibrasOriginal) {
    botaoVlibrasOriginal.click();
  }
});

// --- Evento: onclick – Leitura por voz ---
btnFlutuanteVoz.addEventListener('click', () => {
  leituraAtivada = !leituraAtivada;

  if (leituraAtivada) {
    btnFlutuanteVoz.classList.add('ativo');
    atualizarStatus('Leitura por voz ativada. Passe o rato ou use o Tab.');
    falarTexto('Leitura por voz ativada.');
  } else {
    btnFlutuanteVoz.classList.remove('ativo');
    atualizarStatus('Leitura por voz desativada (Ative no menu à direita).');
    window.speechSynthesis.cancel();
    ultimoTextoFalado = '';
  }
});

// --- Evento: onclick – Alto contraste (altera estilo via DOM) ---
function alternarContraste() {
  document.body.classList.toggle('high-contrast');
}

btnFlutuanteContraste.addEventListener('click', alternarContraste);
if (contrasteBtn) contrasteBtn.addEventListener('click', alternarContraste);

// --- Evento: onclick – Aumentar/diminuir fonte (altera estilo via DOM) ---
aumentarTextoBtn?.addEventListener('click', () => {
  if (tamanhoFonte < 130) {
    tamanhoFonte += 10;
    document.documentElement.style.fontSize = `${tamanhoFonte}%`;
  }
});

diminuirTextoBtn?.addEventListener('click', () => {
  if (tamanhoFonte > 90) {
    tamanhoFonte -= 10;
    document.documentElement.style.fontSize = `${tamanhoFonte}%`;
  }
});

// --- Evento: keydown – Atalhos de navegação por teclado ---
document.addEventListener('keydown', (evento) => {
  if (evento.altKey && evento.key === '1') {
    evento.preventDefault();
    document.getElementById('conteudo-principal')?.scrollIntoView();
  }
  if (evento.altKey && evento.key === '2') {
    evento.preventDefault();
    document.getElementById('filtros')?.scrollIntoView();
  }
  if (evento.altKey && evento.key === '3') {
    evento.preventDefault();
    document.getElementById('acessibilidade')?.scrollIntoView();
  }
});

if ('speechSynthesis' in window && speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = () => obterVozPtPT();
}

aplicarLeituraPorHover();

// =====================================================
// EVENTO: onkeyup – Busca dinâmica nos insights
// Filtra os cards de insight em tempo real conforme
// o usuário digita no campo de busca do painel.
// =====================================================
const campoBusca = document.getElementById('busca-insight');
const feedbackBusca = document.getElementById('feedback-busca');

if (campoBusca) {
  campoBusca.addEventListener('keyup', () => {
    const termo = campoBusca.value.toLowerCase().trim();
    const itens = document.querySelectorAll('.insight-list li');
    let visiveis = 0;

    itens.forEach((item) => {
      const texto = item.textContent.toLowerCase();
      if (termo === '' || texto.includes(termo)) {
        item.style.display = '';
        visiveis++;
      } else {
        item.style.display = 'none';
      }
    });

    if (feedbackBusca) {
      feedbackBusca.textContent = termo === ''
        ? ''
        : `${visiveis} resultado(s) encontrado(s) para "${campoBusca.value}"`;
    }
  });
}

// =====================================================
// EVENTO: onclick – Botão gera resumo na textarea
// Seleciona o elemento pelo ID e altera seu conteúdo
// dinamicamente, sem recarregar a página.
// =====================================================
const meuBotao = document.getElementById('meuBotao');

if (meuBotao) {
  // [1] EVENTO DE CLIQUE (Já existente no seu código)
  meuBotao.addEventListener('click', () => {
    const resumo = 'Resumo gerado automaticamente:\n\n' +
      '• Tema: Impacto socioeconômico das bets no Brasil.\n' +
      '• Período: 2018 a 2026.\n' +
      '• Regiões: Norte, Nordeste, Centro-Oeste, Sudeste e Sul.\n' +
      '• Conclusão: Alerta para o superendividamento das famílias.';
    
    const campoResumo = document.getElementById('campoResumo');
    if (campoResumo) {
      campoResumo.value = resumo;
    }
  });

  // [2] EVENTO DE MOUSE: mouseover (Quando o ponteiro do rato entra no botão)
  meuBotao.addEventListener('mouseover', () => {
    meuBotao.style.backgroundColor = 'var(--primary-2)'; // Usa a cor azul mais clara do seu CSS
    meuBotao.style.transform = 'scale(1.03)';            // Dá um leve efeito de crescimento expandido
    meuBotao.style.transition = 'all 0.2s ease';         // Torna a transição suave
  });

  // [3] EVENTO DE MOUSE: mouseout (Quando o ponteiro do rato sai do botão)
  meuBotao.addEventListener('mouseout', () => {
    meuBotao.style.backgroundColor = 'var(--primary)';   // Volta para a cor azul original
    meuBotao.style.transform = 'scale(1)';               // Volta ao tamanho normal
  });
}
