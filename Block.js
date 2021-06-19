class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
                     
      }
      this.image=loadImage("block.png")
      this.visibility=255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      console.log(this.body.speed);
      if(this.body.speed<2){

      }
else{
  World.remove(world,this.body);
  push();
  this.visibility = this.visibility-5;
  tint(255,this.visibility);
  image(this.image,this.body.posigtion.x,this.body.position.y,50,50);
  pop();
}

    }
}