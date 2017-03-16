//use your mouse to move the crosshairs and click to shoot.
//the objective is to hit the bird flying across the screen.
//the first number at the top of the screen is the number
//of shots you've taken at the bird.  The second number is 
//number of hits.
//
//
//
//
//
//making our variables

var hits = 0;
var shots = 0;
var x = 0;
var y = 100;
var a = 0;
var speed_low = 5;
var speed_high = 10;
var speed_drop = 8;
var speed = random(speed_low,speed_high);
var dead = 0;
var grass = getImage("cute/GrassBlock");
var grassHeight = 340;


//making the bird fly

var draw = function() {
  
  
// making the bird fall
    
    if (y>400 || x>400){
          dead = 0; 
           y = random(20, 380);
           x = 0;
           }
           
    if (dead === 1){
        y = y + speed_drop;
    }
    
    
//setting up the scoreboard    
    
background(111, 150, 227);
image(grass,-2,grassHeight);
image(grass,98,grassHeight);
image(grass,198,grassHeight);
image(grass,298,grassHeight);
fill(42, 94, 63);
//rect(-1,370,407,30);
fill(189, 145, 15);
rect(0,0,104,45);
fill(15, 14, 14);
text("Shots",14, 19);
text("Hits",74,19);
text(shots,20,38); 
text(hits,77,38);


//drawing the crosshairs
fill(13, 12, 12);
ellipse(mouseX,mouseY,200,200);
fill(111, 150, 227);
ellipse(mouseX,mouseY,180,180);
line(mouseX - 90,mouseY + 0,mouseX + 90,mouseY);
line(mouseX,mouseY - 90,mouseX,mouseY + 90);

//drawing the bird

 fill(69, 55, 20);
    ellipse(x,y,36,18);
    ellipse(x + 20,y + -5,15,15);
    fill(194, 126, 81);
    triangle(x + 27,y - 2,x + 38,y + -3,x + 26,y + -7);
    ellipse(x + -3,y + 0,-25,7);
    stroke(74, 64, 26);
    strokeWeight(2);
    line(x + -41,y + 8,x + -16,y + -3);
    stroke(10, 9, 9);
    strokeWeight(1);
    
    //making the bird fly foreward
    
    y = y + random(-5,5);
    x = x + speed;
    if (x > 450){
        x = 0;
        y = random(20, 380);
        speed = random(speed_low,speed_high);
    }

//shooting the bird

if (mouseIsPressed){
        fill(56, 40, 40);
        ellipse(mouseX,mouseY,10,10);
        shots = shots + 1;
        
    if (mouseX < x + 16){
        if (mouseX > x - 16){
            if (mouseY < y + 16){
                if (mouseY > y - 16){
                    dead = 1;
                  
                  hits = hits + 1;
                  
                  }
                    
                }   
                }
            }
        }
    };





