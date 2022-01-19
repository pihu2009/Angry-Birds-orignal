class Slingshot
{

constructor(a,b)
{

 var options=
 {
  bodyA:a,
  pointB:b,
  stiffness:0.04,
  length:10
 }   
 this.body=constraint.create(options)
 this.pointB=b
 this.image=loadImage("sprites/sling1.png")
 this.image2=loadImage("sprites/sling2.png")
 World.add(myworld,this.body)
 
}


display()
{
 if(this.body.bodyA)
 {
    var posa=this.body.bodyA.position
    var posb=this.pointB
    
    strokeWeight(3)
    stroke("black")
    line(posa.x-20,posa.y,posb.x-10,posb.y)  
    line(posa.x+20,posa.y,posb.x+15,posb.y)  
 }

 
 image(this.image,300,600)
 image(this.image2,272,557)  





}

birdfly()
{
 this.body.bodyA=null

}

birdattached(body)
{
  this.body.bodyA=body










}









}
