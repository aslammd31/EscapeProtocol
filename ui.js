function drawUI() {

    // ===== HUD Background =====
    ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
    ctx.fillRect(10, 10, 780, 75);

    // HUD Border
    ctx.strokeStyle = "#00ff88";
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, 780, 75);

    // ===== Lives =====
    ctx.fillStyle = "white";
    ctx.font = "bold 24px Arial";
    ctx.fillText("❤️ Lives: " + lives, 25, 40);

    // ===== Level =====
    ctx.fillStyle = "#00ff88";
    ctx.fillText("⚡ Level: " + (Math.floor(score / 50) + 1), 260, 40);

    // ===== Score =====
    ctx.fillStyle = "yellow";
    ctx.fillText("🏆 Score: " + Math.floor(score), 520, 40);

    // ===== High Score =====
    ctx.fillStyle = "#00bfff";
    ctx.fillText("⭐ High Score: " + Math.floor(highScore), 470, 72);

    // ===== Game Over =====
    if (gameOver) {

        ctx.fillStyle = "rgba(0,0,0,0.75)";
        ctx.fillRect(150, 160, 500, 160);

        ctx.strokeStyle = "#ff4444";
        ctx.lineWidth = 3;
        ctx.strokeRect(150, 160, 500, 160);

        ctx.fillStyle = "#ff4444";
        ctx.font = "bold 48px Arial";
        ctx.fillText("GAME OVER", 220, 220);

        ctx.fillStyle = "white";
        ctx.font = "24px Arial";
        ctx.fillText("Press R to Restart", 240, 275);

    }

}