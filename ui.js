function drawUI(){

    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText("Lives: " + lives,20,35);

    ctx.fillStyle = "yellow";
    ctx.fillText("Score: " + Math.floor(score),620,35);

    ctx.fillStyle = "#00ff88";
    ctx.fillText("Level: " + (Math.floor(score/50)+1),320,35);

    ctx.fillStyle = "#00bfff";
    ctx.fillText("High Score: " + Math.floor(highScore),520,70);

    if(gameOver){

        ctx.fillStyle = "red";
        ctx.font = "50px Arial";
        ctx.fillText("GAME OVER",220,220);

        ctx.fillStyle = "white";
        ctx.font = "24px Arial";
        ctx.fillText("Press R to Restart",250,270);

    }

}