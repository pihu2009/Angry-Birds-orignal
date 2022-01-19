class Baseclass
{

    constructor(x,y,w,h,a,d,)
    {
     var options=
     {
      restitution:0.5,
      friction:1.5,
      density:0.8
     }
    
    
     this.body = Bodies.rectangle(x,y,w,h,options)
     this.width=w
     this.height=h
     this.image=loadImage("sprites/base.png")
     World.add(myworld,this.body)
    
    }
    
    display()
{

  var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      
      fill("pink");
      image(this.image,0, 0, this.width, this.height);
      pop();


}
}


































































































