let MAX = 600;
let container = document.getElementById('container');

let squareSide = document.getElementById("sq-length");
let rectangleHeight = document.getElementById('rec-height');
let rectangleWidth = document.getElementById('rec-width');
let circleRadius = document.getElementById('cir-radius');
let triangleHeight = document.getElementById('tri-height');

let rectangleButton = document.getElementById('rec-button');
let squareButton = document.getElementById('sq-button');
let circleButton = document.getElementById('cir-button');
let triangleButton = document.getElementById('tri-button');

// Buttons
rectangleButton.addEventListener('click', function newRectangle() {
    new Rectangle(rectangleHeight.value, rectangleWidth.value);
});
squareButton.addEventListener('click', function newSquare() {
    new Square(squareSide.value);
});
circleButton.addEventListener('click', function newCircle() {
    new Circle(circleRadius.value);
});
triangleButton.addEventListener('click', function newTriangle() {
    new Triangle(triangleHeight.value);
});

class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    draw() {
        if(this.width > 600 && this.height > 600) {
            return alert("Too Big!");
        } else if (this.width > 600) {
            return alert("Think again!");
        } else if(this.height > 600) {
            return alert("Oops!");
        };

        let x = Math.floor(Math.random() * (MAX - this.width));
        let y = Math.floor(Math.random() * (MAX - this.height));
        this.div = document.createElement('div');
        this.div.classList.add(this.cssClass);
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.style.width = `${this.width}px`;
        this.div.style.height = `${this.height}px`;
        bkgRight.appendChild(this.div);
    };
    
};

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.cssClass = 'rectangle';
        this.draw();
        
    };
};

class Square extends Shape {
    constructor(side) {
        super(side, side);
        this.cssClass = 'square';
        this.draw();
    };
    
};

class Circle extends Shape {
    constructor(radius) {
        super(radius, radius);
        this.radius = radius;
        this.cssClass = 'circle';
        this.draw();
    };
};

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.cssClass = 'triangle';
        this.draw();
        this.div.style.width = '0';
        this.div.style.height = '0';
        this.div.style.borderBottomWidth = `${height}px`;
        this.div.style.borderRightWidth = `${height}px`;
    };
};
