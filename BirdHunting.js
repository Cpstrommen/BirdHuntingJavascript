//Use your mouse to move the crosshairs and click to shoot.
//The objective is to hit the bird flying across the screen.
//The "R" key reloads the gun and you can press "E" to switch //weapons

//Thank you William S.rr and Timothy Smith for your help in 
//developing this program!

//making our variables

var diff = 0;
var hits = 0;
var shots = 0;
var x = 0;
var y = 100;
var a = 0;

//speed (change to change speed of birds)
var speed_low = 8;
var speed_high = 13;
var speed_drop = 8;
var speed = random(speed_low,speed_high);

var dead = 0;
var green_head_color = 0;
var red_head_color = 0;
var blue_head_color = 0;
var tree_center = 269;

//gun settings
var rifle = false;
var shotgun = true;
var loaded = 6;
var extra = 204;


//spread size (16 is the normal)
var spreadSize = 16;


noCursor();


//making the bird fly and fall

var draw = function() {
    
    //setting up the mouse variables
    var mY = mouseY;
    var mX = mouseX;
    
    if (y>400 || x>400){
          dead = 0; 
           y = random(20, 380);
           x = 0;
           green_head_color = random(0, 255);
           red_head_color = random(0, 255);
           blue_head_color = random(0, 255);
           }
           
    if (dead === 1){
        y = y + speed_drop;
        
    }
    
    
//setting up the scoreboard    
    
background(111, 150, 227);
fill(71, 33, 13);

//drawing the tree
noStroke();
rect(tree_center - 34,247,68,124);
fill(55, 112, 57);
ellipse(tree_center,129,250,250);
fill(0, 0, 0);
ellipse(tree_center - 10,296,30,35);

//drawing the grass
fill(33, 112, 74);
noStroke();
rect(-1,370,401,30);

//drawing the scoreboard
strokeWeight(3);
stroke(84, 78, 17);
fill(189, 162, 87);
rect(0,0,117,55);
fill(255, 255, 255);
noStroke();
rect(15,22,30,20);
rect(75,22,20,20);
stroke(0, 0, 0);
strokeWeight(1);
fill(0,0,0);
text("Shots",14, 19);
text("Hits",73,19);
text(shots,20,38); 
text(hits,80,38);

//drarr wing the crosshairs

//rifle
if (rifle === true){
    shotgun = false;
    spreadSize = 16;
    noFill();
    stroke(0, 0, 0);
    strokeWeight(8);
    ellipse(mouseX,mouseY,190,190);
    strokeWeight(1);
    line(mouseX - 90,mouseY + 0,mouseX + 90,mouseY);
    line(mouseX,mouseY - 90,mouseX,mouseY + 90);
    if (mouseIsPressed){
        fill(56, 40, 40);
        ellipse(mouseX,mouseY,10,10);
        shots = shots + 1;
        

//showing that the pressed mouse is within the area of the bird
    if (mouseX < x + spreadSize){
        if (mouseX > x - spreadSize){
            if (mouseY < y + spreadSize){
                if (mouseY > y - spreadSize){
                    
                    dead = 1;
                    
                    hits = hits + 1;
                    
                  }
                    
                }   
                }
            }
        }
    }



//shotgun

if (shotgun === true){
    rifle = false;
    spreadSize = 50;
    noStroke();
    fill(36, 28, 28);
    rect(mouseX-20,mouseY,45,10);
    rect(mouseX+15,mouseY-10,10,15);
    rect(mouseX-20,mouseY-10,10,15);
    fill(20, 20, 20);
    rect(mouseX-50,mouseY+10,110,70);
    fill(255, 0, 0);
    ellipse(mouseX+20,mouseY-5,7,7);
    ellipse(mouseX-15,mouseY-5,7,7);
    rect(mouseX-9,mouseY+2,25,3,20);
    strokeWeight(5);
    textSize(20);
    text(loaded, mouseX-22, mouseY+50);
    text(extra, mouseX+8, mouseY+50);
    rect(mouseX-32,mouseY+56,78,3,70);
    rect(mouseX,mouseY+28,3,30,70);
    textSize(12);
    if (keyIsPressed === true && loaded < 6 && extra > 0){
        loaded = 6;
        extra = extra - 6;
    }
    
    
    
    if (loaded>0){
    if (mouseIsPressed){
        fill(56, 40, 40);
        ellipse(mouseX,mouseY,10,10);
        shots = shots + 1;
        loaded = loaded - 1;
        

//showing that the pressed mouse is within the area of the bird
    
    if (mouseX < x + spreadSize){
        if (mouseX > x - spreadSize){
            if (mouseY < y + spreadSize){
                if (mouseY > y - spreadSize){
                    
                    dead = 1;
                    hits = hits + 1;
                    
                  }
                    
                }   
                }
            }
        }
    }
}



//drawing the bird

    fill(red_head_color, green_head_color, blue_head_color);
    
    //body
    ellipse(x,y,36,14);
    
    //head
    ellipse(x + 20,y + -5,15,15);
    
    //beak
    fill(194, 126, 81);
    triangle(x + 27,y - 2,x + 38,y + -3,x + 26,y + -7);
    
    //wings
    ellipse(x + -3,y + 0,-25,7);
    
    //tail
    stroke(74, 64, 26);
    strokeWeight(2);
    line(x + -35,y + 5,x + -16,y + -3);
    
    //reseting the line settings
    stroke(0,0,0);
    strokeWeight(1);
    
    //making the bird fly forward
    
    y = y + random(-5,5);
    x = x + speed;
    if (x > 450){
        x = 0;
        y = random(20, 380);
        speed = random(speed_low,speed_high);
    }
};