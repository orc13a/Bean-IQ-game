class Ball {
    constructor(x_, y_, size_, color_) {
        this.x = x_;
        this.y = y_;
        this.size = size_;
        this.fillColor = color_;
    }

    display() {
        fill(this.fillColor);
        noStroke();
        circle(this.x, this.y, this.size);
    }
}