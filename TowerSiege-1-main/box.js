class Box{
    constructor(x,y,width,height){
var options = {
    friction: 2.5, restitution: 1.1, density: 2
}
this.visibility = 255
this.width = width
this.height = height
this.body = Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        if(this.body.speed < 8.0){
            push()
            translate (pos.x,pos.y) 
       rotate(angle)
       rectMode(CENTER)
       rect(0,0,this.width,this.height)
        pop()
        }
        else{
            World.remove(world,this.body)
            push()
            this.visibility = this.visibility - 3.14
        }
       
    }

    Score(){
        if(this.visibility < 0 && this.visibility > -100){  
            score = score+1
        }
        }
    }

