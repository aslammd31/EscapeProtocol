function update(){

    if(gameOver)
        return;

    score += 0.05;

    if(score > highScore){
        highScore = score;
    }

    let level = Math.floor(score / 50);

    barrels[0].speed = 3 + level;
    barrels[1].speed = 4 + level;
    barrels[2].speed = 5 + level;

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