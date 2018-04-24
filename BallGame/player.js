var player = {
  x:10,
  y:10,
  width:20,
  height:20,
  color:'red',
  move: function(x,y)
  {
    
  
    if (x + this.width/2>w)
    {
      x = w-this.width/2;
    }
    if (x + this.width/2<0)
    {
      x = 0+ this.width/2;
    }
    if (y + this.width/2>h)
    {
      y = h-this.width/2;
    }
    if (y + this.width/2<0)
    {
      y = 0+this.width/2;
    }
    this.x = x;
    this.y = y;
  
  },
  draw: function()
  {
     // GOOD practice: save the context, use 2D trasnformations
    ctx.save();
  
    // translate the coordinate system, draw relative to it
    ctx.translate(this.x, this.y);
  
    ctx.fillStyle = this.color;
    // (0, 0) is the top left corner of the monster.
    ctx.fillRect(0, 0, this.width, this.height);
  
    // GOOD practice: restore the context
    ctx.restore();
  }
}




function getMousePos(evt)
{
  playerPosition = playerPos(canvas, evt);
}

function playerPos(canvas, evt)
{
  var rect = canvas.getBoundingClientRect();
  return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
  };
}