class Dustbin{
    constructor(x,y,width,height)
    options={
        isStatic:false,
        'restitution':0,
         'friction':1,
        'density':0.1

    }

    
    body=Bodies.rectangle(x,y,width,height,options)
    width=width;
    height=height;
Worldadd(world,body)

display()
    rectMode(CENTER)
    