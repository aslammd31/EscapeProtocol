// Load Robot Image
const robotImage = new Image();
robotImage.src = "assets/images/robot.png";

function drawPlayer(){

    ctx.drawImage(
        robotImage,
        player.x,
        player.y,
        player.width,
        player.height
    );

}