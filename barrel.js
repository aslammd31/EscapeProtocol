// Load Barrel Image
const barrelImage = new Image();
barrelImage.src = "assets/images/barrel.png";

// Draw All Barrels
function drawBarrel(){

    barrels.forEach(function(barrel){

        ctx.drawImage(
            barrelImage,
            barrel.x,
            barrel.y,
            barrel.width,
            barrel.height
        );

    });

}

// Update Barrels
function updateBarrel(){

    barrels.forEach(function(barrel){

        barrel.y += barrel.speed;

        if(barrel.y > canvas.height){

            barrel.y = -50;
            barrel.x = Math.random() * (canvas.width - barrel.width);

        }

    });

}