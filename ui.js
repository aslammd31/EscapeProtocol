function drawUI() {

    // ===== HUD =====
    ctx.fillStyle = "rgba(0,0,0,0.45)";
    ctx.fillRect(10, 10, 780, 75);

    ctx.strokeStyle = "#00ff88";
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, 780, 75);

    // ===== Lives =====
    ctx.fillStyle = "white";
    ctx.font = "bold 20px Arial";
    ctx.fillText("Lives: " + lives, 20, 40);

    // ===== Level =====
    ctx.fillStyle = "#00ff88";
    ctx.fillText("Level: " + (Math.floor(score / 50) + 1), 220, 40);

    // ===== Score =====
    ctx.fillStyle = "yellow";
    ctx.fillText("Score: " + Math.floor(score), 430, 40);

    // ===== High Score =====
    ctx.fillStyle = "#00bfff";
    ctx.fillText("High Score: " + Math.floor(highScore), 580, 40);

    // ===== Hearts =====
    let x = 20;

    for (let i = 0; i < lives; i++) {
        ctx.font = "18px Arial";
        ctx.fillText("❤️", x, 70);
        x += 28;
    }

    // ===== Game Over =====
    if (gameOver) {

        ctx.fillStyle = "rgba(0,0,0,0.75)";
        ctx.fillRect(150, 160, 500, 170);

        ctx.strokeStyle = "#ff4444";
        ctx.lineWidth = 3;
        ctx.strokeRect(150, 160, 500, 170);

        ctx.fillStyle = "#ff4444";
        ctx.font = "bold 48px Arial";
        ctx.fillText("GAME OVER", 215, 225);

        ctx.fillStyle = "white";
        ctx.font = "24px Arial";
        ctx.fillText("Press R to Restart", 240, 280);
    }

}