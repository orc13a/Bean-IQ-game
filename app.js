function setup() {
    createCanvas(700, 700, WEBGL);
}

function draw() {
    clear();
    background(50);

    if (mouseIsPressed) {
        // rotateX(frameCount * 0.01);
        // rotateY(frameCount * 0.01);
        rotateX(mouseY / 500);
        rotateY(mouseX / 500);
    }
    //noStroke();
    fill(255);
    translate(30, 0);
    sphere(10, 10, 10);
}