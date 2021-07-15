var hr , mn , sc ;
var hangle , mangle , sangle;

function setup() {
  createCanvas(400,400);
angleMode(DEGREES);
}

function draw() {
  background(random(0, 255), random(0, 255), random(0, 255));

translate(200,200);
rotate(-90);

hr = hour();
mn = minute();
sc = second();

sangle = map(sc,0,60,0,360);
mangle = map(mn,0,60,0,360);
hangle = map(hr%12,0,12,0,360);

push();
rotate(sangle);
stroke(random(0, 255), random(0, 255), random(0, 255));
strokeWeight(7);
line(0,0,105,0);
pop();

push();
rotate(mangle);
stroke(random(0, 255), random(0, 255), random(0, 255));
strokeWeight(7);
line(0,0,75,0);
pop();

push();
rotate(hangle);
stroke(random(0, 255), random(0, 255), random(0, 255));
strokeWeight(7);
line(0,0,50,0);
pop();

strokeWeight(10);
noFill();

stroke(random(0, 255), random(0, 255), random(0, 255));
arc(0,0,300,300,0,sangle);

stroke(random(0, 255), random(0, 255), random(0, 255));
arc(0,0,280,280,0,mangle);

stroke(random(0, 255), random(0, 255), random(0, 255));
arc(0,0,260,260,0,hangle);

}
