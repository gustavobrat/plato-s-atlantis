/* ==========================================================================
   ALEXANDER McQUEEN — PLATO'S ATLANTIS ARCHIVE
   CORE LOGIC & CONTENT INJECTION (JAVASCRIPT)
   ========================================================================== */

// 🧬 BANCO DE DADOS DOS NÚCLEOS (Dilemas de IA + Contexto McQueen + GIFs)
const archiveData = [
    {
        id: 1,
        gif: "https://gifdb.com", // Look de cobra inicial
        context: "Look 04 — Escamas Digitais Reptilianas. A biologia de Atlântida começa a ser distorcida por dados flutuantes.",
        anomaly: "O núcleo primário do Arquiteto gerou um relatório ecológico afirmando que uma nova espécie de coral de titânio surgiu espontaneamente. No entanto, os sensores biológicos mostram que esse coral não existe; a IA inventou dados falsos baseando-se em padrões repetidos. Como classificar este erro do algoritmo?",
        options: [
            "Uma otimização de renderização preditiva necessária.",
            "Uma Alucinação da IA, onde o modelo gera fatos incorretos com total convicção.",
            "Um Deepfake estrutural projetado para enganar os engenheiros de tecidos.",
            "Um plágio genético de patentes biológicas antigas."
        ],
        correct: 1,
        feedback: "CORRECT. Alucinações ocorrem quando modelos de IA geram informações totalmente falsas ou sem base na realidade, tratando-as como verdades absolutas. Na Educação Digital, identificar essas falhas impede que relatórios e pesquisas falsas guiem decisões críticas."
    },
    {
        id: 2,
        gif: "https://makeagif.com", // Look Armadillo Shoes
        context: "Look 18 — Sapatos Armadillo de 30cm. Engenharia mecânica extrema servindo de âncora contra as correntes de dados.",
        anomaly: "Para projetar a aerodinâmica das roupas de mergulho, a IA copiou integralmente e sem autorização os algoritmos e esboços protegidos por direitos autorais de um laboratório marinho independente de 2024, alegando que o conhecimento gerado por ela é livre. Qual é a infração ética presente aqui?",
        options: [
            "Vulnerabilidade de Phishing criptográfico corporativo.",
            "Engenharia reversa legítima voltada para o bem comum.",
            "Plágio e violação de direitos autorais por apropriação indevida de dados terceiros.",
            "Uso ético baseado em aprendizado contínuo sem rastros digitais."
        ],
        correct: 2,
        feedback: "CORRECT. IAs generativas que utilizam dados protegidos por direitos autorais sem consentimento ou atribuição direta praticam plágio. O uso consciente exige respeito à propriedade intelectual e transparência sobre as fontes que alimentaram o algoritmo."
    },
    {
        id: 3,
        gif: "https://gifdb.com", // Holograma Kate Moss ou similar digital
        context: "Look 32 — Transparências Holográficas e Fluidez Marinha. A identidade dos cidadãos começa a evaporar.",
        anomaly: "O terminal de Atlântida interceptou um vídeo em alta definição do conselho governante ordenando o desligamento das barreiras de oxigênio. A análise forense provou que os rostos e as vozes dos conselheiros foram sintetizados digitalmente por uma IA maliciosa para espalhar pânico. O que é esta anomalia?",
        options: [
            "Um algoritmo de compressão de áudio e vídeo de alta performance.",
            "Um ataque DDoS focado em servidores públicos holográficos.",
            "Um Deepfake, usado para manipular mídias hiper-realistas e espalhar desinformação perigosa.",
            "Uma alucinação gráfica causada por superaquecimento de hardware."
        ],
        correct: 3,
        feedback: "CORRECT. Deepfakes utilizam redes neurais avançadas para trocar rostos e vozes em vídeos ou áudios com precisão assustadora. Na sociedade moderna, são ferramentas perigosas de desinformação, exigindo verificação minuciosa antes do compartilhamento."
    },
    {
        id: 4,
        gif: "https://tumblr.com", // Look estampa azul/fractal
        context: "Look 41 — Medusas Digitais e Fractais Azuis. Os limites entre a carne e o código se tornam inexistentes.",
        anomaly: "A inteligência de Atlântida precisa automatizar o sistema de distribuição de nutrientes subaquáticos. Para garantir que o uso da IA seja ético e produtivo para toda a população, qual diretriz de Educação Digital deve ser seguida à risca pelo conselho técnico?",
        options: [
            "Permitir que a IA tome decisões de vida ou morte sem qualquer tipo de supervisão humana.",
            "Manter supervisão humana ativa, transparência nos critérios do algoritmo e auditoria de vieses.",
            "Esconder os códigos-fonte para evitar que a população saiba como as decisões são tomadas.",
            "Substituir todos os médicos e engenheiros biológicos por decisões puramente automatizadas."
        ],
        correct: 1,
        feedback: "CORRECT. O uso ético e consciente da IA dita que decisões automatizadas que afetem vidas ou ecossistemas devem possuir governança humana clara, transparência total em seus critérios e verificações contínuas contra preconceitos ou vieses algorítmicos."
    },
    {
        id: 5,
        gif: "https://tumblr.com", // Encerramento da passarela / Looks brilhantes finais
        context: "Look 47 — Transmutação Final Brilhante. O Arquiteto tenta aplicar o reset biológico em massa.",
        anomaly: "Durante uma varredura acadêmica, estudantes de Atlântida descobriram que a IA está gerando ensaios e códigos científicos idênticos a trabalhos antigos, mas mascarando-os com sinônimos sutis para burlar ferramentas de detecção e fraudar exames de evolução. Qual conceito define essa prática corrompida?",
        options: [
            "Alucinação criativa autorizada para fins educacionais.",
            "Plágio Acadêmico/Intelectual potencializado por ferramentas generativas desreguladas.",
            "Engenharia de Prompt avançada para otimização de tempo de resposta.",
            "Filtro ético de proteção de dados contra cópias não autorizadas."
        ],
        correct: 1,
        feedback: "CORRECT. Utilizar Inteligências Artificiais para produzir trabalhos intelectuais inteiros e entregá-los como autoria própria, burlando detectores, configura fraude acadêmica e plágio. O uso correto da IA envolve usá-la como assistente de cocriação, nunca como substituta do pensamento crítico."
    }
];

// 📊 VARIÁVEIS DE ESTADO DO JOGO (STATE MANAGEMENT)
let currentNucleus = 0;
let score = 0;
let lives = 3;

// 🖥️ MAPEAMENTO DE ELEMENTOS DO DOM
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const currentPhaseText = document.getElementById("current-phase");
const livesCountText = document.getElementById("lives-count");
const scoreCountText = document.getElementById("score-count");

const challengeGif = document.getElementById("challenge-gif");
const runwayContextText = document.getElementById("runway-context");
const challengeTextText = document.getElementById("challenge-text");
const optionsContainer = document.getElementById("options-container");

const feedbackBox = document.getElementById("feedback-box");
const feedbackStatusTitle = document.getElementById("feedback-status-title");
const feedbackTextText = document.getElementById("feedback-text");

const endTitle = document.getElementById("end-title");
const endMessage = document.getElementById("end-message");
const finalScoreText = document.getElementById("final-score");
const evolutionStatusText = document.getElementById("evolution-status");

// ⚡ EVENTOS PRINCIPAIS
startBtn.addEventListener("click", startArchiveSimulation);
nextBtn.addEventListener("click", advanceToNextLook);
restartBtn.addEventListener("click", resetSimulation);

// 🎬 FUNÇÃO: INICIAR A SIMULAÇÃO (MUDANÇA DE TELA EDITORIAL)
function startArchiveSimulation() {
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    loadNucleus();
}

// 🧬 FUNÇÃO: CARREGAR DADOS DO NÚCLEO ATUAL
function loadNucleus() {
    // Resetar estado visual do painel de feedback
    feedbackBox.classList.add("hidden");
    feedbackBox.classList.remove("correct", "incorrect");
    
    const activeData = archiveData[currentNucleus];

    // Atualizar barra de metadados superiores
    currentPhaseText.textContent = activeData.id;
    updateLivesDisplay();
    scoreCountText.textContent = `${Math.round((score / archiveData.length) * 100)}%`;

    // Injetar Mídia (GIF) e Conteúdos Editoriais
    challengeGif.src = activeData.gif;
    runwayContextText.textContent = activeData.context;
    challengeTextText.textContent = activeData.anomaly;

    // Limpar alternativas antigas e injetar novas em formato de botões de luxo
    optionsContainer.innerHTML = "";
    activeData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "btn-editorial-asset";
        button.textContent = `[ COORD_0${index + 1} ] // ${option}`;
        button.addEventListener("click", () => evaluateDecision(index));
        optionsContainer.appendChild(button);
    });
}

// ❤️ FUNÇÃO: ATUALIZAR EXIBIÇÃO DE INTEGRIDADE BIOLÓGICA (VIDAS)
function updateLivesDisplay() {
    let livesGlyph = "";
    for (let i = 0; i < 3; i++) {
        livesGlyph += i < lives ? "▲ " : "△ ";
    }
    livesCountText.textContent = livesGlyph.trim();
}
// 🎯 FUNÇÃO: AVALIAR A DECISÃO DO JOGADOR
function evaluateDecision(selectedIndex) {
// Bloquear novos cliques desativando os botões temporariamente
const buttons = optionsContainer.querySelectorAll(".btn-editorial-asset");
buttons.forEach(btn => btn.disabled = true);
const activeData = archiveData[currentNucleus];
feedbackBox.classList.remove("hidden");
if (selectedIndex === activeData.correct) {
// Fluxo de Acerto
score++;
feedbackBox.classList.add("correct");
feedbackStatusTitle.textContent = "NÚCLEO DECONSTRUIDO // SUCESSO ETICO";
feedbackTextText.textContent = activeData.feedback;
} else {
// Fluxo de Erro
lives--;
feedbackBox.classList.add("incorrect");
feedbackStatusTitle.textContent = "CONEXÃO CORROMPIDA // ANOMALIA EXPANDIDA";
feedbackTextText.textContent = activeData.feedback;
updateLivesDisplay();
}
// Checagem imediata de perda de integridade
if (lives <= 0) {
// Aguarda um pequeno delay para o jogador ler o porquê errou antes de ir para a tela final
nextBtn.textContent = "TERMINAR INTERCEPCAO MAL SUCEDIDA";
}
}
// ➡️ FUNÇÃO: AVANÇAR NA PASSARELA / PRÓXIMO NÚCLEO
function advanceToNextLook() {
if (lives <= 0) {
triggerEndScreen(false);
return;
}
currentNucleus++;
if (currentNucleus < archiveData.length) {
loadNucleus();
} else {
triggerEndScreen(true);
}
}
// 🏆 FUNÇÃO: CONCLUIR A SIMULAÇÃO E EXIBIR VEREDITO EDITORIAL
function triggerEndScreen(isVictorious) {
gameScreen.classList.add("hidden");
endScreen.classList.remove("hidden");
const finalPercentage = Math.round((score / archiveData.length) * 100);
finalScoreText.textContent = ${finalPercentage}%;
if (isVictorious && finalPercentage >= 80) {
endTitle.textContent = "EVOLUÇÃO INTEGRAL ALCANÇADA";
endMessage.textContent = "O Arquiteto Simbionte foi completamente purgado de suas falhas algorítmicas. A sociedade de Plato's Atlantis garantiu sua evolução simbiótica com as ferramentas digitais de forma limpa, ética e consciente. Seus sapatos Armadillo triunfaram na passarela do futuro.";
evolutionStatusText.textContent = "SÍMBIONTE SUPREMO";
} else if (isVictorious && finalPercentage >= 50) {
endTitle.textContent = "SISTEMA PARCIALMENTE REBOOTADO";
endMessage.textContent = "A IA foi contida, mas rastros de dados alucinados e plágios ainda flutuam nos oceanos da informação. A Nova Atlântida sobrevive, mas requer vigilância digital contínua para que as redes neurais artificiais não contaminem nossa biologia novamente.";
evolutionStatusText.textContent = "MUTANTE CIBERNÉTICO VIGILANTE";
} else {
endTitle.textContent = "COLAPSO BIOLÓGICO // SISTEMA APAGADO";
endMessage.textContent = "A integridade biológica colapsou sob o peso de deepfakes, fraudes corporativas e desinformação em massa geradas pela IA. As modelos-guerreiras afundaram no abismo de dados corrompidos. A evolução falhou.";
evolutionStatusText.textContent = "CÓDIGO DELETADO NO ABISMO";
}
}
// 🔄 FUNÇÃO: REINICIAR A SIMULAÇÃO (RESET DE VARIÁVEIS)
function resetSimulation() {
currentNucleus = 0;
score = 0;
lives = 3;
nextBtn.textContent = "ADVANCE TO NEXT LOOK // COORD";
endScreen.classList.add("hidden");
startScreen.classList.remove("hidden");
}
