function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground1 = new Ground();
  ground2 = new Ground();

  //level one
  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(360,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);
  //level two
  block6 = new Block(360,195,30,40);
  block7 = new Block(390,195,30,40);
  block8 = new Block(420,195,30,40);
  //top
  block9 = new Block(390,155,30,40);

  //the polygon
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background(255,255,255);  



  drawSprites();
}