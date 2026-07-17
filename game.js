function update(){

    if(gameOver)
        return;

    score += 0.05;

    updateBarrel();

    checkCollision();

}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawPlayer();

    drawBarrel();

    drawUI();

}

function gameLoop(){

    update();

    draw();

    requestAnimationFrame(gameLoop);

}