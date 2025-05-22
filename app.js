// Game state
let currentDeck = null;
let currentCardIndex = 0;
let score = 0;
let knownCards = [];
let reviewMode = false;
let currentSubject = null;
let currentGroup = null;

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

// Initialize subject selection
document.querySelectorAll('.subject-selector').forEach(selector => {
    selector.addEventListener('click', function() {
        const subjectId = this.dataset.subject;
        showGroups(subjectId);
    });
});

document.getElementById('back-to-subjects').addEventListener('click', () => {
    hideElement('group-selection');
    showElement('subject-selection');
});

// Game functions
function startGame(subjectId, groupId) {
    currentSubject = decks[subjectId];
    currentGroup = currentSubject.groups[groupId];
    currentCardIndex = 0;
    score = 0;
    knownCards = new Array(currentGroup.cards.length).fill(false);

    hideElement('group-selection');
    showElement('flashcard-game');
    hideElement('results-screen');

    updateCard();
    updateProgress();
}

function updateCard() {
    const card = currentGroup.cards[currentCardIndex];
    questionEl.textContent = card.question;
    answerEl.textContent = card.answer;

    // Reset to question side
    flashcardEl.classList.remove('flipped');
    flashcardEl.querySelector('.flashcard-front').classList.remove('hidden');
    flashcardEl.querySelector('.flashcard-back').classList.add('hidden');

    categoryLabelEl.textContent = card.category.name;
    categoryLabelEl.className = `category-pill ${card.category.color} text-white`;

    flipBtn.classList.remove('hidden');
    knowBtn.classList.add('hidden');
    dontKnowBtn.classList.add('hidden');

    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.disabled = currentCardIndex === currentGroup.cards.length - 1 && !reviewMode;
}

function updateProgress() {
    const totalCards = currentGroup.cards.length;
    const progressPercent = ((currentCardIndex + 1) / totalCards) * 100;

    progressTextEl.textContent = `Cartão ${currentCardIndex + 1} de ${totalCards}`;
    scoreTextEl.textContent = `Pontuação: ${score}`;
    progressFillEl.style.width = `${progressPercent}%`;
}

// Event Listeners
flashcardEl.addEventListener('click', () => toggleCard());
flipBtn.addEventListener('click', () => toggleCard());
prevBtn.addEventListener('click', () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
        updateProgress();
    }
});
nextBtn.addEventListener('click', () => {
    if (currentCardIndex < currentGroup.cards.length - 1) {
        currentCardIndex++;
        updateCard();
        updateProgress();
    }
});
knowBtn.addEventListener('click', () => {
    if (!knownCards[currentCardIndex]) {
        knownCards[currentCardIndex] = true;
        score++;
        updateProgress();
    }
    goToNextCard();
});
dontKnowBtn.addEventListener('click', () => {
    knownCards[currentCardIndex] = false;
    goToNextCard();
});

document.getElementById('restart-btn').addEventListener('click', () => {
    currentCardIndex = 0;
    score = 0;
    knownCards = new Array(currentGroup.cards.length).fill(false);

    resultsScreenEl.classList.add('hidden');
    flashcardGameEl.classList.remove('hidden');

    updateCard();
    updateProgress();
});

document.getElementById('back-to-decks-btn').addEventListener('click', () => {
    hideElement('results-screen');
    showElement('subject-selection');

    currentSubject = null;
    currentGroup = null;
    currentCardIndex = 0;
    score = 0;
    knownCards = [];
});

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
            if (!flashcardEl.classList.contains('flipped')) toggleCard(); else knowBtn.click();
            break;
        case 'n':
        case 'N':
            if (!flashcardEl.classList.contains('flipped')) toggleCard(); else dontKnowBtn.click();
            break;
    }
});

function toggleCard() {
    // Flip CSS perspective
    flashcardEl.classList.toggle('flipped');

    // Toggle visibility of front/back
    const frontEl = flashcardEl.querySelector('.flashcard-front');
    const backEl = flashcardEl.querySelector('.flashcard-back');
    frontEl.classList.toggle('hidden');
    backEl.classList.toggle('hidden');

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

function goToNextCard() {
    if (currentCardIndex < currentGroup.cards.length - 1) {
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
    finalScoreEl.textContent = `${score}/${currentGroup.cards.length}`;
}

function showGroups(subjectId) {
    currentSubject = decks[subjectId];
    const groupsGrid = document.getElementById('groups-grid');
    const subjectTitle = document.getElementById('subject-title');

    subjectTitle.textContent = `${currentSubject.name} - Selecione o grupo`;
    groupsGrid.innerHTML = '';

    Object.entries(currentSubject.groups).forEach(([groupId, group]) => {
        const groupCard = document.createElement('div');
        groupCard.className = `group-selector bg-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow`;
        groupCard.innerHTML = `
            <h3 class="text-xl font-semibold text-${currentSubject.color}-700 mb-2">${group.name}</h3>
            <p class="text-gray-600">${group.description || 'Sem descrição'}</p>
        `;
        groupCard.addEventListener('click', () => startGame(subjectId, groupId));
        groupsGrid.appendChild(groupCard);
    });

    hideElement('subject-selection');
    showElement('group-selection');
}

function hideElement(id) {
    document.getElementById(id).classList.add('hidden');
}

function showElement(id) {
    document.getElementById(id).classList.remove('hidden');
}
