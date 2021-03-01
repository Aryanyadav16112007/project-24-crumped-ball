class Ground{
    constructor(x,y,width,height)
    options={
        isStatic:false,
        restitution:0,
        friction:0,
        density:1

       
    }
   this. body=Bodies.rectangle(x,y,width,height,options)
   this. width=width
  this.  height=height
World.add(world,this.body)

display()
    rectMode(CENTER)
    fill(255)
    rect(this.body.postion.x,this.body.postion.y,this.width,this.height)


