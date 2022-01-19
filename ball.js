class Ball
{
 constructor(x,y,r,a,b)
 {
    
    //var options= {
     //   isStatic: false,
     //   restitution:1
   // }
    this.mybodies= Bodies.circle(x,y,r,a) 
    this.radius = r
    this.color = b
    World.add(myworld,this.mybodies)
    
 } 

 display()
 {
     var pos = this.mybodies.position
    ellipseMode(RADIUS)
    fill (this.color)
    ellipse(pos.x,pos.y,this.radius,this.radius) 



 }






}























