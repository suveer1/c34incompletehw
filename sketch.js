//Create variables here
var dog, happyDog, database, foodS, foodStock;
var foodS = 25;
function preload()
{
  //load images here
 happydogimg=loadImage("images/dog.png");
  dogimg=loadImage("images/doghappy.png");
}

function setup() {
  database = firebase.database();
  //console.log(database);
	createCanvas(500, 500);
  foodStock = database.ref('food');
  foodStock.on("value",readstock);

}


function draw() {  
  background(46, 139, 87);

  textSize(20);
  fill("white");
  stroke("white");
  text("Press the UP Arrow Key To Feed Your Pet",50,50);
  fill("black");
  textSize(16);
  stroke(0);
  text("food Remaing :"+foodS,150,280);

  if(keyDown(UP_ARROW)){
    writestock(foodS);
    dog = image(happydogimg,200,300,100,100);
  }else{
    dog = image(dogimg,200,300,100,100);
  }
  //image(dog,200,300,100,100);
  drawSprites();
  //add styles here

}
function writestock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1
  }
database.ref('/').update({
  Food:x
})
}
function readstock(data){
  foodS = data.val();
}



