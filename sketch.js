var lpkidsred;
var lpkidsgreen;
var lpkidsblue;
var lpkidsgray;
var oldTv;

function preload(){
    lpkidsgray = loadImage("images/lpkids-gray.png");
    lpkidsred = loadImage("images/lpkids-red.png");
    lpkidsgreen = loadImage("images/lpkids-green.png");
    lpkidsblue = loadImage("images/lpkids-blue.png");
    oldTv = loadImage("images/old-tv.png");
}

function setup(){
    createCanvas(749,524);
}

function draw(){

    
    if(keyIsPressed){
        if(key=="r"){
            image(lpkidsred,100,100);
        }
        if(key=="g"){
            image(lpkidsgreen,100,100);
        }
        if(key=="b"){
            image(lpkidsblue,100,100);
        }
        if(keyCode=="32"){
            fill(0);
            rect(0,0,749,524);
            blendMode(LIGHTEST);
            image(lpkidsred,100,100);
            image(lpkidsgreen,100,100);
            image(lpkidsblue,100,100);
        }
    }
    else{
        image(lpkidsgray,100,100);
        image(oldTv,0,0);
    }
}