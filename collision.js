function checkCollision(){

    barrels.forEach(function(barrel){

        if(

            player.x < barrel.x + barrel.width &&
            player.x + player.width > barrel.x &&
            player.y < barrel.y + barrel.height &&
            player.y + player.height > barrel.y

        ){

            lives--;

            barrel.y = -50;
            barrel.x = Math.random()*(canvas.width-barrel.width);

            if(lives <= 0){

                gameOver = true;

            }

        }

    });

}