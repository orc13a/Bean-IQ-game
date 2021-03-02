let allBalls = {
    red: [],
    blue: [],
    green: [],
    yellow: []
}

function setup() {
    createCanvas(900, 750);
    
    rectMode(CENTER);

    c();
}

function draw() {
    clear();
    background(255);

    noStroke();
    fill(25);
    rect(width / 2, height /2, 450, 350, 50);

    fill(255);
    stroke(75);
    strokeWeight(25);

    rect((width / 2) + 75 + 12.5, (height / 2), 125, 225, 100);
    rect((width / 2) - 75 - 12.5, (height / 2), 125, 225, 100);

    //rect((width / 2), (height / 2), 25, 25);
    
    allBalls['blue'].forEach(ball => {
        ball.display();
    });

    stroke("#ff007f");
    strokeWeight(2);
    line(width / 2, 0, width/2, height);
}

function c() {
    for (let i = 1; i < 5; i++) {
        allBalls['blue'].push(new Ball((width / 2) + 25, ((height / 2) - 69) + (i * 28), 25, "#00bfff"));
    }
    for (let i = 1; i < 5; i++) {
        allBalls['blue'].push(new Ball((width / 2) + 25 + 125, ((height / 2) - 69) + (i * 28), 25, "#00bfff"));
    }
}