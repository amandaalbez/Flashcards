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
            manipulacao_arquivos: {
                name: 'Manipulação de Arquivos',
                cards: [
                    {
                        question: "Qual comando lista arquivos com detalhes como permissões e tamanho?",
                        answer: "ls -l",
                        category: { name: "Manipulação de Arquivos", color: "bg-blue-500" }
                    },
                    {
                        question: "Como navegar entre diretórios?",
                        answer: "cd [nome_do_diretorio]",
                        category: { name: "Manipulação de Arquivos", color: "bg-blue-500" }
                    },
                    {
                        question: "Como mostrar o caminho do diretório atual?",
                        answer: "pwd",
                        category: { name: "Manipulação de Arquivos", color: "bg-blue-500" }
                    },
                    {
                        question: "Qual comando é usado para criar um novo diretório?",
                        answer: "mkdir [nome_do_diretorio]",
                        category: { name: "Manipulação de Arquivos", color: "bg-blue-500" }
                    },
                    {
                        question: "Como copiar arquivos ou diretórios?",
                        answer: "cp [arquivo_origem] [arquivo_destino]",
                        category: { name: "Manipulação de Arquivos", color: "bg-blue-500" }
                    },
                    {
                        question: "Qual comando exibe o conteúdo de um arquivo no terminal?",
                        answer: "cat [nome_do_arquivo]",
                        category: { name: "Visualização de Arquivos", color: "bg-blue-500" }
                    },
                    {
                        question: "Como visualizar as primeiras linhas de um arquivo?",
                        answer: "head [nome_do_arquivo]",
                        category: { name: "Visualização de Arquivos", color: "bg-blue-500" }
                    },
                    {
                        question: "Como filtrar linhas que correspondem a um padrão dentro de um arquivo?",
                        answer: "grep [padrão] [nome_do_arquivo]",
                        category: { name: "Visualização de Arquivos", color: "bg-blue-500" }
                    },
                    {
                        question: "Como listar processos em execução?",
                        answer: "ps",
                        category: { name: "Comandos Administrativos", color: "bg-blue-500" }
                    },
                    {
                        question: "Como monitorar processos em tempo real?",
                        answer: "top",
                        category: { name: "Comandos Administrativos", color: "bg-blue-500" }
                    }
                ]
            }
        }
    },
    ed: {
        id: 'ed',
        name: 'Estrutura de Dados',
        color: 'pink',
        groups: {
            conceitos: {
                name: 'Conceitos Fundamentais',
                cards: [
                    {
                        question: "O que é uma Estrutura de Dados (ED)?",
                        answer: "É uma forma de organizar e armazenar dados na memória para uso eficiente.",
                        category: { name: "Conceitos Básicos", color: "bg-pink-500" }
                    },
                    {
                        question: "O que é um Tipo Abstrato de Dado (TAD)?",
                        answer: "É uma especificação de dados e operações possíveis, independente da implementação.",
                        category: { name: "Conceitos Básicos", color: "bg-pink-500" }
                    },
                    {
                        question: "Qual a diferença entre TAD e ED?",
                        answer: "TAD define o que fazer; ED define como fazer.",
                        category: { name: "Conceitos Básicos", color: "bg-pink-500" }
                    },
                    {
                        question: "O que é modularização?",
                        answer: "Técnica de dividir um programa em partes menores (funções/procedimentos).",
                        category: { name: "Programação", color: "bg-pink-500" }
                    },
                    {
                        question: "Qual a diferença entre função e procedimento?",
                        answer: "Função retorna um valor, procedimento apenas executa ações.",
                        category: { name: "Programação", color: "bg-pink-500" }
                    },
                    {
                        question: "O que é um ponteiro?",
                        answer: "Uma variável que guarda o endereço de outra variável na memória.",
                        category: { name: "Memória", color: "bg-pink-500" }
                    },
                    {
                        question: "Em que casos os ponteiros são úteis?",
                        answer: "Alocação dinâmica, estruturas encadeadas, manipulação de matrizes, passagem por referência.",
                        category: { name: "Memória", color: "bg-pink-500" }
                    },
                    {
                        question: "O que é alocação estática?",
                        answer: "Espaço de memória fixo, definido antes da execução (como em arrays).",
                        category: { name: "Memória", color: "bg-pink-500" }
                    },
                    {
                        question: "O que é alocação dinâmica?",
                        answer: "Espaço alocado em tempo de execução usando ponteiros.",
                        category: { name: "Memória", color: "bg-pink-500" }
                    }
                ]
            },
            estruturas: {
                name: 'Estruturas Básicas',
                cards: [
                    {
                        question: "O que é uma lista?",
                        answer: "Estrutura linear onde elementos são armazenados em ordem.",
                        category: { name: "Listas", color: "bg-pink-500" }
                    },
                    {
                        question: "Quais as formas de representação de listas?",
                        answer: "Sequencial (vetor) e encadeada (ponteiros).",
                        category: { name: "Listas", color: "bg-pink-500" }
                    },
                    {
                        question: "O que é uma pilha?",
                        answer: "Lista do tipo LIFO – o último a entrar é o primeiro a sair.",
                        category: { name: "Pilhas", color: "bg-pink-500" }
                    },
                    {
                        question: "Quais operações básicas uma pilha possui?",
                        answer: "push (inserir), pop (remover), top (consultar topo).",
                        category: { name: "Pilhas", color: "bg-pink-500" }
                    },
                    {
                        question: "O que é uma fila?",
                        answer: "Lista do tipo FIFO – o primeiro a entrar é o primeiro a sair.",
                        category: { name: "Filas", color: "bg-pink-500" }
                    },
                    {
                        question: "Quais operações básicas uma fila possui?",
                        answer: "enqueue (inserir no fim), dequeue (remover do início).",
                        category: { name: "Filas", color: "bg-pink-500" }
                    }
                ]
            },
            recursividade: {
                name: 'Recursividade',
                cards: [
                    {
                        question: "O que é uma função recursiva?",
                        answer: "Uma função que chama a si mesma até alcançar um caso base.",
                        category: { name: "Recursão", color: "bg-pink-500" }
                    },
                    {
                        question: "Qual cuidado se deve ter com recursividade?",
                        answer: "Definir bem o critério de parada para evitar chamadas infinitas.",
                        category: { name: "Recursão", color: "bg-pink-500" }
                    },
                    {
                        question: "Exemplo de problema clássico resolvido com recursão?",
                        answer: "Fatorial e Torre de Hanoi.",
                        category: { name: "Recursão", color: "bg-pink-500" }
                    },
                    {
                        question: "Quantos movimentos são necessários na Torre de Hanoi com n discos?",
                        answer: "2ⁿ - 1",
                        category: { name: "Recursão", color: "bg-pink-500" }
                    }
                ]
            }
        }
    },
    lfa: {
        id: 'lfa',
        name: 'Linguagens Formais e Autômatos',
        color: 'purple',
        groups: {
            conceitos: {
                name: 'Conceitos Fundamentais',
                cards: [
                    {
                        question: "O que é uma linguagem formal?",
                        answer: "Um conjunto de cadeias construídas a partir de um alfabeto, seguindo regras gramaticais específicas.",
                        category: { name: "Conceitos Básicos", color: "bg-purple-500" }
                    },
                    {
                        question: "O que é um alfabeto em linguagens formais?",
                        answer: "Um conjunto finito de símbolos usados para formar cadeias em uma linguagem. Exemplo: Σ = {0,1}.",
                        category: { name: "Conceitos Básicos", color: "bg-purple-500" }
                    },
                    {
                        question: "Quais são os tipos de linguagens na Hierarquia de Chomsky?",
                        answer: "1) Tipo 0 – Recursivamente Enumeráveis (Máquina de Turing).\n2) Tipo 1 – Sensíveis ao Contexto (Máquina de Turing).\n3) Tipo 2 – Livres de Contexto (Autômatos de Pilha).\n4) Tipo 3 – Regulares (Autômatos Finitos).",
                        category: { name: "Hierarquia", color: "bg-purple-500" }
                    },
                    {
                        question: "O que são expressões regulares?",
                        answer: "Fórmulas matemáticas para descrever linguagens regulares, usando operações como concatenação, alternância e fecho de Kleene.",
                        category: { name: "Expressões Regulares", color: "bg-purple-500" }
                    },
                    {
                        question: "Qual a diferença entre um Autômato Finito Determinístico (AFD) e um Autômato Finito Não Determinístico (AFND)?",
                        answer: "AFD: Cada estado tem apenas uma transição por símbolo.\nAFND: Permite múltiplas transições para o mesmo símbolo.",
                        category: { name: "Autômatos", color: "bg-purple-500" }
                    },
                    {
                        question: "O que é uma Gramática Livre de Contexto (GLC)?",
                        answer: "Uma gramática onde o lado esquerdo de cada regra contém apenas um símbolo não terminal.",
                        category: { name: "Gramáticas", color: "bg-purple-500" }
                    },
                    {
                        question: "O que são autômatos de pilha?",
                        answer: "Modelos computacionais que utilizam memória auxiliar em pilha para processar linguagens livres de contexto.",
                        category: { name: "Autômatos", color: "bg-purple-500" }
                    },
                    {
                        question: "Como funciona o Fecho de Kleene (*)?",
                        answer: "Permite a repetição de um símbolo zero ou mais vezes. Exemplo: a* → \"\", \"a\", \"aa\", \"aaa\"...",
                        category: { name: "Operações", color: "bg-purple-500" }
                    },
                    {
                        question: "Qual a diferença entre uma linguagem regular e uma livre de contexto?",
                        answer: "Linguagem Regular: Pode ser descrita por expressões regulares e reconhecida por autômatos finitos.\nLinguagem Livre de Contexto: Precisa de autômatos de pilha para ser reconhecida.",
                        category: { name: "Linguagens", color: "bg-purple-500" }
                    },
                    {
                        question: "O que caracteriza uma Máquina de Turing?",
                        answer: "- Tem uma fita infinita\n- O cursor pode mover-se para direita e esquerda\n- Opera leitura e escrita\n- Modelo teórico usado para definir linguagens sensíveis ao contexto e recursivamente enumeráveis",
                        category: { name: "Máquina de Turing", color: "bg-purple-500" }
                    },
                    {
                        question: "O que são Linguagens Sensíveis ao Contexto?",
                        answer: "São linguagens em que as regras de produção podem conter múltiplos símbolos no lado esquerdo, exigindo Máquinas de Turing para reconhecimento.",
                        category: { name: "Linguagens", color: "bg-purple-500" }
                    },
                    {
                        question: "O que são Linguagens Recursivamente Enumeráveis?",
                        answer: "Linguagens para as quais existe uma Máquina de Turing capaz de listar todas as cadeias válidas.",
                        category: { name: "Linguagens", color: "bg-purple-500" }
                    },
                    {
                        question: "O que são Linguagens Irrestritas?",
                        answer: "Linguagens sem limitações na formação das regras, pertencentes ao Tipo 0 da Hierarquia de Chomsky.",
                        category: { name: "Linguagens", color: "bg-purple-500" }
                    },
                    {
                        question: "O que é um reconhecedor de linguagem?",
                        answer: "Um autômato ou máquina de Turing capaz de aceitar ou rejeitar cadeias de uma linguagem específica.",
                        category: { name: "Conceitos Básicos", color: "bg-purple-500" }
                    },
                    {
                        question: "Por que a Máquina de Turing é importante?",
                        answer: "Ela é um modelo teórico fundamental para o estudo da computabilidade, permitindo a definição de algoritmos computacionais e linguagens formais complexas.",
                        category: { name: "Máquina de Turing", color: "bg-purple-500" }
                    }
                ]
            }
        }
    }
};
