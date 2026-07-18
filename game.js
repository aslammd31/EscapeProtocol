// Load Background Image
const background = new Image();
background.src = "assets/images/background.png";

// Update Game
function update() {

    // Don't update anything while on the menu
    if (!gameStarted)
        return;

    if (gameOver)
        return;

    // Score
    score += 0.1;

    // High Score
    if (score > highScore) {
        highScore = score;
    }

    // Update Game Objects
    updateBarrel();

    checkCollision();

}

// Draw Everything
function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.drawImage(
        background,
        0,
        0,
        canvas.width,
        canvas.height
    );

    // ==========================
    // MAIN MENU
    // ==========================
    if (!gameStarted) {

        // Dark Overlay
        ctx.fillStyle = "rgba(0,0,0,0.55)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Title
        ctx.fillStyle = "#00ff88";
        ctx.font = "bold 52px Arial";
        ctx.textAlign = "center";
        ctx.fillText("ESCAPE PROTOCOL", canvas.width / 2, 120);

        // Robot
        drawPlayer();

        // Subtitle
        ctx.fillStyle = "white";
        ctx.font = "28px Arial";
        ctx.fillText("Unit X-01", canvas.width / 2, 340);

        // Blinking Text
        if (blink) {
            ctx.fillStyle = "yellow";
            ctx.font = "bold 30px Arial";
            ctx.fillText("Press ENTER to Start", canvas.width / 2, 400);
        }

        // High Score
        ctx.fillStyle = "#00bfff";
        ctx.font = "24px Arial";
        ctx.fillText(
            "High Score : " + Math.floor(highScore),
            canvas.width / 2,
            450
        );

        ctx.textAlign = "start";

        return;
    }

    // ==========================
    // GAME
    // ==========================

    drawPlayer();
    drawBarrel();
    drawUI();

}

// Main Loop
function gameLoop() {

    update();

    draw();

    requestAnimationFrame(gameLoop);

}