var lpkidsred;
var lpkidsgreen;
var lpkidsblue;
var lpkidsgray;

function preload(){
    lpkidsgray = loadImage("images/lpkids-gray.png");
    lpkidsred = loadImage("images/lpkids-red.png");
    lpkidsgreen = loadImage("images/lpkids-green.png");
    lpkidsblue = loadImage("images/lpkids-blue.png");
}

function setup(){
    createCanvas(500,374);
}

function draw(){
    if(keyIsPressed){
        if(key=="r"){
            image(lpkidsred,0,0);
        }
        if(key=="g"){
            image(lpkidsgreen,0,0);
        }
        if(key=="b"){
            image(lpkidsblue,0,0);
        }
        if(keyCode=="32"){
            fill(0);
            rect(0,0,500,374);
            blendMode(LIGHTEST);
            image(lpkidsred,0,0);
            image(lpkidsgreen,0,0);
            image(lpkidsblue,0,0);
            
        }
    }
    else{
        image(lpkidsgray,0,0);
    }
}