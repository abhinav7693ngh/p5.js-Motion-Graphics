// let some = 0;

// function setup(){
//     createCanvas(800,800);
//     background('#000');
// }

// function draw(){
//     noStroke();
//     let randomRed = random(100,231);
//     let randomGreen = random(150,200);
//     let randomBlue = random(50,255);
//     let randomAlpha = random(100,200);
//     // some =  parseInt(Math.random()*900);
//     fill(randomRed, randomGreen, randomBlue, randomAlpha);
//     let randomWidth = random(0,width);
//     let randomHeight = random(0,height);

//     ellipse(randomWidth, randomHeight, 10, 10);
// }

// function mousePressed(){
//     background('#000');
// }




// let angle = 0;

// function setup() {
//     createCanvas(900, 900, WEBGL);
// }

// function draw() {
//     let v = createVector(0,-1,0);
//     // v.normalize();
//     // directionalLight(255, 255, 0, v);
//     background(0);

//     //camera(0,0,(height / 2) / tan(PI/6),0,0,0,0,1,0);

    

//     ambientLight(255);


//     noStroke();
//     //fill(255,0,150);

//     // stroke(0);

//     normalMaterial();
//     // ambientMaterial(255);
//     //specularMaterial(255);
//     // translate(mouseX, mouseY);
//     rectMode(CENTER);
//     rotateX(angle);
//     rotateY(angle * 0.4);
//     rotateZ(angle * 1.2);
//     //rect(0,0,150,150);

//     box(100,100,100);
//     //sphere(100);
//     // plane(200,200);

//     angle += 0.08;
// }

let updatedX;
let updatedY;
let r, theta, myLine, rUse = 0, x, y;


function setup(){
    createCanvas(400,400);
    angleMode(DEGREES);
    frameRate(60);
    myLine = createVector(50, 50, 300, 300);
    theta = atan2(myLine.y, myLine.x);
    r = dist(50, 50, 300, 300);
    x = myLine.x;
    y = myLine.y;
}

function draw(){
    fill(255);
    background(172);
    if(rUse > r){
        ellipse(300, 300, 20);
    }
    else{
        x = myLine.x + rUse * cos(theta);
        y = myLine.y + rUse * sin(theta);
        rUse += 1;
        ellipse(x, y, 20);
    }
    
}