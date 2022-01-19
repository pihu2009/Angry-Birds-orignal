class Pig extends Baseclass
{

constructor(x,y)
{

 super(x,y,70,70)    
 this.image=loadImage("sprites/enemy.png")
 this.visibilty=255
}
display()
{
 
 if(this.body.speed>3)
 {
  World.remove(myworld,this.body)
 
  push()
  this.visibilty=this.visibilty-5
  tint(255,this.visibilty)
  image(this.image,this.body.position.x,this.body.position.y,70,70)


  pop()


 } 
 else{
    super.display()

}

}
Pigscore()
{
if(this.visibilty<0&&this.visibilty>-504.5)
{
score++
}

}

}






























































































