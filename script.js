/* =====================================================
   PLATO'S ATLANTIS — THE GAME
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const loadingScreen =
    document.getElementById("loadingScreen");

const loadingProgress =
    document.getElementById("loadingProgress");

const loadingText =
    document.getElementById("loadingText");

const menuScreen =
    document.getElementById("menuScreen");

const gameScreen =
    document.getElementById("gameScreen");

const finalScreen =
    document.getElementById("finalScreen");

const startButton =
    document.getElementById("startButton");

const restartButton =
    document.getElementById("restartButton");

const challengeNumber =
    document.getElementById("challengeNumber");

const challengeCategory =
    document.getElementById("challengeCategory");

const challengeTitle =
    document.getElementById("challengeTitle");

const challengeImage =
    document.getElementById("challengeImage");

const question =
    document.getElementById("question");

const answers =
    document.getElementById("answers");

const feedback =
    document.getElementById("feedback");

const nextButton =
    document.getElementById("nextButton");

const scoreDisplay =
    document.getElementById("score");

const gameProgress =
    document.getElementById("gameProgress");

const finalScore =
    document.getElementById("finalScore");

const finalMessage =
    document.getElementById("finalMessage");

const settingsButton =
    document.getElementById("settingsButton");

const settingsPanel =
    document.getElementById("settingsPanel");

const closeSettings =
    document.getElementById("closeSettings");

const musicButton =
    document.getElementById("musicButton");

const backgroundMusic =
    document.getElementById("backgroundMusic");


/* =====================================================
   ESTADO
===================================================== */

let currentChallenge = 0;

let score = 0;

let musicEnabled = true;


/* =====================================================
   DESAFIOS
===================================================== */

const challenges = [

    {
        category: "AUTONOMY",

        title: "THE MACHINE",

        image: "images/challenge-1.jpg",

        question:
            "Uma inteligência artificial começa a tomar decisões pessoais pelos habitantes de Atlantis. Qual é o principal problema?",

        answers: [
            "As pessoas perdem parte da capacidade de decidir por si mesmas.",
            "A cidade possui computadores demais.",
            "A inteligência artificial ficou visualmente muito complexa.",
            "O sistema precisa de mais espaço."
        ],

        correct: 0,

        feedback:
            "A autonomia está relacionada à capacidade de uma pessoa tomar decisões sobre a própria vida. A tecnologia pode auxiliar decisões, mas não deve simplesmente eliminar a possibilidade de escolha."
    },


    {
        category: "PRIVACY",

        title: "THE MEMORY",

        image: "images/challenge-2.jpg",

        question:
            "A IA coleta informações pessoais dos habitantes sem explicar claramente como esses dados serão utilizados. Qual questão deve ser considerada?",

        answers: [
            "Privacidade e controle sobre os dados pessoais.",
            "A velocidade do computador.",
            "O tamanho da cidade.",
            "A aparência da interface."
        ],

        correct: 0,

        feedback:
            "Privacidade envolve compreender quais dados são coletados, para que são utilizados e quais possibilidades de controle existem sobre essas informações."
    },


    {
        category: "BIAS",

        title: "THE MIRROR",

        image: "images/challenge-3.jpg",

        question:
            "Um sistema produz resultados diferentes para determinados grupos porque seus dados de treinamento representam esses grupos de maneira desigual. O que deve ser investigado?",

        answers: [
            "Somente a velocidade do sistema.",
            "O tamanho da tela.",
            "Possíveis vieses nos dados e no sistema.",
            "A qualidade da conexão."
        ],

        correct: 2,

        feedback:
            "Sistemas de IA podem reproduzir padrões presentes nos dados utilizados para desenvolvê-los. Por isso, os dados e os resultados precisam ser analisados criticamente."
    },


    {
        category: "CRITICAL THINKING",

        title: "THE ORACLE",

        image: "images/challenge-4.jpg",

        question:
            "Uma IA apresenta uma informação como verdadeira. Qual atitude demonstra pensamento crítico?",

        answers: [
            "Aceitar imediatamente porque a informação veio de uma IA.",
            "Compartilhar a informação imediatamente.",
            "Verificar a informação em fontes confiáveis.",
            "Ignorar qualquer informação produzida por tecnologia."
        ],

        correct: 2,

        feedback:
            "Pensamento crítico significa analisar informações e verificar evidências. Uma resposta produzida por uma IA também pode conter erros."
    },


    {
        category: "HUMAN CONTROL",

        title: "THE LAST CHOICE",

        image: "images/challenge-5.jpg",

        question:
            "Qual medida pode ajudar a manter os habitantes de Atlantis no controle de decisões importantes que envolvem sistemas de IA?",

        answers: [
            "Permitir que a IA tome todas as decisões.",
            "Manter supervisão humana e possibilidade de contestação.",
            "Esconder dos habitantes como o sistema funciona.",
            "Impedir qualquer pessoa de questionar os resultados."
        ],

        correct: 1,

        feedback:
            "Supervisão humana e possibilidade de contestar decisões importantes ajudam a preservar a autonomia das pessoas."
    }

];


/* =====================================================
   CARREGAMENTO — EXATAMENTE 5 SEGUNDOS
===================================================== */

const loadingDuration = 5000;

const loadingStart = Date.now();


function updateLoading() {

    const elapsed =
        Date.now() - loadingStart;

    const percentage =
        Math.min(
            elapsed / loadingDuration * 100,
            100
        );


    loadingProgress.style.width =
        percentage + "%";


    if (percentage < 25) {

        loadingText.textContent =
            "ENTERING ATLANTIS...";

    } else if (percentage < 50) {

        loadingText.textContent =
            "LOADING ARCHIVE...";

    } else if (percentage < 75) {

        loadingText.textContent =
            "PREPARING CHALLENGES...";

    } else if (percentage < 100) {

        loadingText.textContent =
            "ATLANTIS IS WAITING...";

    } else {

        loadingText.textContent =
            "READY";

        clearInterval(loadingInterval);

        /*
         * Depois dos 5 segundos,
         * a tela começa a desaparecer.
         */

        setTimeout(() => {

            loadingScreen.classList.add("fade-out");

        }, 100);

        /*
         * Depois do fade-out,
         * ela deixa de ocupar a tela.
         */

        setTimeout(() => {

            loadingScreen.classList.add("hidden");

            menuScreen.classList.remove("hidden");

        }, 1300);

    }

}


const loadingInterval =
    setInterval(updateLoading, 50);


/* =====================================================
   INICIAR JOGO
===================================================== */

startButton.addEventListener("click", () => {

    currentChallenge = 0;

    score = 0;

    scoreDisplay.textContent = "0";

    menuScreen.classList.add("hidden");

    finalScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");

    loadChallenge();


    /*
     * O navegador normalmente exige uma interação
     * do usuário antes de permitir áudio.
     */

    if (musicEnabled) {

        backgroundMusic.play().catch(() => {});

    }

});


/* =====================================================
   CARREGAR DESAFIO
===================================================== */

function loadChallenge() {

    const challenge =
        challenges[currentChallenge];


    challengeNumber.textContent =
        currentChallenge + 1;


    challengeCategory.textContent =
        challenge.category;


    challengeTitle.textContent =
        challenge.title;


    challengeImage.src =
        challenge.image;


    challengeImage.alt =
        challenge.title;


    question.textContent =
        challenge.question;


    answers.innerHTML = "";


    feedback.classList.add("hidden");

    nextButton.classList.add("hidden");


    gameProgress.style.width =
        ((currentChallenge + 1) / challenges.length * 100)
        + "%";


    challenge.answers.forEach(
        (answerText, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer";

            button.textContent =
                answerText;


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );


            answers.appendChild(button);

        }
    );

}


/* =====================================================
   SELECIONAR RESPOSTA
===================================================== */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    const challenge =
        challenges[currentChallenge];


    const allButtons =
        document.querySelectorAll(".answer");


    /*
     * Impede que o jogador responda
     * várias vezes ao mesmo desafio.
     */

    allButtons.forEach(button => {

        button.disabled = true;

    });


    if (
        selectedIndex ===
        challenge.correct
    ) {

        selectedButton.classList.add("correct");


        score += 100;


        scoreDisplay.textContent =
            score;


        feedback.innerHTML =
            "<strong>CORRECT</strong>" +
            challenge.feedback;


    } else {

        selectedButton.classList.add("wrong");


        allButtons[
            challenge.correct
        ].classList.add("correct");


        feedback.innerHTML =
            "<strong>INCORRECT</strong>" +
            challenge.feedback;

    }


    feedback.classList.remove("hidden");

    nextButton.classList.remove("hidden");

}


/* =====================================================
   PRÓXIMO DESAFIO
===================================================== */

nextButton.addEventListener("click", () => {

    currentChallenge++;


    if (
        currentChallenge >=
        challenges.length
    ) {

        showFinalScreen();

    } else {

        loadChallenge();

    }

});


/* =====================================================
   TELA FINAL
===================================================== */

function showFinalScreen() {

    gameScreen.classList.add("hidden");

    finalScreen.classList.remove("hidden");


    finalScore.textContent =
        score;


    if (score === 500) {

        finalMessage.textContent =
            "Você completou todos os desafios e demonstrou compreensão dos principais conceitos relacionados à autonomia, privacidade, vieses e pensamento crítico no uso de IA.";

    } else if (score >= 300) {

        finalMessage.textContent =
            "Você avançou pelos arquivos de Atlantis e identificou diversos aspectos importantes relacionados ao uso responsável da inteligência artificial.";

    } else {

        finalMessage.textContent =
            "Os arquivos de Atlantis continuam abertos. Você pode jogar novamente para explorar os desafios e revisar os conceitos apresentados.";

    }

}


/* =====================================================
   JOGAR NOVAMENTE
===================================================== */

restartButton.addEventListener("click", () => {

    currentChallenge = 0;

    score = 0;

    scoreDisplay.textContent = "0";

    finalScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");

    loadChallenge();

});


/* =====================================================
   SETTINGS
===================================================== */

settingsButton.addEventListener("click", () => {

    settingsPanel.classList.remove("hidden");

});


closeSettings.addEventListener("click", () => {

    settingsPanel.classList.add("hidden");

});


/* =====================================================
   MÚSICA
===================================================== */

musicButton.addEventListener("click", () => {

    musicEnabled = !musicEnabled;


    if (musicEnabled) {

        musicButton.textContent = "ON";

        backgroundMusic.play().catch(() => {});

    } else {

        musicButton.textContent = "OFF";

        backgroundMusic.pause();

    }

});
