// let gifLength = 600;
// let canvas;

let angle = 0;
let w = 24;


function setup(){
    createCanvas(800, 800, WEBGL);
    // canvas = p5Canvas.canvas;
    // capturer.start();
}

function draw(){
    background(255);
    rotateX(- Math.PI / 4);
    rotateY( - Math.PI / 4);
    
    fill('#AED6F1');

    for(let z = -180 ; z <= 180; z += 30){
        for(let x = -180; x <= 180 ; x += 30){
            push();
            translate(x, 0, z);
            let d = dist(x, z, 0, 0);
            let offset = map(d, -150, 150, -2, 2);
            let a = angle + offset;
            let h = map(sin(a), -1, 1, 0, 200);
            box(20,h,20);
            pop();
        }
    }

    angle -= 0.04;

    // if(frameCount < gifLength){
    //     capturer.capture(canvas);
    // }
    // else if(frameCount === gifLength){
    //     capturer.stop();
    //     capturer.save();
    // }

}