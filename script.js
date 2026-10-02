/* =========================================================
   PLATO'S ATLANTIS — THE GAME

   JOGO EDUCATIVO SOBRE O USO CONSCIENTE DA
   INTELIGÊNCIA ARTIFICIAL

   TECNOLOGIAS:
   HTML + CSS + JAVASCRIPT

   OBJETIVO:
   O jogador atravessa cinco capítulos de Atlantis e
   analisa situações relacionadas ao uso responsável
   da inteligência artificial.

   PONTUAÇÃO:
   Cada resposta correta = 100 pontos
   Pontuação máxima = 500 pontos

   ÁUDIO:
   Existe somente uma música de fundo.
   Não existem efeitos sonoros de acerto ou erro.
========================================================= */


/* =========================================================
   01. ELEMENTOS DO HTML
========================================================= */


/* ---------- TELA DE CARREGAMENTO ---------- */

const loadingScreen =
    document.getElementById("loadingScreen");

const loadingProgress =
    document.getElementById("loadingProgress");

const loadingText =
    document.getElementById("loadingText");


/* ---------- TELAS PRINCIPAIS ---------- */

const menuScreen =
    document.getElementById("menuScreen");

const gameScreen =
    document.getElementById("gameScreen");

const finalScreen =
    document.getElementById("finalScreen");


/* ---------- BOTÕES PRINCIPAIS ---------- */

const startButton =
    document.getElementById("startButton");

const restartButton =
    document.getElementById("restartButton");


/* ---------- ELEMENTOS DO DESAFIO ---------- */

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


/* ---------- PONTUAÇÃO ---------- */

const scoreDisplay =
    document.getElementById("score");

const gameProgress =
    document.getElementById("gameProgress");

const finalScore =
    document.getElementById("finalScore");

const finalMessage =
    document.getElementById("finalMessage");


/* ---------- CONFIGURAÇÕES ---------- */

const settingsButton =
    document.getElementById("settingsButton");

const settingsPanel =
    document.getElementById("settingsPanel");

const closeSettings =
    document.getElementById("closeSettings");

const musicButton =
    document.getElementById("musicButton");


/* ---------- MÚSICA DE FUNDO ---------- */

const backgroundMusic =
    document.getElementById("backgroundMusic");



/* =========================================================
   02. ESTADO DO JOGO
========================================================= */


/*
   currentChallenge indica qual desafio está sendo exibido.

   0 = primeiro desafio
   1 = segundo desafio
   2 = terceiro desafio
   3 = quarto desafio
   4 = quinto desafio
*/

let currentChallenge = 0;


/*
   Pontuação inicial.
*/

let score = 0;


/*
   A música começa ativada.
*/

let musicEnabled = true;



/* =========================================================
   03. DESAFIOS
========================================================= */


/*
   Cada objeto representa um capítulo do jogo.

   category = tema educativo
   title = nome do capítulo
   image = imagem utilizada
   question = pergunta
   answers = alternativas
   correct = posição da resposta correta
   feedback = explicação educativa
*/


const challenges = [

    /* =====================================================
       CAPÍTULO 01
       AUTONOMIA
    ===================================================== */

    {

        category: "AUTONOMY",

        title: "THE MACHINE",

        image:
            "challenge-1.jpg",

        question:
            "Uma inteligência artificial começa a tomar decisões pessoais pelos habitantes de Atlantis. Qual é o principal problema dessa situação?",

        answers: [

            "As pessoas perdem parte da capacidade de decidir por si mesmas.",

            "A cidade possui computadores demais.",

            "A inteligência artificial ficou visualmente muito complexa.",

            "O sistema precisa de mais espaço."

        ],

        correct: 0,

        feedback:
            "A autonomia está relacionada à capacidade de uma pessoa tomar decisões sobre a própria vida. A inteligência artificial pode auxiliar uma decisão, mas não deve simplesmente eliminar a possibilidade de escolha humana."

    },


    /* =====================================================
       CAPÍTULO 02
       PRIVACIDADE
    ===================================================== */

    {

        category: "PRIVACY",

        title: "THE MEMORY",

        image:
            "images/challenge-2.jpg",

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
            "Privacidade envolve compreender quais dados são coletados, por que são utilizados e quais possibilidades de controle existem sobre essas informações."

    },


    /* =====================================================
       CAPÍTULO 03
       VIESES
    ===================================================== */

    {

        category: "BIAS",

        title: "THE MIRROR",

        image:
            "images/challenge-3.jpg",

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
            "Sistemas de inteligência artificial podem reproduzir padrões presentes nos dados utilizados para desenvolvê-los. Por isso, os dados e os resultados precisam ser analisados criticamente."

    },


    /* =====================================================
       CAPÍTULO 04
       PENSAMENTO CRÍTICO
    ===================================================== */

    {

        category: "CRITICAL THINKING",

        title: "THE ORACLE",

        image:
            "images/challenge-4.jpg",

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
            "Pensamento crítico significa analisar informações e verificar evidências. Uma resposta produzida por uma inteligência artificial também pode conter erros ou informações incorretas."

    },


    /* =====================================================
       CAPÍTULO 05
       SUPERVISÃO HUMANA
    ===================================================== */

    {

        category: "HUMAN CONTROL",

        title: "THE LAST CHOICE",

        image:
            "images/challenge-5.jpg",

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
            "Supervisão humana e possibilidade de contestar decisões importantes ajudam a preservar a autonomia das pessoas e permitem que problemas sejam identificados e corrigidos."

    }

];



/* =========================================================
   04. CARREGAMENTO INICIAL
========================================================= */


/*
   O carregamento dura 5 segundos.

   Depois dos 5 segundos:
   1. A mensagem muda para READY.
   2. A tela recebe a classe fade-out.
   3. O menu aparece depois da animação.

   O fade-out acontece DEPOIS do carregamento.
*/


const loadingDuration = 5000;

const loadingStart =
    Date.now();


let loadingFinished = false;


function updateLoading() {


    const elapsed =
        Date.now() - loadingStart;


    const percentage =
        Math.min(
            (elapsed / loadingDuration) * 100,
            100
        );


    /*
       Atualiza visualmente a barra.
    */

    loadingProgress.style.width =
        percentage + "%";


    /*
       Atualiza o texto durante o carregamento.
    */

    if (percentage < 25) {

        loadingText.textContent =
            "ENTERING ATLANTIS...";

    }

    else if (percentage < 50) {

        loadingText.textContent =
            "LOADING ARCHIVE...";

    }

    else if (percentage < 75) {

        loadingText.textContent =
            "PREPARING CHAPTERS...";

    }

    else if (percentage < 100) {

        loadingText.textContent =
            "ATLANTIS IS WAITING...";

    }

    else {

        /*
           Evita que o carregamento seja
           executado novamente.
        */

        if (loadingFinished) {
            return;
        }


        loadingFinished = true;


        loadingText.textContent =
            "READY";


        clearInterval(loadingInterval);


        /*
           Começa o fade-out.
        */

        setTimeout(() => {

            loadingScreen.classList.add(
                "fade-out"
            );

        }, 100);


        /*
           Depois da animação,
           mostra o menu principal.
        */

        setTimeout(() => {

            loadingScreen.classList.add(
                "hidden"
            );

            menuScreen.classList.remove(
                "hidden"
            );

        }, 1300);

    }

}


/*
   Atualização da barra a cada 50ms.
*/

const loadingInterval =
    setInterval(
        updateLoading,
        50
    );



/* =========================================================
   05. INICIAR O JOGO
========================================================= */


startButton.addEventListener(
    "click",
    () => {


        /*
           Reinicia o estado.
        */

        currentChallenge = 0;

        score = 0;


        /*
           Atualiza a pontuação visual.
        */

        scoreDisplay.textContent =
            "0";


        /*
           Troca a tela de introdução
           pela tela do jogo.
        */

        menuScreen.classList.add(
            "hidden"
        );

        finalScreen.classList.add(
            "hidden"
        );

        gameScreen.classList.remove(
            "hidden"
        );


        /*
           Carrega o primeiro capítulo.
        */

        loadChallenge();


        /*
           A música começa somente depois
           da interação do usuário.

           Isso evita problemas de autoplay
           dos navegadores.
        */

        if (musicEnabled) {

            backgroundMusic
                .play()
                .catch(() => {});

        }

    }
);



/* =========================================================
   06. CARREGAR DESAFIO
========================================================= */


function loadChallenge() {


    /*
       Obtém o desafio atual.
    */

    const challenge =
        challenges[currentChallenge];


    /*
       Número do capítulo.
    */

    challengeNumber.textContent =
        currentChallenge + 1;


    /*
       Categoria.
    */

    challengeCategory.textContent =
        challenge.category;


    /*
       Nome do capítulo.
    */

    challengeTitle.textContent =
        challenge.title;


    /*
       Atualiza a imagem.

       O JavaScript escolhe automaticamente:

       challenge-1.jpg
       challenge-2.jpg
       challenge-3.jpg
       challenge-4.jpg
       challenge-5.jpg
    */

    challengeImage.src =
        challenge.image;


    challengeImage.alt =
        "Imagem do capítulo " +
        (currentChallenge + 1);


    /*
       Atualiza a pergunta.
    */

    question.textContent =
        challenge.question;


    /*
       Atualiza o texto "CHAPTER 01",
       "CHAPTER 02", etc.

       Esse elemento existe no HTML
       através da classe chapter-label.
    */

    const chapterLabel =
        document.querySelector(
            ".chapter-label"
        );


    /*
       Existem dois .chapter-label no projeto:
       um na tela final e outro no desafio.

       Por isso procuramos especificamente
       dentro do conteúdo do desafio.
    */

    const challengeChapterLabel =
        document.querySelector(
            ".challenge-content .chapter-label"
        );


    if (challengeChapterLabel) {

        challengeChapterLabel.textContent =
            "CHAPTER " +
            String(
                currentChallenge + 1
            ).padStart(2, "0");

    }


    /*
       Limpa as alternativas anteriores.
    */

    answers.innerHTML = "";


    /*
       Esconde o feedback.
    */

    feedback.classList.add(
        "hidden"
    );


    /*
       Esconde o botão CONTINUE.
    */

    nextButton.classList.add(
        "hidden"
    );


    /*
       Atualiza a barra de progresso.

       Exemplo:

       Capítulo 1 = 20%
       Capítulo 2 = 40%
       Capítulo 3 = 60%
       Capítulo 4 = 80%
       Capítulo 5 = 100%
    */

    gameProgress.style.width =
        (
            (currentChallenge + 1) /
            challenges.length *
            100
        ) + "%";


    /*
       Cria cada alternativa.
    */

    challenge.answers.forEach(
        (answerText, index) => {


            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer";


            button.type =
                "button";


            button.textContent =
                answerText;


            /*
               Quando o jogador clicar,
               verifica a resposta.
            */

            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );


            answers.appendChild(
                button
            );

        }
    );

}



/* =========================================================
   07. SELECIONAR RESPOSTA
========================================================= */


function selectAnswer(
    selectedIndex,
    selectedButton
) {


    const challenge =
        challenges[currentChallenge];


    /*
       Seleciona todas as alternativas
       do desafio atual.
    */

    const allButtons =
        answers.querySelectorAll(
            ".answer"
        );


    /*
       Impede uma segunda resposta.
    */

    allButtons.forEach(
        button => {

            button.disabled = true;

        }
    );


    /*
       Verifica se a resposta está correta.
    */

    if (
        selectedIndex ===
        challenge.correct
    ) {


        /*
           Destaca a alternativa correta.
        */

        selectedButton.classList.add(
            "correct"
        );


        /*
           Adiciona 100 pontos.
        */

        score += 100;


        scoreDisplay.textContent =
            score;


        /*
           Feedback educativo.
        */

        feedback.innerHTML =
            "<strong>CORRECT</strong>" +
            challenge.feedback;

    }


    else {


        /*
           Destaca a resposta escolhida
           como incorreta.
        */

        selectedButton.classList.add(
            "wrong"
        );


        /*
           Mostra qual era a correta.
        */

        allButtons[
            challenge.correct
        ].classList.add(
            "correct"
        );


        /*
           Feedback educativo.
        */

        feedback.innerHTML =
            "<strong>INCORRECT</strong>" +
            challenge.feedback;

    }


    /*
       Mostra o feedback.
    */

    feedback.classList.remove(
        "hidden"
    );


    /*
       Mostra o botão para continuar.
    */

    nextButton.classList.remove(
        "hidden"
    );

}



/* =========================================================
   08. PRÓXIMO CAPÍTULO
========================================================= */


nextButton.addEventListener(
    "click",
    () => {


        currentChallenge++;


        /*
           Se os cinco capítulos terminaram,
           mostra o resultado final.
        */

        if (
            currentChallenge >=
            challenges.length
        ) {

            showFinalScreen();

        }


        /*
           Caso contrário,
           carrega o próximo capítulo.
        */

        else {

            loadChallenge();

        }

    }
);



/* =========================================================
   09. TELA FINAL
========================================================= */


function showFinalScreen() {


    /*
       Esconde o jogo.
    */

    gameScreen.classList.add(
        "hidden"
    );


    /*
       Mostra a tela final.
    */

    finalScreen.classList.remove(
        "hidden"
    );


    /*
       Mostra a pontuação.
    */

    finalScore.textContent =
        score;


    /*
       Mensagem final de acordo
       com a pontuação.
    */

    if (score === 500) {


        finalMessage.textContent =
            "Você completou todos os capítulos de Atlantis e demonstrou compreensão dos principais conceitos relacionados ao uso consciente da inteligência artificial: autonomia, privacidade, vieses, pensamento crítico e supervisão humana.";

    }


    else if (score >= 300) {


        finalMessage.textContent =
            "Você avançou pelos arquivos de Atlantis e identificou diversos aspectos importantes relacionados ao uso responsável da inteligência artificial. Continue explorando os desafios para revisar os conceitos.";

    }


    else {


        finalMessage.textContent =
            "Os arquivos de Atlantis continuam abertos. Jogue novamente para revisar os conceitos e analisar como a inteligência artificial pode ser utilizada de maneira mais consciente.";

    }

}



/* =========================================================
   10. JOGAR NOVAMENTE
========================================================= */


restartButton.addEventListener(
    "click",
    () => {


        /*
           Reinicia completamente
           a pontuação e os capítulos.
        */

        currentChallenge = 0;

        score = 0;


        scoreDisplay.textContent =
            "0";


        /*
           Troca a tela final
           pela tela do jogo.
        */

        finalScreen.classList.add(
            "hidden"
        );

        gameScreen.classList.remove(
            "hidden"
        );


        /*
           Carrega novamente
           o primeiro capítulo.
        */

        loadChallenge();


        /*
           Mantém a música tocando
           caso ela esteja ativada.
        */

        if (musicEnabled) {

            backgroundMusic
                .play()
                .catch(() => {});

        }

    }
);


/* =========================================================
   11. CONFIGURAÇÕES
========================================================= */


/*
   Abrir configurações.
*/

settingsButton.addEventListener(
    "click",
    () => {

        settingsPanel.classList.remove(
            "hidden"
        );

    }
);


/*
   Fechar configurações.
*/

closeSettings.addEventListener(
    "click",
    () => {

        settingsPanel.classList.add(
            "hidden"
        );

    }
);


/*
   Também permite fechar clicando
   fora da caixa de configurações.
*/

settingsPanel.addEventListener(
    "click",
    (event) => {


        if (
            event.target ===
            settingsPanel
        ) {

            settingsPanel.classList.add(
                "hidden"
            );

        }

    }
);



/* =========================================================
   12. MÚSICA DE FUNDO
========================================================= */


/*
   O botão alterna entre:

   ON
   OFF
*/


musicButton.addEventListener(
    "click",
    () => {


        musicEnabled =
            !musicEnabled;


        if (musicEnabled) {


            musicButton.textContent =
                "ON";


            backgroundMusic
                .play()
                .catch(() => {});

        }


        else {


            musicButton.textContent =
                "OFF";


            backgroundMusic.pause();

        }

    }
);
