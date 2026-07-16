function drawPlayer() {

    ctx.fillStyle = "#00ff88";

    // Head
    ctx.fillRect(player.x + 10, player.y, 40, 25);

    // Eyes
    ctx.fillStyle = "black";
    ctx.fillRect(player.x + 18, player.y + 8, 5, 5);
    ctx.fillRect(player.x + 37, player.y + 8, 5, 5);

    // Body
    ctx.fillStyle = "#00ff88";
    ctx.fillRect(player.x, player.y + 25, 60, 40);

    // Arms
    ctx.fillRect(player.x - 8, player.y + 30, 8, 30);
    ctx.fillRect(player.x + 60, player.y + 30, 8, 30);

    // Legs
    ctx.fillRect(player.x + 12, player.y + 65, 10, 20);
    ctx.fillRect(player.x + 38, player.y + 65, 10, 20);

}