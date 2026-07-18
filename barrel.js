// Load Barrel Image
const barrelImage = new Image();
barrelImage.src = "assets/images/barrel.png";

// Draw All Barrels
function drawBarrel() {

    barrels.forEach(function (barrel) {

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
function updateBarrel() {

    barrels.forEach(function (barrel, index) {

        barrel.y += barrel.speed;

        if (barrel.y > canvas.height) {

            // Reset above the screen with good spacing
            barrel.y = -(150 + index * 180);

            let validPosition = false;

            while (!validPosition) {

                let newX = Math.random() * (canvas.width - barrel.width);

                validPosition = true;

                barrels.forEach(function (otherBarrel) {

                    if (otherBarrel !== barrel) {

                        if (Math.abs(newX - otherBarrel.x) < 120) {
                            validPosition = false;
                        }

                    }

                });

                if (validPosition) {
                    barrel.x = newX;
                }

            }

        }

    });

}