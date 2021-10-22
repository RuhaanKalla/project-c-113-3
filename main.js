function preload(){

}

function setup(){
canvas = createCanvas(650,400);
canvas.center();

video = createCapture(VIDEO);
video.size(300 , 300);
video.hide();

}

function draw(){
image(video,200,100,300,200)

stroke("yellow");
fill("blue");
rect(90,40,500,30);
fill("red");
circle(50,50,85);
fill("blue");
rect(585,80,30,250);
fill("red");
circle(600,50,85);
fill("blue");
rect(90,340,475,30)
fill("red");
circle(600,350,85);
fill("blue");
rect(36,80,30,250);
fill("red");
circle(50,350,85);
fill("red");
circle(50,50,85);

}

function take_snapshot(){
    save("myPhoto.png");
}

