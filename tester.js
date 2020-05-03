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




let angle = 0;

function setup() {
    createCanvas(900, 900, WEBGL);
}

function draw() {
    let v = createVector(0,-1,0);
    // v.normalize();
    // directionalLight(255, 255, 0, v);
    background(0);

    //camera(0,0,(height / 2) / tan(PI/6),0,0,0,0,1,0);

    

    ambientLight(255);


    noStroke();
    //fill(255,0,150);

    // stroke(0);

    normalMaterial();
    // ambientMaterial(255);
    //specularMaterial(255);
    // translate(mouseX, mouseY);
    rectMode(CENTER);
    rotateX(angle);
    rotateY(angle * 0.4);
    rotateZ(angle * 1.2);
    //rect(0,0,150,150);

    box(100,100,100);
    //sphere(100);
    // plane(200,200);

    angle += 0.08;
}