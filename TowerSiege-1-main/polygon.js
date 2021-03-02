class Polygon {
    constructor(x,y){
      this.image = loadImage("polygon.png");
      this.trajectory = []

      var options = {
        friction: 2.5, restitution: 2.1, density: 2
    }
    this.width = 100
    this.height = 100
    this.body = Bodies.rectangle(x,y,100,100,options)
    World.add(world,this.body)
    } 
  
    display() {
imageMode(CENTER)
image (this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      
  }
  }