document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. LÓGICA DE SCROLLYTELLING (Intersection Observer p/ os Passos)
    // ==========================================================================
    const steps = document.querySelectorAll('.step');
    const visualStates = document.querySelectorAll('.visual-state');

    // Remove classe ativa de todos os visuais
    function clearVisuals() {
        visualStates.forEach(v => v.classList.remove('active'));
    }

    // Marca o passo ativo e o visual correspondente
    function activateStep(stepIndex) {
        // Estilo dos cartões (deixa o atual 100% visível, e os outros opacos)
        steps.forEach(s => s.classList.remove('is-active'));
        const activeStepEl = document.querySelector(`.step[data-step="${stepIndex}"]`);
        if (activeStepEl) activeStepEl.classList.add('is-active');

        // Estilo do fundo visual (mostra o canvas ou fundo correspondente)
        clearVisuals();
        const activeVisual = document.getElementById(`visual-${stepIndex}`);
        if (activeVisual) activeVisual.classList.add('active');
    }

    // Configuração do Observer para detectar qual 'step' está no meio da tela
    const scrollObserver = new IntersectionObserver((entries) => {
        // Encontra a entrada que está cruzando a tela com maior ratio (mais no centro)
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stepIndex = entry.target.getAttribute('data-step');
                activateStep(stepIndex);
            }
        });
    }, {
        root: null,
        // Aciona quando o elemento cruzar a margem de 40% a 60% da tela (o meio)
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0
    });

    steps.forEach(step => scrollObserver.observe(step));

    // Inicializa no estado 0 (O orb abstrato inicial) se a tela estiver no topo
    if(window.scrollY < window.innerHeight / 2) {
        clearVisuals();
        document.getElementById('visual-0')?.classList.add('active');
    }

    // ==========================================================================
    // 2. INICIALIZAÇÃO DE GRÁFICOS (CHART.JS) PARA CADA PASSO
    // ==========================================================================
    Chart.defaults.color = '#888888';
    Chart.defaults.font.family = "'Plus Jakarta Sans', sans-serif";
    
    // Opções Padrão de Design "Antigravity"
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { display: false }, ticks: { display: false } },
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { display: false } }
        }
    };

    // Gráfico 1: Volume (Passo 1)
    const ctxVol = document.getElementById('chartVolume');
    if (ctxVol) {
        new Chart(ctxVol, {
            type: 'bar',
            data: {
                labels: ['Ano 1', 'Ano 2', 'Ano 3', 'Ano Atual'],
                datasets: [{
                    label: 'Volume de Apostas',
                    data: [10, 25, 60, 150], // Dados simulados
                    backgroundColor: '#3b82f6',
                    borderRadius: 8
                }]
            },
            options: commonOptions
        });
    }

    // Gráfico 2: Velocidade Pix (Passo 2)
    const ctxPix = document.getElementById('chartPix');
    if (ctxPix) {
        new Chart(ctxPix, {
            type: 'line',
            data: {
                labels: ['T1', 'T2', 'T3', 'T4'],
                datasets: [{
                    label: 'Aceleração',
                    data: [20, 50, 90, 180],
                    borderColor: '#ffffff',
                    borderWidth: 3,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }]
            },
            options: commonOptions
        });
    }

    // Gráfico 3: Inadimplência (Passo 3)
    const ctxRenda = document.getElementById('chartRenda');
    if (ctxRenda) {
        new Chart(ctxRenda, {
            type: 'radar',
            data: {
                labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
                datasets: [{
                    label: 'Risco de Endividamento',
                    data: [85, 95, 75, 65, 55],
                    backgroundColor: 'rgba(239, 68, 68, 0.2)', // Vermelho alerta
                    borderColor: '#ef4444',
                    pointBackgroundColor: '#ffffff'
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    r: {
                        angleLines: { color: 'rgba(255,255,255,0.1)' },
                        grid: { color: 'rgba(255,255,255,0.1)' },
                        pointLabels: { color: '#ffffff' },
                        ticks: { display: false }
                    }
                }
            }
        });
    }

    // ==========================================================================
    // 3. ACESSIBILIDADE TOTAL (VOZ, LIBRAS, CONTRASTE, FONTE)
    // ==========================================================================
    
    const btnFlutuanteLibras = document.getElementById('btn-flutuante-libras');
    const btnFlutuanteVoz = document.getElementById('btn-flutuante-voz');
    const btnFlutuanteContraste = document.getElementById('btn-flutuante-contraste');
    const statusLeitura = document.getElementById('status-leitura');
    const aumentarTextoBtn = document.getElementById('aumentar-texto');
    const diminuirTextoBtn = document.getElementById('diminuir-texto');

    let tamanhoFonte = 100;
    let ultimoTextoFalado = '';
    let ultimoElementoLido = null;
    let leituraAtivada = false;

    function atualizarStatus(texto) {
        if (statusLeitura) statusLeitura.textContent = texto;
    }

    function obterVozPtBR() {
        const vozes = window.speechSynthesis.getVoices();
        return vozes.find(v => v.lang === 'pt-BR') || vozes.find(v => v.lang.toLowerCase().startsWith('pt')) || null;
    }

    function falarTexto(texto) {
        if (!('speechSynthesis' in window)) {
            atualizarStatus('Voz Indisponível');
            return;
        }
        if (!texto || !texto.trim()) return;
        const textoLimpo = texto.trim().replace(/\s+/g, ' ');
        if (textoLimpo === ultimoTextoFalado) return;

        window.speechSynthesis.cancel();
        const fala = new SpeechSynthesisUtterance(textoLimpo);
        fala.lang = 'pt-BR';
        fala.rate = 1.1;
        fala.pitch = 1;

        const voz = obterVozPtBR();
        if (voz) fala.voice = voz;

        ultimoTextoFalado = textoLimpo;
        window.speechSynthesis.speak(fala);
    }

    function extrairTextoFalado(elemento) {
        if (elemento.dataset.voice) return elemento.dataset.voice;
        return elemento.innerText?.trim() || elemento.textContent?.trim() || '';
    }

    function lidarLeitura(elemento) {
        if (!leituraAtivada) return;
        if (ultimoElementoLido === elemento) return;
        ultimoElementoLido = elemento;
        falarTexto(extrairTextoFalado(elemento));
    }

    function aplicarLeituraPorHover() {
        const seletores = 'h1, h2, h3, p, a, button, .data-value, label, span';
        const elementos = document.querySelectorAll(seletores);

        elementos.forEach((elemento) => {
            elemento.addEventListener('mouseenter', () => lidarLeitura(elemento));
            elemento.addEventListener('focus', () => lidarLeitura(elemento));
        });

        document.addEventListener('mousemove', (e) => {
            if (!e.target.closest(seletores)) {
                ultimoElementoLido = null;
            }
        });
    }

    function adicionarTitlesAutomaticamente() {
        const elementos = document.querySelectorAll('a, button, h1, h2, h3, p');
        elementos.forEach((elemento) => {
            if (elemento.hasAttribute('title')) return;
            let texto = elemento.dataset.voice ? elemento.dataset.voice.trim() : (elemento.innerText || '').trim();
            if (texto) elemento.setAttribute('title', texto);
        });
    }

    adicionarTitlesAutomaticamente();

    // Integração com VLibras Externo
    btnFlutuanteLibras.addEventListener('click', () => {
        const botaoVlibrasOriginal = document.querySelector('[vw-access-button]');
        if (botaoVlibrasOriginal) {
            botaoVlibrasOriginal.click();
        }
    });

    // Toggle de Voz
    btnFlutuanteVoz.addEventListener('click', () => {
        leituraAtivada = !leituraAtivada;

        if (leituraAtivada) {
            btnFlutuanteVoz.classList.add('ativo');
            atualizarStatus('Voz: ON');
            falarTexto('Leitura por voz ativada.');
        } else {
            btnFlutuanteVoz.classList.remove('ativo');
            atualizarStatus('Voz: OFF');
            window.speechSynthesis.cancel();
            ultimoTextoFalado = '';
        }
    });

    // Toggle de Contraste
    btnFlutuanteContraste.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        const estaAtivo = document.body.classList.contains('high-contrast');
        
        if (estaAtivo) {
            btnFlutuanteContraste.classList.add('ativo');
            if (leituraAtivada) falarTexto('Modo de alto contraste ativado.');
        } else {
            btnFlutuanteContraste.classList.remove('ativo');
            if (leituraAtivada) falarTexto('Modo de alto contraste desativado.');
        }
    });

    // Ajuste de Fonte
    aumentarTextoBtn?.addEventListener('click', () => {
        if (tamanhoFonte < 140) {
            tamanhoFonte += 10;
            document.documentElement.style.fontSize = `${tamanhoFonte}%`;
            if (leituraAtivada) falarTexto('Tamanho do texto aumentado.');
        }
    });

    diminuirTextoBtn?.addEventListener('click', () => {
        if (tamanhoFonte > 80) {
            tamanhoFonte -= 10;
            document.documentElement.style.fontSize = `${tamanhoFonte}%`;
            if (leituraAtivada) falarTexto('Tamanho do texto diminuído.');
        }
    });

    if ('speechSynthesis' in window && speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => obterVozPtBR();
    }

    aplicarLeituraPorHover();
});
