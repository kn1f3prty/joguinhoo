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
                 afirmacao: "Parabéns! Você acabou com todos os probleas sociais do país! ...Agora imagine a Amazônia queimando e todos os animaizinhos morrendo em agônia. <3 ",

            },
            {
                texto: "Todas as crianças no sistema de adoção encontrariam um bom lar, mas... a quantidade de animais abandonados duplicaria.",
                afirmacao: "Não existe mais sistema de adoção e todas as criançinhas estão felizes! Yay! Mas por SUA causa milhares de animaizinhos estão sendo maltratados, passando frio, fome e sem amor e carinho nas ruas. <3 ",
            },
        ]
    },
    {
         enunciado: "No âmbito ambiental, você prefere:",
         alternativas: [
            {
                 texto: "Despoluir completamente os oceanos, mas... a humanidade ficara impossibilitada de criar ou tirar qualquer renda economica a partir deles.",
                 afirmacao: "Parabéns! Oceanos limpos e saudáveis, porém o mundo se encontra em um completo caos sem uma de suas principais fontes de renda. <3",

            },
            {
                texto: "Restituir grandes reservas naturais espalhadas ao redor do mundo, mas... o tráfico animal e humano aumentará.",
                afirmacao: "Uma boa escolha! As reservas se encontram restauradas e diversos problemas ambientais foram resolvidos... mas por sua causa... diversas pessoas e animais estão vivendo o inferno na terra, sendo maltradadas, violadas e com fonte de alimento escassa. <3",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
         {
            texto: "A humanidade desenvolve a tecnologia ao maximo, mas... mesmo que os civis a utilizem para o bem, seu governo a utiliza para o mal de forma opressora.",
            afirmacao: "Decadas de estudo e sonhos sao concretizadas... mas a mentalidade corrompida de quem está no poder, utiliza tal tecnologia para transformar o mundo em uma distopia opressora e elitista. <3",

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
let historiaFinal = "";

function mostraPerguntas(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent= "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> opcaoSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
function respostaSelecionada (opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
        atual ++;
        mostraPerguntas();
 }

 function mostraResultado(){
    caixaPerguntas.textContent = "De acordo com sua escolha ...";
    texto.Resultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
 }

mostraPerguntas();