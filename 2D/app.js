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
    // allBalls['blue'].push(new Ball((width / 2) + 25, ((height / 2) - 69) + (i * 28), 25, "#00bfff"));
    for (let i = 1; i < 20; i++) {
        var ballX;
        var ballY;
        var newBall;
        
        // if (i < 5) {
        //     ballX = (width / 2) + 25;
        //     ballY = ((height / 2) - 62) + (i * 25.5);
        //     newBall = new Ball(ballX, ballY, 25, "#00bfff");
        // }

        if (i > 2 && i < 10) {
            ballX = ((width / 2) + (10 * (i * i)) + (0.2 * i));
            ballY = (height / 2) + (25 * i);
            newBall = new Ball(ballX, ballY, 25, "#00bfff");
        }

        if (newBall != undefined) {
            allBalls['blue'].push(newBall);
        }
    }
}