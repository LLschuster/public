class Balls {
  constructor(x,y,radius, speedX, speedY,color)
  {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
    Balls._speddMult=1;
  }
  set speddMult(nspeed)
  {
    this._speddMult=nspeed;
  }
  get speddMult()
  {
    return this._speddMult
  }
  draw()
  {
     // GOOD practice: save the context, use 2D trasnformations
     ctx.save();
  
     // translate the coordinate system, draw relative to it
     ctx.translate(this.x, this.y);
   
     ctx.fillStyle = this.color;
     // (0, 0) is the top left corner of the monster.
     ctx.beginPath();
     ctx.arc(0, 0, this.radius, 0, 2*Math.PI);
     ctx.fill();
  
     // GOOD practice: restore the context
     ctx.restore();
  }
  move()
  {
    this.x += this.speedX * speddMult;
  this.y += this.speedY * speddMult;
  
  testCollisionBallWithWalls(this);
  testCollisionBallWithPlayer(this);
  }
}




function createBalls(cant)
{
  var ballAray = [];
  var i;
  for (i=1;i<=cant;i++)
  {
    
      var x =  w/2;
      var y=  h/2;
      let speedx = Math.random() * 1 + 5;
      var speedy = Math.random()* 1 - 5;
      var radius= 5 + 20 * Math.random();
      var color= 'blue';
      var b = new Balls(x,y,radius,speedx,speedy,color);
    ballAray.push(b);
  }
  return ballAray;
}




function drawAllBalls(balls)
{
  balls.forEach(function(b)
{
  b.draw();
})
}

function moveAllBalls(b)
{
  b.forEach(function(b) {
b.move();
  });
}