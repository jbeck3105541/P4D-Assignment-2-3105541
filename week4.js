function setup() {
    createCanvas(600, 600);
    background('#EDEDED');
}

let midx = 300;
let midy = 300;

function draw() {
    noStroke();
    textSize(20);
    fill('#000');
    text('Google logo by Josh 3105541', 170, 525);       
    fill('#666');                // change the fill colour to grey at 50% opacity
    noStroke();  
    circle( midx+7 , midy+7, 300 );  // draw the bottom "shadow" circle offset by 5 pixels
    fill('#0F9D58'); 
    noStroke();                   // reset to white at 100% opacity
    circle( midx, midy, 300 );      // draw the top circle
    fill('#DB4437');
    noStroke();  
    arc(midx, midy, 250, 250, 0, 300, PIE);
    fill('#F4B400');
    rect(275, 295, 150, 25);
    stroke('#4285F4');
    strokeWeight(16);
    strokeCap(SQUARE);
    noFill();
    arc(305, 270, 220, 180, PI + QUARTER_PI, TWO_PI);
}

