const decks = {
    ia: {
        name: "Conceitos de IA",
        cards: [
            // PERCEPTRON
            {
                category: { name: "PERCEPTRON", color: "bg-green-500" },
                question: "O que é um Perceptron?",
                answer: "Um neurônio artificial que classifica padrões linearmente separáveis."
            },
            {
                category: { name: "PERCEPTRON", color: "bg-green-500" },
                question: "O que o Perceptron não consegue resolver?",
                answer: "Problemas não linearmente separáveis, como o XOR."
            },
            {
                category: { name: "PERCEPTRON", color: "bg-green-500" },
                question: "Qual é a fórmula de atualização de pesos no Perceptron?",
                answer: "w ← w + η * erro * entrada"
            },
            // MLP
            {
                category: { name: "MLP – Multilayer Perceptron", color: "bg-blue-500" },
                question: "O que é uma MLP?",
                answer: "Uma rede com múltiplas camadas, capaz de resolver problemas não lineares."
            },
            {
                category: { name: "MLP – Multilayer Perceptron", color: "bg-blue-500" },
                question: "Como funciona o aprendizado da MLP?",
                answer: "Usa o algoritmo de backpropagation para ajustar os pesos com base no erro."
            },
            {
                category: { name: "MLP – Multilayer Perceptron", color: "bg-blue-500" },
                question: "Qual a vantagem de mais camadas?",
                answer: "Extração de características mais complexas."
            },
            // CNNs
            {
                category: { name: "REDES CONVOLUCIONAIS – CNNs", color: "bg-orange-500" },
                question: "O que são redes convolucionais (CNN)?",
                answer: "Redes neurais especializadas em processamento de imagens."
            },
            {
                category: { name: "REDES CONVOLUCIONAIS – CNNs", color: "bg-orange-500" },
                question: "O que a camada convolucional faz?",
                answer: "Aplica filtros para extrair características da imagem (bordas, formas etc.)."
            },
            {
                category: { name: "REDES CONVOLUCIONAIS – CNNs", color: "bg-orange-500" },
                question: "O que a camada de pooling faz?",
                answer: "Reduz a dimensão e a complexidade dos dados."
            },
            {
                category: { name: "REDES CONVOLUCIONAIS – CNNs", color: "bg-orange-500" },
                question: "O que é Dropout?",
                answer: "Técnica que \"desliga\" neurônios aleatórios para evitar overfitting."
            },
            // ÁRVORES
            {
                category: { name: "ÁRVORES DE DECISÃO & RANDOM FOREST", color: "bg-yellow-500" },
                question: "O que é uma árvore de decisão?",
                answer: "Estrutura que toma decisões com base em testes de atributos."
            },
            {
                category: { name: "ÁRVORES DE DECISÃO & RANDOM FOREST", color: "bg-yellow-500" },
                question: "O que é a entropia em uma árvore de decisão?",
                answer: "Medida da desordem ou impureza do conjunto de dados."
            },
            {
                category: { name: "ÁRVORES DE DECISÃO & RANDOM FOREST", color: "bg-yellow-500" },
                question: "O que é Random Forest?",
                answer: "Conjunto de várias árvores que votam para melhorar a predição."
            },
            {
                category: { name: "ÁRVORES DE DECISÃO & RANDOM FOREST", color: "bg-yellow-500" },
                question: "Diferença entre bagging e boosting?",
                answer: "Bagging = paralelismo (Random Forest); Boosting = sequência corrigindo erros (ex: AdaBoost)."
            },
            // AVALIAÇÃO
            {
                category: { name: "AVALIAÇÃO DE MODELOS", color: "bg-purple-500" },
                question: "O que é MAE?",
                answer: "Erro absoluto médio – diferença média entre previsto e real."
            },
            {
                category: { name: "AVALIAÇÃO DE MODELOS", color: "bg-purple-500" },
                question: "O que é MSE e RMSE?",
                answer: "MSE = erro quadrático médio; RMSE = raiz do MSE."
            },
            {
                category: { name: "AVALIAÇÃO DE MODELOS", color: "bg-purple-500" },
                question: "O que é R² (R-quadrado)?",
                answer: "Mede quão bem o modelo se ajusta aos dados (0 a 1)."
            },
            {
                category: { name: "AVALIAÇÃO DE MODELOS", color: "bg-purple-500" },
                question: "Diferença entre precision e recall?",
                answer: "Precision: evita falsos positivos. Recall: evita falsos negativos."
            },
            {
                category: { name: "AVALIAÇÃO DE MODELOS", color: "bg-purple-500" },
                question: "O que é F1-score?",
                answer: "Média harmônica entre precision e recall – útil com classes desbalanceadas."
            },
            // VALIDAÇÃO
            {
                category: { name: "VALIDAÇÃO DE MODELOS", color: "bg-blue-600" },
                question: "O que é hold-out?",
                answer: "Divide dados em treino e teste (ex: 80%/20%)."
            },
            {
                category: { name: "VALIDAÇÃO DE MODELOS", color: "bg-blue-600" },
                question: "O que é cross-validation k-fold?",
                answer: "Divide os dados em K partes e alterna quais são treino e teste."
            },
            {
                category: { name: "VALIDAÇÃO DE MODELOS", color: "bg-blue-600" },
                question: "O que é bootstrapping?",
                answer: "Seleciona dados com reposição para montar vários conjuntos de treino/teste."
            }
        ]
    },
    greetings: {
        name: "Cumprimentos",
        cards: [
            // ...existing code...
        ]
    }
};
