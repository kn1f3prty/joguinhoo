const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const caixaResultadol = document.querySelector(".caixa-resultado");

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                 texto: "Acabar com todos os problemas sociais do Brasil, como a pobreza, fome, preconceitos raciais, etc...mas extinguir a Amazônia.",
                 afirmacao: "Afirmação 1",

            },
            {
                texto: "Todas as crianças no sistema de adoção encontrariam um bom lar, mas... a quantidade de animais abandonados duplicaria.",
                afirmacao: "Afirmação 2",
            },
        ]
    },
    {
         enunciado: "No âmbito ambiental, você prefere:",
         alternativas: [
            {
                 texto: "Despoluir completamente os oceanos, mas... a humanidade ficara impossibilitada de criar ou tirar qualquer renda economica a partir deles.",
                 afirmacao: "Afirmação 3",

            },
            {
                texto: "Restituir grandes reservas naturais espalhadas ao redor do mundo, mas... o tráfico animal e humano aumentará.",
                afirmacao: "Afirmação 4",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
         {
            texto: "A humanidade desenvolve a tecnologia ao maximo, mas... mesmo que os civis a utilizem para o bem, seu governo a utiliza para o mal de forma opressora.",
            afirmacao: "Afirmação 3",

         },
         {
           texto: "Conseguimos criar uma técnologia de ponta que combate celulas cancerígenas e imitam celulas tronco, mas... todos os países que tem direito à saúde pública tenham-no removido.",
           afirmacao: "Afirmação 4",
         },
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent= "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPerguntas();