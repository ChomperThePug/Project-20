var backI;
var catI, catI2, catI3;
var mouseI, mouseI2, mouseI3;
var cat, mouse, back;

function preload() {
    backI = loadImage('garden.png');
    catI = loadAnimation('cat1.png');
    catI2 = loadAnimation("cat2.png", "cat3.png");
    catI3 = loadAnimation("cat4.png");
    mouseI = loadAnimation('mouse1.png');
    mouseI2 = loadAnimation("mouse2.png", "mouse3.png");
    mouseI3 = loadAnimation("mouse4.png");
}

function setup() {
    createCanvas(1000, 800);
    back = createSprite(width / 2, height / 2);
    back.addImage(backI);
    back.scale = 1;

    cat = createSprite(900, 650, 20, 20);
    cat.scale = 0.1;

    mouse = createSprite(100, 650, 20, 20);
    mouse.scale = 0.1;
}

function draw() {

    background(255);
    mouse.addAnimation("NormalMouse",mouseI);
    //mouse.changeAnimation("NormalMouse");
    cat.addAnimation("NormalCat",catI);
    //cat.changeAnimation("NormalCat");
    //Write condition here to evalute if tom and jerry collide
    if (abs(cat.x - mouse.x) <= (mouse.width + cat.width) - 220) {
       cat.velocityX = 0;
       mouse.addAnimation("MouseHappy", mouseI3)
       mouse.changeAnimation("MouseHappy");
       cat.addAnimation("CatHappy", catI3)
       cat.changeAnimation("CatHappy");
       console.log("Collide");
    }

    drawSprites();
}


function keyPressed() {

    if (keyCode == LEFT_ARROW) {
        mouse.addAnimation("Tease", mouseI2);
        mouse.changeAnimation("Tease");
        mouse.frameDelay = 10;
        cat.velocityX = -10;
        cat.addAnimation("Attack", catI2);
        cat.changeAnimation("Attack");
    }


}