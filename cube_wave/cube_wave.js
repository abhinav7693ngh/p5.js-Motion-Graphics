let isRecording = true;
let firstFrame = 1;
let lastFrame = 125;
let canvasToRecord;


let angle = 0;
let canvas;


function setup() {
    canvasToRecord = createCanvas(800, 800, WEBGL).canvas;
}


function draw() {
    background(255);
    translate(0, 50, 0);
    ortho(-400, 400, -400, 400, 0, 1000);
    rotateX(- Math.PI / 5);
    rotateY(- Math.PI / 4);

    fill('#F9E79F ');

    for (let z = -160; z <= 160; z += 20) {
        for (let x = -160; x <= 160; x += 20) {
            push();
            translate(x, 0, z);
            let d = dist(x, z, 0, 0);
            let offset = map(d, -160, 160, -6, 6);
            let a = angle + offset;
            let h = map(sin(a), -1, 1, 0, 200);
            box(20, h, 20);
            pop();
        }
    }

    angle -= 0.04;

    recordGIF();
}