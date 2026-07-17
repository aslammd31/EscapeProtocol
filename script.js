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

// Barrels
let barrels = [
    {
        x: Math.random() * 740,
        y: -50,
        width: 50,
        height: 50,
        speed: 3
    },
    {
        x: Math.random() * 740,
        y: -250,
        width: 50,
        height: 50,
        speed: 4
    },
    {
        x: Math.random() * 740,
        y: -450,
        width: 50,
        height: 50,
        speed: 5
    }
];

// Game Data
let lives = 5;
let score = 0;
let gameOver = false;

// Restart Function
function restartGame(){

    lives = 5;
    score = 0;
    gameOver = false;

    player.x = 370;
    player.y = 220;

    barrels[0].x = Math.random()*740;
    barrels[0].y = -50;
    barrels[0].speed = 3;

    barrels[1].x = Math.random()*740;
    barrels[1].y = -250;
    barrels[1].speed = 4;

    barrels[2].x = Math.random()*740;
    barrels[2].y = -450;
    barrels[2].speed = 5;

}

// Keyboard
document.addEventListener("keydown",function(event){

    if(event.key==="r" || event.key==="R"){
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