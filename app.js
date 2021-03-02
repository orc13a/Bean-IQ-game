let allBalls = {
    red: [],
    blue: [],
    green: [],
    yellow: []
}

function setup() {
    createCanvas(700, 700, WEBGL);
    createBalls();
    allBalls['blue'].forEach(ball => {
        console.log(ball);
    });
}

function draw() {
    clear();
    background(50);

    if (mouseIsPressed) {
        // rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
    }

    allBalls['blue'].forEach(ball => {
        ball.display();
    });
}

function createBalls() {
    for (let i = 1; i <= 18; i++) {
        if (i < 5) {
            allBalls['blue'].push(new Ball(0, (i * 10), 10, 255));
        }
    }
}