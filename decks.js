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
                    }
                    // Adicione mais cards de matemática aqui
                ]
            },
        }
    }
};
