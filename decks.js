// Define decks como uma variável global
window.decks = {
    ia: {
        id: 'ia',
        name: 'Inteligência Artificial',
        color: 'pink',
        groups: {
            conceitos: {
                name: 'NP2',
                description: '22 cartões sobre a matéria da NP2',
                cards: [
                    {
                        question: "O que é Inteligência Artificial?",
                        answer: "É a simulação de processos de inteligência humana por máquinas.",
                        category: { name: "Conceitos", color: "bg-purple-500" }
                    }
                    // Adicione mais cards de IA aqui
                ]
            },
        }
    },
    so: {
        id: 'so',
        name: 'Sistemas Operacionais',
        color: 'blue',
        groups: {
            np2: {
                name: 'NP2',
                cards: [
                    {
                        question: "O que é uma derivada?",
                        answer: "É a taxa de variação instantânea de uma função.",
                        category: { name: "Cálculo", color: "bg-blue-500" }
                    },
                    {
                        question: "O que possibilita a existência de diferentes distribuições Linux?",
                        answer: "O caráter de código aberto do Linux permite que qualquer pessoa modifique e distribua o sistema para atender a necessidades específicas.",
                        category: { name: "Distribuições Linux", color: "bg-blue-500" }
                    },
                    {
                        question: "O que é o shell no Linux?",
                        answer: "É uma interface de linha de comando que permite a interação entre o usuário e o sistema operacional.",
                        category: { name: "Shell no Linux", color: "bg-blue-500" }
                    },
                    {
                        question: "Qual afirmação sobre o shell está incorreta?",
                        answer: "A ideia de que ele oferece um ambiente gráfico para os usuários.",
                        category: { name: "Shell no Linux", color: "bg-blue-500" }
                    },
                    {
                        question: "Qual comando mostra o diretório atual no Linux?",
                        answer: "pwd",
                        category: { name: "Comandos básicos", color: "bg-blue-500" }
                    },
                    {
                        question: "Qual comando é usado para copiar arquivos ou diretórios no Linux?",
                        answer: "cp",
                        category: { name: "Comandos básicos", color: "bg-blue-500" }
                    },
                    {
                        question: "Qual comando exibe o conteúdo de um arquivo de texto no Linux?",
                        answer: "cat",
                        category: { name: "Comandos básicos", color: "bg-blue-500" }
                    },
                    {
                        question: "O que faz o comando grep \"chico\" lista?",
                        answer: "Pesquisa padrões em arquivos, mostrando as linhas que contêm \"chico\".",
                        category: { name: "Manipulação de arquivos", color: "bg-blue-500" }
                    },
                    {
                        question: "Como buscar um livro chamado \"O Pequeno Príncipe\" em um arquivo de texto?",
                        answer: "Usando o comando grep -i \"o pequeno príncipe\" allbook.txt.",
                        category: { name: "Manipulação de arquivos", color: "bg-blue-500" }
                    },
                    {
                        question: "Qual a função do kernel no Linux?",
                        answer: "Gerenciar recursos do sistema, como CPU, memória e dispositivos de entrada/saída.",
                        category: { name: "Kernel do Linux", color: "bg-blue-500" }
                    },
                    {
                        question: "Como criar um diretório chamado \"provas\"?",
                        answer: "Usando o comando mkdir provas.",
                        category: { name: "Gerenciamento de diretórios", color: "bg-blue-500" }
                    }
                ]
            },
        }
    }
};
