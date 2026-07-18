// Canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

// Sounds
const hitSound = new Audio("assets/sounds/hit.mp3");
const gameOverSound = new Audio("assets/sounds/gameover.mp3");

// ===== MENU =====
let gameStarted = false;
let blink = true;

// Blink Animation
setInterval(function () {
    blink = !blink;
}, 500);

// Player
let player = {
    x: 370,
    y: 220,
    width: 60,
    height: 80,
    speed: 8
};

// Barrels
let barrels = [
    { x: Math.random() * 740, y: -100, width: 50, height: 50, speed: 2 },
    { x: Math.random() * 740, y: -300, width: 50, height: 50, speed: 2.5 },
    { x: Math.random() * 740, y: -500, width: 50, height: 50, speed: 3 }
];

// Game Data
let lives = 5;
let score = 0;
let highScore = 0;
let gameOver = false;

// Restart Function
function restartGame() {

    lives = 5;
    score = 0;
    gameOver = false;

    player.x = 370;
    player.y = 220;

    barrels[0] = {
        x: Math.random() * 740,
        y: -100,
        width: 50,
        height: 50,
        speed: 2
    };

    barrels[1] = {
        x: Math.random() * 740,
        y: -300,
        width: 50,
        height: 50,
        speed: 2.5
    };

    barrels[2] = {
        x: Math.random() * 740,
        y: -500,
        width: 50,
        height: 50,
        speed: 3
    };

}

// Keyboard
document.addEventListener("keydown", function (event) {

    // Start Game
    if (!gameStarted && event.key === "Enter") {
        gameStarted = true;
        return;
    }

    // Restart
    if (event.key === "r" || event.key === "R") {

        if (gameOver) {
            restartGame();
        }

    }

    if (!gameStarted)
        return;

    if (gameOver)
        return;

    if (event.key === "ArrowLeft" && player.x > 8)
        player.x -= player.speed;

    if (event.key === "ArrowRight" && player.x + player.width < canvas.width)
        player.x += player.speed;

    if (event.key === "ArrowUp" && player.y > 0)
        player.y -= player.speed;

    if (event.key === "ArrowDown" && player.y + player.height < canvas.height)
        player.y += player.speed;

});

// Start Game Loop
gameLoop();