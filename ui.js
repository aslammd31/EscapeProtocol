function drawUI(){

    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText("Lives: " + lives,20,35);

    if(gameOver){

        ctx.fillStyle="red";
        ctx.font="50px Arial";
        ctx.fillText("GAME OVER",220,220);

        ctx.fillStyle="white";
        ctx.font="24px Arial";
        ctx.fillText("Press R to Restart",260,270);

    }

}