// Game state
let currentDeck = null;
let currentCardIndex = 0;
let score = 0;
let knownCards = [];
let reviewMode = false;

// DOM elements
const deckSelectionEl = document.getElementById('deck-selection');
const flashcardGameEl = document.getElementById('flashcard-game');
const resultsScreenEl = document.getElementById('results-screen');
const flashcardEl = document.querySelector('.flashcard');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const progressTextEl = document.getElementById('progress-text');
const scoreTextEl = document.getElementById('score-text');
const progressFillEl = document.querySelector('.progress-fill');
const categoryLabelEl = document.getElementById('category-label');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const flipBtn = document.getElementById('flip-btn');
const knowBtn = document.getElementById('know-btn');
const dontKnowBtn = document.getElementById('dont-know-btn');

// Initialize deck selection
document.querySelectorAll('.deck-selector').forEach(selector => {
    selector.addEventListener('click', function() {
        const deckId = this.dataset.deck;
        if (deckId) {
            startGame(deckId);
        }
    });
});

// Game functions
function startGame(deckId) {
    currentDeck = decks[deckId];
    currentCardIndex = 0;
    score = 0;
    knownCards = new Array(currentDeck.cards.length).fill(false);
    
    deckSelectionEl.classList.add('hidden');
    flashcardGameEl.classList.remove('hidden');
    resultsScreenEl.classList.add('hidden');
    
    updateCard();
    updateProgress();
}

function updateCard() {
    const card = currentDeck.cards[currentCardIndex];
    questionEl.textContent = card.question;
    answerEl.textContent = card.answer;
    
    flashcardEl.classList.remove('flipped');
    
    categoryLabelEl.textContent = card.category.name;
    categoryLabelEl.className = `category-pill ${card.category.color} text-white`;
    
    flipBtn.classList.remove('hidden');
    knowBtn.classList.add('hidden');
    dontKnowBtn.classList.add('hidden');
    
    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.disabled = currentCardIndex === currentDeck.cards.length - 1 && !reviewMode;
}

function updateProgress() {
    const totalCards = currentDeck.cards.length;
    const progressPercent = ((currentCardIndex + 1) / totalCards) * 100;
    
    progressTextEl.textContent = `Cartão ${currentCardIndex + 1} de ${totalCards}`;
    scoreTextEl.textContent = `Pontuação: ${score}`;
    progressFillEl.style.width = `${progressPercent}%`;
}

// Event Listeners
flashcardEl.addEventListener('click', function() {
    toggleCard();
});

flipBtn.addEventListener('click', function() {
    toggleCard();
});

function toggleCard() {
    flashcardEl.classList.toggle('flipped');
    
    if (flashcardEl.classList.contains('flipped')) {
        flipBtn.classList.add('hidden');
        knowBtn.classList.remove('hidden');
        dontKnowBtn.classList.remove('hidden');
    } else {
        flipBtn.classList.remove('hidden');
        knowBtn.classList.add('hidden');
        dontKnowBtn.classList.add('hidden');
    }
}

prevBtn.addEventListener('click', function() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
        updateProgress();
    }
});

nextBtn.addEventListener('click', function() {
    if (currentCardIndex < currentDeck.cards.length - 1) {
        currentCardIndex++;
        updateCard();
        updateProgress();
    }
});

knowBtn.addEventListener('click', function() {
    if (!knownCards[currentCardIndex]) {
        knownCards[currentCardIndex] = true;
        score++;
        updateProgress();
    }
    goToNextCard();
});

dontKnowBtn.addEventListener('click', function() {
    knownCards[currentCardIndex] = false;
    goToNextCard();
});

function goToNextCard() {
    if (currentCardIndex < currentDeck.cards.length - 1) {
        currentCardIndex++;
        updateCard();
        updateProgress();
    } else {
        showResults();
    }
}

function showResults() {
    flashcardGameEl.classList.add('hidden');
    resultsScreenEl.classList.remove('hidden');
    
    const finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = `${score}/${currentDeck.cards.length}`;
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (flashcardGameEl.classList.contains('hidden')) return;
    
    switch(e.key) {
        case ' ':
            toggleCard();
            break;
        case 'ArrowLeft':
            prevBtn.click();
            break;
        case 'ArrowRight':
            nextBtn.click();
            break;
        case 'y':
        case 'Y':
            if (!flashcardEl.classList.contains('flipped')) {
                toggleCard();
            } else {
                knowBtn.click();
            }
            break;
        case 'n':
        case 'N':
            if (!flashcardEl.classList.contains('flipped')) {
                toggleCard();
            } else {
                dontKnowBtn.click();
            }
            break;
    }
});
