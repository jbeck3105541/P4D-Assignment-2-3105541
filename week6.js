let mySq = {};
let clearButton; // clears the canvas
let myTarget = 'X'; // target 'X' text
let mySize = 50; // allows square and increment size to be the same

function setup() {
    createCanvas(600, 600);
    background('#EDEDED');
    frameRate(30);
    textSize(30);

    clearButton = createButton('Clear the Canvas');
    clearButton.position(200, 600);
    clearButton.mousePressed(ClearCanvas);
    clearButton.size(200, 40);

    mySq.x = 100;
    mySq.y = 100;
    mySq.size = mySize;
    mySq.moveIncrement = mySize;
}

function draw() {
    fill('#ff3657');
    square(mySq.x, mySq.y, mySq.size);
}

function ClearCanvas() {
    background('#EDEDED');
    square(mySq.x, mySq.y, mySq.size);
    text(myTarget, random(50, 550), random(50, 550)) // picks random numbers within the 600x600 canvas. Made the min/max sizes 50 and 550 so as to not lose the 'X' on the edge of the canvas
}

function keyPressed() {
    // utilised the keypressed function made available by Riley
    if (keyCode === UP_ARROW){
    mySq.y -= mySq.moveIncrement;
    }else if(keyCode === DOWN_ARROW){
    mySq.y += mySq.moveIncrement;
    }else if(keyCode === LEFT_ARROW){
    mySq.x -= mySq.moveIncrement;
    }else if(keyCode === RIGHT_ARROW){
    mySq.x += mySq.moveIncrement;
    }

    return false; // prevent any default behaviour
}