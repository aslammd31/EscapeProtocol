// Load Background Image
const background = new Image();
background.src = "assets/images/background.png";

// Update Game
function update() {

    if (gameOver)
        return;

    updateBarrel();

    checkCollision();

}

// Draw Everything
function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Background
    ctx.drawImage(
        background,
        0,
        0,
        canvas.width,
        canvas.height
    );

    // Draw Game Objects
    drawPlayer();

    drawBarrel();

    drawUI();

}

// Main Game Loop
function gameLoop() {

    update();

    draw();

    requestAnimationFrame(gameLoop);

}