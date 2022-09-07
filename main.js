canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');


green_car_image_width = 100;
green_car_image_height = 90;


background_image = "parkingLot.jpg";
green_car_image = "car2.png";

green_car_image_x = 10;
green_car_image_y = 10;
green_car_image = "";
background_image = "";

function add() {
    background_image = new Image();
    background_image.onload = uploadBackground;
    background_image.src = background_imgTag;

    green_car_image = new Image();
    green_car_image.onload = uploadgreen_car_image;
    green_car_image.src = green_car_image_imgTag;
}

function uploadBackground() {
    ctx.drawImage(background_image, 0, 0, canvas.width, canvas.height);

}

function uploadgreen_car_image() {
    ctx.drawImage(green_car_image, green_car_image_x, green_car_image_y, green_car_image_width, green_car_image_height);


}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }


}

function up() {
    if (green_car_image_y >= 0) {
        green_car_image_y = rover_y - 10;
        console.log("When up arrow is pressed , x= " + green_car_image_x + " | y= " + green_car_image_y);

        uploadBackground();
        uploadgreen_car_image();
    }
}

function left() {
    if (green_car_image_y >= 0) {
        green_car_image_y = rover_y - 10;
        console.log("When left arrow is pressed , x= " + green_car_image_x + " | y= " + green_car_image_y);

        uploadBackground();
        uploadgreen_car_image();
    }
}

function down() {
    if (green_car_image_y >= 500) {
        green_car_image_y = rover_y + 10;
        console.log("When down arrow is pressed , x= " + green_car_image_x + " | y= " + green_car_image_y);

        uploadBackground();
        uploadgreen_car_image();
    }
}

function right() {
    if (green_car_image_y >= 700) {
        green_car_image_y = rover_y + 10;
        console.log("When right arrow is pressed , x= " + green_car_image_x + " | y= " + green_car_image_y);

        uploadBackground();
        uploadgreen_car_image();
    }
}