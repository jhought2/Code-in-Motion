let shapes = [];
let shapeTypes = ['ellipse', 'rectangle'];

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('canvas-container');
    for (let i = 0; i < 10; i++) {
        shapes.push(new Shape(random(width), random(height), random(shapeTypes)));
    }
}

function draw() {
    background(200);
    for (let shape of shapes) {
        shape.move();
        shape.display();
    }
}

function mousePressed() {
    for (let shape of shapes) {
        if (shape.isClicked(mouseX, mouseY)) {
            shape.changeColor();
        }
    }
}

class Shape {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.xSpeed = random(-3, 3);
        this.ySpeed = random(-3, 3);
        this.size = 50;
        this.color = color(random(255), random(255), random(255));
        this.type = type;
    }

    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > width - this.size / 2 || this.x < this.size / 2) {
            this.xSpeed *= -1;
        }

        if (this.y > height - this.size / 2 || this.y < this.size / 2) {
            this.ySpeed *= -1;
        }
    }

    display() {
        fill(this.color);
        if (this.type === 'ellipse') {
            ellipse(this.x, this.y, this.size, this.size);
        } else if (this.type === 'rectangle') {
            rect(this.x, this.y, this.size, this.size);
        }
    }

    isClicked(px, py) {
        let d = dist(px, py, this.x, this.y);
        return d < this.size / 2;
    }

    changeColor() {
        this.color = color(random(255), random(255), random(255));
    }
}
