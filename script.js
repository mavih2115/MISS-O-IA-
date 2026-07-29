const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acorda uma manhã de sábado e percebe que seu celular está com uma notificação de um aplicativo novo que promete organizar toda a sua rotina usando Inteligência Artificial. O que você faz?",
        alternativas: [
            {
                texto: "Baixa o aplicativo imediatamente e começa a testar todas as funções para ver se realmente funciona.",
                afirmacao: "Sempre foi curioso(a) com novas tecnologias e não perde a chance de experimentar algo inovador."
            },
            {
                texto: "Pesquisa sobre o aplicativo antes de baixar, lendo avaliações e verificando como ele lida com os seus dados pessoais.",
                afirmacao: "É uma pessoa cuidadosa e prefere entender como as tecnologias funcionam antes de adotá-las no dia a dia."
            }
        ]
    },
    {
        enunciado: "Durante uma prova de matemática, você percebe que alguns colegas estão usando o celular escondido para resolver as questões com um aplicativo de IA. A professora ainda não percebeu. O que você faz?",
        alternativas: [
            {
                texto: "Continua a prova normalmente, focando em resolver as questões com o próprio conhecimento, pois acredita que a IA não substitui o aprendizado real.",
                afirmacao: "Acredita que o esforço pessoal é o que realmente constrói conhecimento e que depender da IA para tarefas acadêmicas pode prejudicar o próprio desenvolvimento."
            },
            {
                texto: "Sente curiosidade sobre como o aplicativo funciona e, depois da prova, decide conhecer essa ferramenta para entender como ela resolve problemas matemáticos.",
                afirmacao: "Tem uma visão aberta e entende que a tecnologia pode ser uma aliada no aprendizado, desde que usada com consciência e responsabilidade."
            }
        ]
    },
    {
        enunciado: "Seu professor propôs um projeto criativo: cada aluno deve criar um curta-metragem usando ferramentas digitais. Um colega sugere usar IA para gerar o roteiro inteiro. Como você participa dessa discussão?",
        alternativas: [
            {
                texto: "Concorda com o colega e sugere usar a IA para gerar o roteiro, os personagens e até a trilha sonora, aproveitando ao máximo a tecnologia.",
                afirmacao: "É entusiasta da tecnologia e enxerga na IA uma forma de amplificar a criatividade, permitindo que pessoas sem experiência técnica também produzam conteúdos de qualidade."
            },
            {
                texto: "Propõe usar a IA apenas como apoio — para gerar ideias iniciais ou rascunhos —, mas que o roteiro final seja escrito pela equipe, com suas próprias ideias e toque pessoal.",
                afirmacao: "Valoriza a autoria e acredita que a tecnologia deve complementar o talento humano, e não substituí-lo. Sabe que os melhores resultados surgem da combinação entre criatividade humana e ferramentas digitais."
            }
        ]
    },
    {
        enunciado: "Um vídeo gerado por IA mostrando um evento que nunca aconteceu se torna viral nas redes sociais. Muitas pessoas compartilham como se fosse real. O que você faz ao ver esse vídeo?",
        alternativas: [
            {
                texto: "Analisa o vídeo com atenção, procurando sinais de manipulação, como inconsistências visuais ou lógicas, e evita compartilhar antes de confirmar a veracidade.",
                afirmacao: "Desenvolveu uma postura crítica diante das informações na internet e entende que, em uma era de deepfakes e conteúdo gerado por IA, verificar a fonte é uma responsabilidade de todos."
            },
            {
                texto: "Acha interessante a qualidade do vídeo e compartilha com amigos, comentando que é impressionante como a IA consegue criar conteúdos tão realistas.",
                afirmacao: "Ficou fascinado(a) com o poder da IA de criar conteúdos convincentes e começou a acompanhar mais de perto o tema, percebendo tanto o potencial criativo quanto os riscos de desinformação."
            }
        ]
    },
    {
        enunciado: "Sua escola vai receber uma doação de computadores novos e a direção perguntou à comunidade escolar o que priorizar: investir em equipamentos para uma sala de informática tradicional ou em um laboratório de robótica com kits de Inteligência Artificial para os alunos. Qual sua opinião?",
        alternativas: [
            {
                texto: "Prefere o laboratório de robótica com IA, pois acredita que preparar os alunos para o futuro significa dar acesso a tecnologias que serão cada vez mais presentes no mercado de trabalho.",
                afirmacao: "Tem uma visão de futuro e defende que a escola deve ir além do currículo tradicional, oferecendo experiências práticas com tecnologias que moldarão as próximas décadas."
            },
            {
                texto: "Prefere a sala de informática tradicional, pois acha importante primeiro garantir que todos os alunos dominem as ferramentas básicas antes de avançar para áreas mais complexas.",
                afirmacao: "É uma pessoa que valoriza bases sólidas e acredita que a inclusão digital começa pelo acesso ao fundamental. Antes de correr para a IA, é preciso garantir que ninguém fique para trás no básico."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
