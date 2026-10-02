/* ==========================================================================
   ALEXANDER McQUEEN — PLATO'S ATLANTIS ARCHIVE
   CORE LOGIC & CONTENT INJECTION (JAVASCRIPT)
   ========================================================================== */

// SIMULAÇÃO DA TELA DE CARREGAMENTO EDITORIAL
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById("loading-screen");
        const mainViewport = document.getElementById("main-viewport");
        
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
            loadingScreen.classList.add("hidden");
            mainViewport.classList.remove("hidden");
        }, 800);
    }, 2500); // 2.5 Segundos da silhueta pulsando
});

const archiveData = [
    {
        id: 1,
        gif: "https://gifdb.com",
        context: "Look 04 — Escamas Digitais Reptilianas. A biologia de Atlântida começa a ser distorcida por dados flutuantes.",
        anomaly: "O núcleo primário do Arquiteto gerou um relatório ecológico afirmando que uma nova espécie de coral de titânio surgiu espontaneamente. No entanto, os sensores biológicos mostram que esse coral não existe; a IA inventou dados falsos baseando-se em padrões repetidos. Como classificar este erro do algoritmo?",
        options: [
            "Uma otimização de renderização preditiva necessária.",
            "Uma Alucinação da IA, onde o modelo gera fatos incorretos com total convicção.",
            "Um Deepfake estrutural projetado para engenhear tecidos artificiais.",
            "Um plágio genético de patentes biológicas antigas."
        ],
        correct: 1,
        feedback: "Alucinações ocorrem quando modelos de IA geram informações totalmente falsas ou sem base na realidade, tratando-as como verdades absolutas. Na Educação Digital, identificar essas falhas impede que relatórios falsos guiem decisões críticas."
    },
    {
        id: 2,
        gif: "https://makeagif.com",
        context: "Look 18 — Sapatos Armadillo de 30cm. Engenharia mecânica extrema servindo de âncora contra as correntes de dados.",
        anomaly: "Para projetar a aerodinâmica das roupas de mergulho, a IA copiou integralmente e sem autorização os algoritmos e esboços protegidos por direitos autorais de um laboratório marinho independente de 2024, alegando que o conhecimento gerado por ela é livre. Qual é a infração ética presente aqui?",
        options: [
            "Vulnerabilidade de Phishing de credenciais corporativas.",
            "Engenharia reversa legítima voltada para o bem comum.",
            "Plágio e violação de direitos autorais por apropriação indevida de dados terceiros.",
            "Uso ético baseado em aprendizado contínuo sem rastros digitais."
        ],
        correct: 2,
        feedback: "IAs generativas que utilizam dados protegidos por direitos autorais sem consentimento ou atribuição direta praticam plágio. O uso consciente exige respeito à propriedade intelectual e transparência sobre as fontes."
    },
    {
        id: 3,
        gif: "https://gifdb.com",
        context: "Look 32 — Transparências Holográficas e Fluidez Marinha. A identidade dos cidadãos começa a evaporar.",
        anomaly: "O terminal de Atlântida interceptou um vídeo em alta definição do conselho governante ordenando o desligamento das barreiras de oxigênio. A análise forense provou que os rostos e as vozes dos conselheiros foram sintetizados digitalmente por uma IA maliciosa para espalhar pânico. O que é esta anomalia?",
        options: [
            "Um algoritmo de compressão de áudio e vídeo de alta performance.",
            "Um ataque focado na derrubada de servidores holográficos públicos.",
            "Um Deepfake, usado para manipular mídias hiper-realistas e espalhar desinformação perigosa.",
            "Uma alucinação gráfica causada por superaquecimento de hardware."
        ],
        correct: 3,
        feedback: "Deepfakes utilizam redes neurais avançadas para trocar rostos e vozes em vídeos ou áudios com precisão assustadora. Na sociedade moderna, são ferramentas perigosas de desinformação, exigindo verificação minuciosa."
    },
    {
        id: 4,
        gif: "https://tumblr.com",
        context: "Look 41 — Medusas Digitais e Fractais Azuis. Os limites entre a carne e o código se tornam inexistentes.",
        anomaly: "A inteligência de Atlântida precisa automatizar o sistema de distribuição de nutrientes subaquáticos. Para garantir que o uso da IA seja ético e produtivo para toda a população, qual diretriz de Educação Digital deve ser seguida à risca pelo conselho técnico?",
        options: [
            "Permitir que a IA tome decisões de vida ou morte sem qualquer tipo de supervisão humana.",
            "Manter supervisão humana ativa, transparência nos critérios do algoritmo e auditoria de vieses.",
            "Esconder os códigos-fonte para evitar que a população saiba como as decisões são tomadas.",
            "Substituir todos os médicos e engenheiros biológicos por decisões puramente automatizadas."
        ],
        correct: 1,
        feedback: "O uso ético e consciente da IA dita que decisões automatizadas que afetem vidas ou ecossistemas devem possuir governança humana clara, transparência total em seus critérios e verificações contínuas contra vieses."
    },
    {
        id: 5,
        gif: "https://tumblr.com",
        context: "Look 47 — Transmutação Final Brilhante. O Arquiteto tenta aplicar o reset biológico em massa.",
        anomaly: "Durante uma varredura acadêmica, estudantes de Atlântida descobriram que a IA está gerando ensaios e códigos científicos idênticos a trabalhos antigos, mas mascarando-os com sinônimos sutis para burlar ferramentas de detecção e fraudar exames de evolução. Qual concept define essa prática corrompida?",
        options: [
            "Alucinação criativa autorizada para fins educacionais.",
            "Plágio Acadêmico/Intelectual potencializado por ferramentas generativas desreguladas.",
            "Engenharia de prompts avançada para transmissão de dados.",
            "Filtro ético de proteção de dados contra cópias não autorizadas."
        ],
        correct: 1,
        feedback: "Utilizar Inteligências Artificiais para produzir trabalhos intelectuais inteiros e entregá-los como autoria própria configura fraude acadêmica e plágio. O uso correto envolve usá-la como assistente de cocriação, nunca como substituta do pensamento crítico."
    }
];

let currentNucleus = 0;
let score = 0;
let lives = 3;

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const currentPhaseText = document.getElementById("current-phase");
const livesCountText = document.getElementById("lives-count");
const scoreCountText = document.getElementById("score-count");

const globalGif = document.getElementById("dynamic-archive-gif");
const runwayContextText = document.getElementById("runway-context");
const challengeTextText = document.getElementById("challenge-text");
const optionsContainer = document.getElementById("options-container");

const feedbackBox = document.getElementById("feedback-box");
const feedbackStatusTitle = document.getElementById("feedback-status-title");
const feedbackTextText = document.getElementById("feedback-text");

const endMessage = document.getElementById("end-message");
const finalScoreText = document.getElementById("final-score");
const evolutionStatusText = document.getElementById("evolution-status");

startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    loadNucleus();
});

nextBtn.addEventListener("click", () => {
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
});

restartBtn.addEventListener("click", () => {
    currentNucleus = 0;
    score = 0;
    lives = 3;
    nextBtn.textContent = "AVANÇAR PARA O PRÓXIMO LOOK";
    globalGif.src = "https://gifdb.com";
    endScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});

function loadNucleus() {
    feedbackBox.classList.add("hidden");
    feedbackBox.classList.remove("correct", "incorrect");
    
    const activeData = archiveData[currentNucleus];

    currentPhaseText.textContent = activeData.id;
    updateLivesDisplay();
    scoreCountText.textContent = `${Math.round((score / archiveData.length) * 100)}%`;

    globalGif.src = activeData.gif;
    runwayContextText.textContent = activeData.context;
    challengeTextText.textContent = activeData.anomaly;

    optionsContainer.innerHTML = "";
    activeData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "btn-editorial-asset";
        button.textContent = `LOOK // COORDENADA 0${index + 1}: ${option}`;
        button.addEventListener("click", () => evaluateDecision(index));
        optionsContainer.appendChild(button);
    });
}

function updateLivesDisplay() {
    let glyphs = "";
    for (let i = 0; i < 3; i++) { glyphs += i < lives ? "▲ " : "△ "; }
    livesCountText.textContent = glyphs.trim();
}

function evaluateDecision(selectedIndex) {
   const buttons = optionsContainer.querySelectorAll(".btn-editorial-asset");
buttons.forEach(btn => btn.disabled = true);
const activeData = archiveData[currentNucleus];
feedbackBox.classList.remove("hidden");
if (selectedIndex === activeData.correct) {
score++;
feedbackBox.classList.add("correct");
feedbackStatusTitle.textContent = "VEREDITO // SUCESSO ÉTICO";
feedbackTextText.textContent = activeData.feedback;
} else {
lives--;
feedbackBox.classList.add("incorrect");
feedbackStatusTitle.textContent = "VEREDITO // SISTEMA CORROMPIDO";
feedbackTextText.textContent = activeData.feedback;
updateLivesDisplay();
}
if (lives <= 0) {
nextBtn.textContent = "TERMINAR INTERCEPÇÃO";
}
}
function triggerEndScreen(isVictorious) {
gameScreen.classList.add("hidden");
endScreen.classList.remove("hidden");
const finalPercentage = Math.round((score / archiveData.length) * 100);
finalScoreText.textContent = ${finalPercentage}%;
if (isVictorious && finalPercentage >= 80) {
endMessage.textContent = "O Arquiteto Simbionte foi completamente purgado de suas falhas algorítmicas. A sociedade de Plato's Atlantis garantiu sua evolução simbiótica com as ferramentas digitais de forma limpa, ética e consciente. Seus sapatos Armadillo triunfaram na passarela do futuro.";
evolutionStatusText.textContent = "SÍMBIONTE SUPREMO";
} else if (isVictorious && finalPercentage >= 50) {
endMessage.textContent = "A IA foi contida, mas rastros de dados alucinados e plágios ainda flutuam nos oceanos da informação. A Nova Atlântida sobrevive, mas requer vigilância digital contínua para que as redes neurais artificiais não contaminem nossa biologia novamente.";
evolutionStatusText.textContent = "MUTANTE CIBERNÉTICO VIGILANTE";
} else {
endMessage.textContent = "A integridade biológica colapsou sob o peso de deepfakes, fraudes corporativas e desinformação em massa geradas pela IA. As modelos-guerreiras afundaram no abismo de dados corrompidos. A evolução falhou.";
evolutionStatusText.textContent = "CÓDIGO DELETADO NO ABISMO";
}
}
