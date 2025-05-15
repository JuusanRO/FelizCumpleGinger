const openGameBtn = document.getElementById('open-game-btn');
const gameArea = document.getElementById('game-area');
const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');

let score = 0;
let gameInterval;

openGameBtn.addEventListener('click', () => {
    if (gameArea.style.display === 'none' || gameArea.style.display === '') {
        gameArea.style.display = 'block';
        score = 0;
        scoreDisplay.textContent = 'Puntos: 0';

        // Limpiar cualquier juego anterior
        clearInterval(gameInterval);
        while (gameContainer.firstChild) {
            gameContainer.removeChild(gameContainer.firstChild);
        }

        // Crear sushi cada segundo
        gameInterval = setInterval(() => {
            createSushi();
        }, 1000);
    }
});

function createSushi() {
    const sushi = document.createElement('div');
    sushi.textContent = '🍣';  // sushi emoji
    sushi.classList.add('sushi');

    // Posición aleatoria dentro del contenedor
    const x = Math.random() * (gameContainer.clientWidth - 40);
    const y = Math.random() * (gameContainer.clientHeight - 40);
    sushi.style.left = `${x}px`;
    sushi.style.top = `${y}px`;

    sushi.style.fontSize = '36px';  // tamaño del emoji
    sushi.style.lineHeight = '40px'; // para que quede centrado

    sushi.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Puntos: ${score}`;
        sushi.remove();
    });

    gameContainer.appendChild(sushi);

    setTimeout(() => {
        if (gameContainer.contains(sushi)) {
            sushi.remove();
        }
    }, 1200);
}

