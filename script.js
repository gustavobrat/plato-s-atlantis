// BANCO DE DADOS DOS DESAFIOS PEDAGÓGICOS (FORTALEZA DAS SENHAS)
const desafios = [
    {
        pergunta: "Para proteger os designs digitais da coleção, você precisa criar uma senha mestra robusta. Qual das opções abaixo segue os padrões de segurança mais avançados?",
        opcoes: [
            "McQueen2010 (Fácil de lembrar e associada ao tema)",
            "Pl@t0s_At14ntis!9 (Mistura letras maiúsculas/minúsculas, números e símbolos)",
            "12345678a# (Contém caracteres especiais, mas sequência óbvia)",
            "alexandermcqueen (Longa, porém puramente alfabética e previsível)"
        ],
        correta: 1,
        justificativa: "Senhas fortes misturam intencionalmente letras maiúsculas, minúsculas, números e símbolos sem criar padrões ou sequências óbvias. Isso dificulta ataques automatizados de força bruta."
    },
    {
        pergunta: "O sistema detectou um e-mail com o assunto: '[ALERTA URGENTE] Atualize suas credenciais da passarela digital ou sua conta será deletada em 2h'. O link aponta para 'http://security-mcqueen-update.net'. O que fazer?",
        opcoes: [
            "Clicar imediatamente para não perder o acesso ao painel de controle",
            "Ignorar o link, não fornecer dados e reportar como tentativa de Phishing",
            "Preencher apenas o usuário para testar se a página é segura",
            "Responder o e-mail enviando a senha antiga para validação humana"
        ],
        correta: 1,
        justificativa: "Isso é Phishing! Golpistas usam senso de urgência e links falsos com nomes parecidos com marcas reais para induzir você a entregar dados. Nunca clique em links suspeitos ou faça login por eles."
    },
    {
        pergunta: "Você quer blindar o acesso ao banco de dados genéticos da Atlântida contra invasões mesmo se descobrirem a sua senha. Qual camada extra deve ser ativada?",
        opcoes: [
            "Mudar a senha toda semana para uma variação parecida",
            "Ativar a Autenticação de Dois Fatores (2FA / MFA)",
            "Ocultar o nome de usuário da tela de login principal",
            "Aumentar o brilho e criptografia do monitor holográfico"
        ],
        correta: 1,
        justificativa: "A Autenticação de Dois Fatores (2FA) exige um código extra (geralmente gerado no celular) além da senha. Mesmo que um bio-hacker descubra sua senha, ele não conseguirá invadir sem o segundo fator."
    },
    {
        pergunta: "Ao criar perguntas de segurança para recuperação de conta, qual abordagem oferece menor risco de engenharia social?",
        opcoes: [
            "Escolher perguntas cujas respostas possam ser achadas nas suas redes sociais",
            "Usar respostas falsas/inventadas que só você saberia e guardá-las em um gerenciador",
            "Colocar o nome do seu primeiro animal de estimação de forma literal",
            "Desativar completamente as senhas e usar apenas perguntas simples"
        ],
        correta: 1,
        justificativa: "Respostas reais a perguntas clássicas (como cidade natal ou nome da mãe) podem ser facilmente descobertas por golpistas investigando suas redes sociais. Inventar respostas sem nexo ou usar um gerenciador de senhas é muito mais seguro."
    },
    {
        pergunta: "Um suposto técnico do desfile entra em contato via chat pedindo o código de validação que acabou de chegar via SMS no seu celular para 'limpar os caches do servidor'. Como agir?",
        opcoes: [
            "Fornecer o código imediatamente, pois técnicos precisam de suporte ágil",
            "Recusar o envio. Códigos de SMS/tokens são privados e o suporte legítimo não os solicita",
            "Passar o código mas mudar a senha logo em seguida",
            "Digitar um código aleatório incorreto para confundi-lo"
        ],
        correta: 1,
        justificativa: "Códigos enviados por SMS ou autenticadores são chaves de acesso direto à sua conta (tokens). Empresas sérias e suportes legítimos nunca pedem esses códigos temporários por chat ou telefone."
    }
];

// VARIÁVEIS DE CONTROLE DE ESTADO DO JOGO
let faseAtual = 0;
let pontuacao = 0;
let vidas = 3;

// FUNÇÃO PARA TROCA DE TELAS
function alternarTela(telaAtivaId) {
    // Esconde todas as telas
    const telas = document.querySelectorAll('.screen');
    telas.forEach(tela => tela.classList.remove('active'));

    // Ativa a tela solicitada
    const telaDestino = document.getElementById(telaAtivaId);
    if (telaDestino) {
        telaDestino.classList.add('active');
    }
}

// FUNÇÃO PARA ATUALIZAR O PAINEL SUPERIOR (HUD)
function atualizarHUD() {
    document.getElementById('hud-phase').innerText = `${faseAtual + 1} / ${desafios.length}`;
    document.getElementById('hud-score').innerText = String(pontuacao).padStart(4, '0');
    
    // Atualiza a representação visual das vidas (com blocos digitais)
    let stringVidas = "";
    for (let i = 0; i < 3; i++) {
        if (i < vidas) {
            stringVidas += "█"; // Vida ativa
        } else {
            stringVidas += "░"; // Vida perdida
        }
    }
    document.getElementById('hud-lives').innerText = stringVidas;
}

// INICIAR O JOGO
function iniciarJogo() {
    faseAtual = 0;
    pontuacao = 0;
    vidas = 3;
    
    // Mostra o HUD de status
    document.getElementById('game-hud').style.display = 'flex';
    
    carregarDesafio();
    alternarTela('quiz-screen');
}

// CARREGA A PERGUNTA NA TELA
function carregarDesafio() {
    atualizarHUD();
    
    const dadosDesafio = desafios[faseAtual];
    document.getElementById('question-text').innerText = dadosDesafio.pergunta;
    
    const containerOpcoes = document.getElementById('options-container');
    containerOpcoes.innerHTML = ""; // Limpa opções anteriores

    // Injeta os botões de resposta dinamicamente
    dadosDesafio.opcoes.forEach((opcao, index) => {
        const botao = document.createElement('button');
        botao.className = "btn-atlantis btn-option";
        botao.innerText = opcao;
        botao.onclick = () => verificarResposta(index);
        containerOpcoes.appendChild(botao);
    });
}

// VERIFICA SE O JOGADOR ACERTOU OU ERROU
function verificarResposta(indiceSelecionado) {
    const dadosDesafio = desafios[faseAtual];
    const tituloFeedback = document.getElementById('feedback-title');
    const statusFeedback = document.getElementById('feedback-status');
    const textoFeedback = document.getElementById('feedback-text');

    if (indiceSelecionado === dadosDesafio.correta) {
        // Fluxo de acerto
        pontuacao += 200;
        tituloFeedback.innerText = "CÓDIGO PURIFICADO";
        tituloFeedback.className = "neon-text";
        statusFeedback.innerText = "INTEGRIDADE CONFIRMADA // +200 PTS";
        statusFeedback.className = "neon-text";
    } else {
        // Fluxo de erro
        vidas--;
        tituloFeedback.innerText = "SISTEMA CORROMPIDO";
        tituloFeedback.className = "red-text";
        statusFeedback.innerText = "SINAL DE INVASÃO DETECTADO // -1 VIDA";
        statusFeedback.className = "red-text";
    }

    // Exibe a explicação pedagógica detalhada
    textoFeedback.innerHTML = `<strong>Análise Técnica:</strong> ${dadosDesafio.justificativa}`;
    
    // Avança o HUD temporariamente antes da tela de feedback para refletir a perda de vida ou ganho de pontos
    atualizarHUD();
    
    // Redireciona para a tela de feedback conceitual
    alternarTela('feedback-screen');
}

// CONTROLADOR DO BOTÃO AVANÇAR DA TELA DE FEEDBACK
function proximoDesafio() {
    faseAtual++;

    // Condição de fim de jogo (Acabou as vidas ou passou as 5 fases)
    if (vidas <= 0 || faseAtual >= desafios.length) {
        finalizarJogo();
    } else {
        carregarDesafio();
        alternarTela('quiz-screen');
    }
}

// TELA FINAL E VEREDITO DE EVOLUÇÃO
function finalizarJogo() {
    // Esconde o HUD de jogo
    document.getElementById('game-hud').style.display = 'none';
    
    const tituloFinal = document.getElementById('end-title');
    const mensagemFinal = document.getElementById('end-message');
    document.getElementById('final-score').innerText = String(pontuacao).padStart(4, '0');

    if (vidas <= 0) {
        tituloFinal.innerText = "EXTINÇÃO DIGITAL";
        tituloFinal.style.color = "var(--neon-red)";
        mensagemFinal.innerHTML = "Sua fortaleza cibernética desmoronou sob os ataques de engenharia social. Os bio-hackers capturaram os dados e interromperam a evolução da alta-costura futurista. <br><br><strong>Recomendação técnica:</strong> Revise conceitos de Phishing e treine a criação de senhas fortes.";
    } else {
        tituloFinal.innerText = "EVOLUÇÃO COMPLETA";
        tituloFinal.style.color = "var(--neon-aqua)";
        mensagemFinal.innerHTML = "Parabéns! Você alcançou o ápice do desfile cibernético. Suas defesas contra Phishing, o uso correto do segundo fator de autenticação e suas senhas criptografadas salvaram os servidores centrais de Plato's Atlantis.";
    }

    alternarTela('end-screen');
}

// RESET TOTAL DO JOGO
function reiniciarJogo() {
    alternarTela('start-screen');
}
