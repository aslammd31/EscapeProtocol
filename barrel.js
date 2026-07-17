function drawBarrel(){

    barrels.forEach(function(barrel){

        ctx.fillStyle="#ff4444";
        ctx.fillRect(barrel.x,barrel.y,barrel.width,barrel.height);

        ctx.fillStyle="white";
        ctx.font="20px Arial";
        ctx.fillText("☣",barrel.x+10,barrel.y+33);

    });

}

function updateBarrel(){

    barrels.forEach(function(barrel){

        barrel.y += barrel.speed;

        if(barrel.y>canvas.height){

            barrel.y=-50;
            barrel.x=Math.random()*(canvas.width-barrel.width);

        }

    });

}