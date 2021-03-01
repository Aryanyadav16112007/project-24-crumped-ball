class Paper{
    constructor(x,y,radius)
     options={
        'isStatic':false,
        'restitution':0.3,
        friction:0.5,
        density:1.2
    }
}


    this.body=Bodies.circle(x,y,radius,options)
   this.radius=radius
World.add(world,this.body)


display()
ellipseMode(RADIUS)
fill("yellow")
fill(255)
circle(this.body.postion.x,this.body.postion.y,this.radius)
