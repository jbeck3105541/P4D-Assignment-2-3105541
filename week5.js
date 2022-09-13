var hw, hh;

function setup() {
    createCanvas(600, 600);
    background('#EDEDED');
    frameRate(30);
    textSize(30);
    textAlign(screenLeft);

    hw = width/2;
    hh = height/2;
    
}

function draw() {

   /* if (frameCount > 100) {
        noFill();
        stroke(255, 204, 100) 
        circle(framecount / 10, frameCount / 10, 20);
        noStroke();
    } */

    rect(hw-100, hh-100, 200, 200);
    text(frameCount, hw-25, hh+10);
   
    if (frameCount < 100) {
        strokeWeight(frameCount); 
    } else 
    strokeWeight(100);
    
    /* if (frameCount > 100) {
        circle(framecount / 10, frameCount / 10, 20);
        noFill();
} */
    // rect(frameCount%width, 5, 10, 10) ;
}
