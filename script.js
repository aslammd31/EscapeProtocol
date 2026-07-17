// Canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

// Player
let player = {
    x: 370,
    y: 220,
    width: 60,
    height: 80,
    speed: 5
};

// Barrel
let barrel = {
    x: Math.random() * 740,
    y: -50,
    width: 50,
    height: 50,
    speed: 3
};

// Game Data
let lives = 5;
let gameOver = false;

// Restart Function
function restartGame() {

    lives = 5;
    gameOver = false;

    player.x = 370;
    player.y = 220;

    barrel.x = Math.random() * (canvas.width - barrel.width);
    barrel.y = -50;
}

// Keyboard
document.addEventListener("keydown", function(event){

    // Restart
    if(event.key === "r" || event.key === "R"){
        if(gameOver){
            restartGame();
        }
    }

    if(gameOver) return;

    if(event.key==="ArrowLeft" && player.x>8)
        player.x-=player.speed;

    if(event.key==="ArrowRight" && player.x+68<canvas.width)
        player.x+=player.speed;

    if(event.key==="ArrowUp" && player.y>0)
        player.y-=player.speed;

    if(event.key==="ArrowDown" && player.y+85<canvas.height)
        player.y+=player.speed;

});

// Start Game
gameLoop();