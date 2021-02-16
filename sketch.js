
var ground, groundImg;

var mouse, mouse_running;

var  cat ,  cat_running ;

function  preload ( )  {
    //load the images here

    groundImg = loadImage("images/garden.png");

    mouseImg  =  loadImage ( "images/mouse1.png" ) ;

    mouseImg4 = loadImage("images/mouse4.png");

    mouse_running = loadAnimation("images/mouse2.png", "images/mouse3.png");

    catImg1 = loadImage("images/cat1.png");

    catImg4 = loadImage("images/cat4.png");

    cat_running = loadAnimation("images/cat2.png", "images/cat3.png");

}

function setup(){
    createCanvas(680,400);
    
    ground = createSprite(340, 200);
    ground.addImage("groundImg", groundImg);
    ground.scale = 0.7;

    cat = createSprite(500, 340, 20, 100);
    cat.addAnimation("catImg1", catImg1);
    cat . scale  =  0.1 ;

    mouse = createSprite(200, 340, 10, 40);
    mouse.addAnimation("mouseImg", mouseImg);
    mouse.scale = 0.1;

}

function draw() {

    console.log(cat.x - mouse.x);

    background(rgb(30, 100, 220));

if (cat.x - mouse.x < cat.width / 2 - mouse.width / 2) {
       cat.velocityX = 0;
       cat.addAnimation("catImg4", catImg4);
       cat.changeAnimation("catImg4");
       cat.x = 300;

       mouse.addAnimation("mouseImg4", mouseImg4);
       mouse.changeAnimation("mouseImg4");
       cat.bounce(mouse);
    }

    drawSprites();
}

function keyPressed() {
    
    if (keyCode === LEFT_ARROW) {

        cat.velocityX = -5;
        cat.addAnimation("cat_running", cat_running);
        cat.changeAnimation("cat_running");

        mouse.addAnimation("mouse_running", mouse_running);
        mouse.changeAnimation("mouse_running");
    }
    
}