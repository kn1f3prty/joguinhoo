const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternaivas");
const caixaResultados = document.querySelector(".caixa-resultado");
const caixaResultadol = document.querySelector(".caixa-resultado");

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: ["Acabar com todos os problemas sociais do Brasil, como a pobreza, fome, preconceitos raciais, etc...mas extinguir a amazonia.", "Todas as crianças no sistema de adoçao encontrariam um bom lar, mas... a quantidade de animais abandonados duplicaria."]
    },
    {
         enunciado: "No âmbito ambiental, você prefere:",
        alternativas: ["Despoluir completamente os oceanos, mas... a humanidade ficara impossibilitada de criar ou tirar qualquer renda economica a partir deles.", "Restituir grandes reservas naturais espalhadas ao redor do mundo, mas... o tráfico animal e humano aumentará."]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: ["A humanidade desenvolve a tecnologia ao maximo, mas... mesmo que os civis a utilizem para o bem, seu governo a utiliza para o mal de forma opressora.", "Alternativa 6"]
    }
]