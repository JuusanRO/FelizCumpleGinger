const openGameBtn = document.getElementById('open-game-btn');
const gameArea = document.getElementById('game-area');
const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');

let score = 0;
let gameInterval;

openGameBtn.addEventListener('click', () => {
    // Alternar visibilidad del área de juego
    if (gameArea.style.display === 'none' || gameArea.style.display === '') {
        startGame();
    } else {
        stopGame();
    }
});

function startGame() {
    gameArea.style.display = 'block';
    score = 0;
    scoreDisplay.textContent = 'Puntos: 0';

    clearInterval(gameInterval);
    gameContainer.innerHTML = ''; // Limpiar contenido anterior

    // Iniciar creación de pasteles cada segundo
    gameInterval = setInterval(createPastel, 1000);
}

function stopGame() {
    gameArea.style.display = 'none';
    clearInterval(gameInterval);
    gameContainer.innerHTML = '';
}

function createPastel() {
    const pastel = document.createElement('div');
    pastel.textContent = '🎂';
    pastel.classList.add('pastel');

    // Asegura que el contenedor tenga position relativa
    gameContainer.style.position = 'relative';
    pastel.style.position = 'absolute';

    // Posición aleatoria dentro del contenedor
    const x = Math.random() * (gameContainer.clientWidth - 40);
    const y = Math.random() * (gameContainer.clientHeight - 40);
    pastel.style.left = `${x}px`;
    pastel.style.top = `${y}px`;

    pastel.style.fontSize = '36px';
    pastel.style.lineHeight = '40px';
    pastel.style.cursor = 'pointer';

    pastel.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Puntos: ${score}`;
        pastel.remove();
    });

    gameContainer.appendChild(pastel);

    setTimeout(() => {
        if (gameContainer.contains(pastel)) {
            pastel.remove();
        }
    }, 1200);
}
