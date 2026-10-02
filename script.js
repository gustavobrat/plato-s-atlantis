/* =========================================================
   PLATO'S ATLANTIS
   Interactive Editorial Experience
   ========================================================= */


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const loadingScreen = document.getElementById("loading-screen");
const loadingProgress = document.getElementById("loading-progress");
const loadingStatus = document.getElementById("loading-status");

const site = document.getElementById("site");

const backgroundMusic = document.getElementById("background-music");
const soundControl = document.getElementById("sound-control");
const soundIndicator = document.querySelector(".sound-indicator");

const systemTime = document.getElementById("system-time");

const enterExperience = document.getElementById("enter-experience");

const challengeContainer =
    document.getElementById("challenge-container");

const challengeNumber =
    document.getElementById("challenge-number");

const challengeCategory =
    document.getElementById("challenge-category");

const challengeImage =
    document.getElementById("challenge-image");

const challengeTitle =
    document.getElementById("challenge-title");

const challengeQuestion =
    document.getElementById("challenge-question");

const answerOptions =
    document.getElementById("answer-options");

const challengeProgress =
    document.getElementById("challenge-progress");

const threatCounter =
    document.getElementById("threat-counter");

const feedbackPanel =
    document.getElementById("feedback-panel");

const feedbackStatus =
    document.getElementById("feedback-status");

const feedbackTitle =
    document.getElementById("feedback-title");

const feedbackDescription =
    document.getElementById("feedback-description");

const nextChallenge =
    document.getElementById("next-challenge");

const finalScore =
    document.getElementById("final-score");

const finalMessage =
    document.getElementById("final-message");

const restartGame =
    document.getElementById("restart-game");

const returnArchive =
    document.getElementById("return-archive");

const cursorLabel =
    document.getElementById("cursor-label");


/* =========================================================
   GAME STATE
   ========================================================= */

let currentChallenge = 0;
let score = 0;
let answered = false;
let musicPlaying = false;


/* =========================================================
   CHALLENGES
   ========================================================= */

const challenges = [

    {
        number: "ARCHIVE 01",

        category: "AI HALLUCINATION",

        image: "images/challenge-01.jpg",

        title: "THE INVENTED SOURCE",

        question:
            "A IA afirma que uma determinada pesquisa científica existe e fornece um link para comprovar a informação. O link, porém, não funciona e nenhum registro confiável da pesquisa é encontrado. O que o cidadão de Nova Atlântida deve fazer?",

        options: [

            {
                text:
                    "Acreditar na resposta porque a IA apresentou uma fonte.",
                correct: false
            },

            {
                text:
                    "Verificar a informação em fontes confiáveis antes de utilizá-la.",
                correct: true
            },

            {
                text:
                    "Compartilhar a informação e pedir que outras pessoas confirmem.",
                correct: false
            },

            {
                text:
                    "Considerar que toda informação produzida por IA é falsa.",
                correct: false
            }

        ],

        feedbackCorrect:
            "TRANSMISSION VERIFIED",

        feedbackWrong:
            "TRANSMISSION COMPROMISED",

        explanation:
            "Modelos de IA podem produzir informações incorretas ou até inventar referências. Uma resposta convincente não substitui a verificação em fontes confiáveis."
    },


    {
        number: "ARCHIVE 02",

        category: "DEEPFAKE",

        image: "images/challenge-02.jpg",

        title: "THE FALSE IMAGE",

        question:
            "Uma imagem extremamente realista aparece nas redes sociais mostrando uma pessoa pública fazendo uma declaração que nunca havia sido registrada. Antes de compartilhar, qual é a atitude mais responsável?",

        options: [

            {
                text:
                    "Compartilhar rapidamente porque a imagem parece verdadeira.",
                correct: false
            },

            {
                text:
                    "Verificar a origem da imagem e procurar registros independentes do acontecimento.",
                correct: true
            },

            {
                text:
                    "Confiar nos comentários da publicação.",
                correct: false
            },

            {
                text:
                    "Assumir que imagens digitais não podem ser manipuladas.",
                correct: false
            }

        ],

        feedbackCorrect:
            "IMAGE AUTHENTICITY CHECK PASSED",

        feedbackWrong:
            "IMAGE AUTHENTICITY CHECK FAILED",

        explanation:
            "Deepfakes podem produzir imagens e vídeos muito convincentes. A aparência de autenticidade não é suficiente: é necessário investigar a origem e buscar confirmação independente."
    },


    {
        number: "ARCHIVE 03",

        category: "PLAGIARISM",

        image: "images/challenge-03.jpg",

        title: "THE BORROWED VOICE",

        question:
            "Um estudante utiliza uma IA para produzir um trabalho escolar inteiro e entrega o texto como se tivesse sido escrito por ele, sem revisar, compreender ou informar que utilizou a ferramenta. Qual é o principal problema?",

        options: [

            {
                text:
                    "Usar qualquer ferramenta digital em trabalhos escolares é sempre errado.",
                correct: false
            },

            {
                text:
                    "O estudante pode deixar de demonstrar sua própria aprendizagem e apresentar conteúdo gerado por IA como se fosse autoria própria.",
                correct: true
            },

            {
                text:
                    "A IA sempre produz textos melhores que os humanos.",
                correct: false
            },

            {
                text:
                    "O problema desaparece se o texto estiver gramaticalmente correto.",
                correct: false
            }

        ],

        feedbackCorrect:
            "AUTHORSHIP VERIFIED",

        feedbackWrong:
            "AUTHORSHIP COMPROMISED",

        explanation:
            "O uso consciente de IA exige transparência e responsabilidade. Em atividades escolares, é importante seguir as regras da instituição e não apresentar como próprio aquilo que não foi produzido ou compreendido pelo estudante."
    },


    {
        number: "ARCHIVE 04",

        category: "PRIVACY",

        image: "images/challenge-04.jpg",

        title: "THE OPEN ARCHIVE",

        question:
            "Um cidadão quer usar uma ferramenta de IA para analisar um documento pessoal. O arquivo contém endereço, telefone, documentos de identificação e outras informações privadas. Qual é a atitude mais segura?",

        options: [

            {
                text:
                    "Enviar o documento completo, pois a IA precisa de todas as informações.",
                correct: false
            },

            {
                text:
                    "Remover informações pessoais desnecessárias e verificar como a ferramenta trata os dados antes de enviar o arquivo.",
                correct: true
            },

            {
                text:
                    "Publicar o documento em uma rede social antes de enviá-lo à IA.",
                correct: false
            },

            {
                text:
                    "Enviar porque informações privadas não podem ser copiadas digitalmente.",
                correct: false
            }

        ],

        feedbackCorrect:
            "PRIVACY PROTOCOL ACTIVE",

        feedbackWrong:
            "PRIVACY PROTOCOL BREACHED",

        explanation:
            "Informações pessoais devem ser tratadas com cuidado. Antes de enviar dados para uma ferramenta de IA, é importante minimizar informações desnecessárias e entender as políticas de privacidade do serviço."
    },


    {
        number: "ARCHIVE 05",

        category: "RESPONSIBLE USE",

        image: "images/challenge-05.jpg",

        title: "THE CONSCIOUS MACHINE",

        question:
            "Um cidadão utiliza IA para gerar ideias iniciais para um projeto. Depois, verifica as informações, modifica o material, acrescenta suas próprias ideias e deixa claro quando a ferramenta foi utilizada. O que esse exemplo demonstra?",

        options: [

            {
                text:
                    "Uso consciente da IA como ferramenta de apoio, com revisão e responsabilidade humana.",
                correct: true
            },

            {
                text:
                    "Delegação completa da criação para a máquina.",
                correct: false
            },

            {
                text:
                    "Que respostas de IA não precisam ser verificadas.",
                correct: false
            },

            {
                text:
                    "Que qualquer conteúdo gerado por IA pode ser utilizado sem alterações.",
                correct: false
            }

        ],

        feedbackCorrect:
            "CONSCIOUS USE CONFIRMED",

        feedbackWrong:
            "HUMAN OVERSIGHT REQUIRED",

        explanation:
            "IA pode ser uma ferramenta útil para pesquisar, organizar ideias e criar rascunhos. O uso consciente envolve revisão humana, verificação das informações, respeito às regras e responsabilidade pelo resultado final."
    }

];


/* =========================================================
   LOADING SCREEN
   ========================================================= */

function startLoading() {

    let progress = 0;

    const loadingMessages = [

        "INITIALIZING ATLANTIS",

        "CALIBRATING BIOSPHERE",

        "CONNECTING TO ARCHIVE",

        "SEARCHING FOR SIGNAL",

        "ANALYSING HUMAN ACTIVITY",

        "DETECTING ARTIFICIAL INTELLIGENCE",

        "SYSTEM READY"

    ];

    const loadingInterval = setInterval(() => {

        progress += Math.random() * 4 + 1;

        if (progress >= 100) {
            progress = 100;
        }

        loadingProgress.style.width =
            `${progress}%`;

        const messageIndex =
            Math.min(
                Math.floor(progress / 15),
                loadingMessages.length - 1
            );

        loadingStatus.textContent =
            loadingMessages[messageIndex];


        if (progress >= 100) {

            clearInterval(loadingInterval);

            setTimeout(() => {

                finishLoading();

            }, 800);

        }

    }, 80);

}


/* =========================================================
   FINISH LOADING
   ========================================================= */

function finishLoading() {

    site.classList.add("loaded");

    loadingScreen.classList.add("finished");

    startMusic();

    setTimeout(() => {

        document
            .getElementById("manifesto")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 1500);

}


/* =========================================================
   MUSIC
   ========================================================= */

function startMusic() {

    if (!backgroundMusic) {
        return;
    }

    backgroundMusic.volume = 0.35;

    const playPromise =
        backgroundMusic.play();

    if (playPromise !== undefined) {

        playPromise
            .then(() => {

                musicPlaying = true;

                updateSoundInterface();

            })
            .catch(() => {

                musicPlaying = false;

                updateSoundInterface();

            });

    }

}


function toggleMusic() {

    if (!backgroundMusic) {
        return;
    }

    if (musicPlaying) {

        backgroundMusic.pause();

        musicPlaying = false;

    } else {

        backgroundMusic.play()
            .then(() => {

                musicPlaying = true;

            })
            .catch(() => {

                musicPlaying = false;

            });

    }

    updateSoundInterface();

}


function updateSoundInterface() {

    if (!soundIndicator) {
        return;
    }

    soundIndicator.textContent =
        musicPlaying ? "●" : "○";

}


/* =========================================================
   CLOCK
   ========================================================= */

function updateClock() {

    if (!systemTime) {
        return;
    }

    const now = new Date();

    const hours =
        String(now.getHours()).padStart(2, "0");

    const minutes =
        String(now.getMinutes()).padStart(2, "0");

    const seconds =
        String(now.getSeconds()).padStart(2, "0");

    systemTime.textContent =
        `${hours}:${minutes}:${seconds}`;

}

setInterval(updateClock, 1000);

updateClock();


/* =========================================================
   NAVIGATION
   ========================================================= */

const navigationButtons =
    document.querySelectorAll(
        ".editorial-navigation button"
    );


navigationButtons.forEach(button => {

    button.addEventListener("click", () => {

        const targetID =
            button.dataset.section;

        const target =
            document.getElementById(targetID);

        if (!target) {
            return;
        }

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================================================
   ENTER EXPERIENCE
   ========================================================= */

if (enterExperience) {

    enterExperience.addEventListener(
        "click",
        () => {

            const experience =
                document.getElementById("experience");

            if (!experience) {
                return;
            }

            experience.scrollIntoView({
                behavior: "smooth"
            });

            setTimeout(() => {

                startGame();

            }, 900);

        }
    );

}


/* =========================================================
   START GAME
   ========================================================= */

function startGame() {

    currentChallenge = 0;

    score = 0;

    answered = false;

    feedbackPanel.classList.remove("visible");

    loadChallenge();

}


/* =========================================================
   LOAD CHALLENGE
   ========================================================= */

function loadChallenge() {

    const challenge =
        challenges[currentChallenge];

    if (!challenge) {

        finishGame();

        return;

    }


    answered = false;


    challengeNumber.textContent =
        challenge.number;

    challengeCategory.textContent =
        challenge.category;

    challengeTitle.textContent =
        challenge.title;

    challengeQuestion.textContent =
        challenge.question;

    challengeProgress.textContent =
        `${currentChallenge + 1} / ${challenges.length}`;

    threatCounter.textContent =
        `${String(currentChallenge + 1).padStart(2, "0")} / ${String(challenges.length).padStart(2, "0")}`;


    /* IMAGE */

    challengeImage.src =
        challenge.image;

    challengeImage.alt =
        challenge.title;


    /* RESET FEEDBACK */

    feedbackPanel.classList.remove(
        "visible"
    );


    /* CLEAR ANSWERS */

    answerOptions.innerHTML = "";


    /* CREATE ANSWERS */

    challenge.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer-option";

            button.textContent =
                `${String.fromCharCode(65 + index)} — ${option.text}`;

            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        option,
                        button
                    );

                }
            );

            answerOptions.appendChild(button);

        }
    );


    /* SMALL ENTRANCE ANIMATION */

    challengeContainer.animate(
        [
            {
                opacity: 0,
                transform: "translateY(15px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],
        {
            duration: 500,
            easing: "ease-out"
        }
    );

}


/* =========================================================
   SELECT ANSWER
   ========================================================= */

function selectAnswer(option, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;


    const allButtons =
        answerOptions.querySelectorAll(
            ".answer-option"
        );


    allButtons.forEach(button => {

        button.disabled = true;

    });


    if (option.correct) {

        score++;

        selectedButton.classList.add(
            "correct"
        );

        feedbackStatus.textContent =
            option.correct
                ? "SYSTEM RESPONSE / VERIFIED"
                : "SYSTEM RESPONSE / ERROR";

        feedbackTitle.textContent =
            "THREAT IDENTIFIED";

    } else {

        selectedButton.classList.add(
            "wrong"
        );

        feedbackStatus.textContent =
            "SYSTEM RESPONSE / WARNING";

        feedbackTitle.textContent =
            "THREAT NOT IDENTIFIED";


        /* Highlight correct answer */

        allButtons.forEach(
            (button, index) => {

                if (
                    challenges[currentChallenge]
                        .options[index]
                        .correct
                ) {

                    button.classList.add(
                        "correct"
                    );

                }

            }
        );

    }


    feedbackDescription.textContent =
        option.correct
            ? `${option.correct ? challenges[currentChallenge].feedbackCorrect : ""}. ${challenges[currentChallenge].explanation}`
            : `${challenges[currentChallenge].feedbackWrong}. ${challenges[currentChallenge].explanation}`;


    feedbackPanel.classList.add(
        "visible"
    );


    setTimeout(() => {

        feedbackPanel.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 250);

}


/* =========================================================
   NEXT CHALLENGE
   ========================================================= */

if (nextChallenge) {

    nextChallenge.addEventListener(
        "click",
        () => {

            currentChallenge++;

            if (
                currentChallenge >=
                challenges.length
            ) {

                finishGame();

            } else {

                loadChallenge();

                setTimeout(() => {

                    challengeContainer.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }, 100);

            }

        }
    );

}


/* =========================================================
   FINISH GAME
   ========================================================= */

function finishGame() {
