
let sideChange = {
    start : 5, // the number of sides the shape starts with
    myIncrement : 1, // how many sides to add by using keys
};

function setup() {
  createCanvas(300, 300, WEBGL);
}

function draw() {
  background('#EDEDED');
  fill('#c936ff');
  rotateY(mouseX / 30);
  rotateZ(mouseY / 30);
  cylinder(60, 105, sideChange.start, 0);
}

function keyPressed() {
    if (keyCode === UP_ARROW){
        {if(sideChange.start < 24) // This stops the value going past 24 as it breaks if so
            sideChange.start += sideChange.myIncrement;
        }
    }else if(keyCode === DOWN_ARROW){
    sideChange.start -= sideChange.myIncrement;
    }

    return false; // prevent any default behaviour
}