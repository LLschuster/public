// useful to have them as global variables
var canvas, ctx, w, h, over=true, score=0, speddMult=1, message; 
var playerPosition;
var balls = [];

var player = {
  x:10,
  y:10,
  width:20,
  height:20,
  color:'red'
}

window.onload = function init() {
    // called AFTER the page has been loaded
    canvas = document.querySelector("#Canvas");
   message = document.querySelector("#pa");
    // often useful
    w = canvas.width; 
    h = canvas.height;  
  
    // important, we will draw with this object
    ctx = canvas.getContext('2d');
     
    //create balls
   balls =  createBalls(5);
    //move player
    canvas.addEventListener('mousemove',getMousePos);
    canvas.addEventListener('keypress',shield);
    window.addEventListener('keypress',shield);
  
    // ready to go !
    mainLoop();
};
// Main function
function mainLoop() { 
  // 1 - clear the canvas
  ctx.clearRect(0, 0, w, h);
  
  // draw the ball and the player
  drawFilledRectangle(player);
  drawFilledAllCircle(balls);
  drawScore();
  score++;

  // animate the ball that is bouncing all over the walls
 moveAllBalls(balls);
  movePlayerMouse();
  
  // ask for a new animation frame if game is not over
  if (over===true){
    requestAnimationFrame(mainLoop);
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

function movePlayerMouse()
{
  if (playerPosition !== undefined)
  { //Check if player doesn't trespass walls
    if (playerPosition.x + player.width/2>w)
    {
      playerPosition.x = w-player.width/2;
    }
    if (playerPosition.x + player.width/2<0)
    {
      playerPosition.x = 0+player.width/2;
    }
    if (playerPosition.y + player.width/2>h)
    {
      playerPosition.y = h-player.width/2;
    }
    if (playerPosition.y + player.width/2<0)
    {
      playerPosition.y = 0+player.width/2;
    }
    player.x = playerPosition.x;
    player.y = playerPosition.y;
  }
}

function moveBall(b) {
  b.x += b.speedX * speddMult;
  b.y += b.speedY * speddMult;
  
  testCollisionBallWithWalls(b);
  testCollisionBallWithPlayer(b);
}

function testCollisionBallWithWalls(b) {
    // COLLISION WITH VERTICAL WALLS ?
    if((b.x + b.radius) > w) {
    // the ball hit the right wall
    // change horizontal direction
    b.speedX = -b.speedX;
    
    // put the ball at the collision point
    b.x = w - b.radius;
  } else if((b.x -b.radius) < 0) {
    // the ball hit the left wall
    // change horizontal direction
    b.speedX = -b.speedX;
    
    // put the ball at the collision point
    b.x = b.radius;
  }
  
  // COLLISIONS WTH HORIZONTAL WALLS ?
  // Not in the else as the ball can touch both
  // vertical and horizontal walls in corners
  if((b.y + b.radius) > h) {
    // the ball hit the right wall
    // change horizontal direction
    b.speedY = -b.speedY;
    
    // put the ball at the collision point
    b.y = h - b.radius;
  } else if((b.y -b.radius) < 0) {
    // the ball hit the left wall
    // change horizontal direction
    b.speedY = -b.speedY;
    
    // put the ball at the collision point
    b.Y = b.radius;
  }  
}

function drawFilledRectangle(r) {
    // GOOD practice: save the context, use 2D trasnformations
    ctx.save();
  
    // translate the coordinate system, draw relative to it
    ctx.translate(r.x, r.y);
  
    ctx.fillStyle = r.color;
    // (0, 0) is the top left corner of the monster.
    ctx.fillRect(0, 0, r.width, r.height);
  
    // GOOD practice: restore the context
    ctx.restore();
}

function drawFilledCircle(c) {
    // GOOD practice: save the context, use 2D trasnformations
    ctx.save();
  
    // translate the coordinate system, draw relative to it
    ctx.translate(c.x, c.y);
  
    ctx.fillStyle = c.color;
    // (0, 0) is the top left corner of the monster.
    ctx.beginPath();
    ctx.arc(0, 0, c.radius, 0, 2*Math.PI);
    ctx.fill();
 
    // GOOD practice: restore the context
    ctx.restore();
}

function createBalls(cant)
{
  var ballAray = [];
  var i;
  for (i=1;i<=cant;i++)
  {
    var b = {
      x: w/2,
      y: h/2,
      speedX: Math.random() * 1 + 5,
      speedY: Math.random()* 1 - 5,
      radius: 5 + 20 * Math.random(),
      color: 'blue'
    }
    ballAray.push(b);
  }
  return ballAray;
}

function drawFilledAllCircle(b)
{
  b.forEach(function(b) {
    drawFilledCircle(b);
  });
}

function moveAllBalls(b)
{
  b.forEach(function(b) {
 moveBall(b);
  });
}

function testCollisionBallWithPlayer(b) // Needs optimization
{//absolute value of distance between player and ball <= width of player + balls radius
  if (Math.abs((player.y - b.y))<=(player.width/2 + b.radius)) 
  {
    if (Math.abs((player.x - b.x))<=(player.width/2 + b.radius))
    {
      player.x =  b.radius ;
      player.y =  b.radius ;
      over = false;
      message.innerHTML = "Game is over your score is: " + "<em>"+score+"</em>";
    }
  }
  
}



function drawScore() {

  ctx.save();

  
  ctx.fillStyle = 'yeloow';
 ctx.font = '20px arial';
 ctx.fillText(score,w-30,30);
  

  // GOOD practice: restore the context
  ctx.restore();
}

function changeBallNumber(b)
{
  balls = createBalls(b.value);
}

function changePlayerColor(p)
{
  player.color = p.value;
}
function changeBallSpeed(b)
{
  balls.forEach(function () {
     speddMult = b.value;
  });
  
}


function restart()
{
  score = 0;
  message.innerHTML = "Survive";
  setTimeout(() => {
    over = true; //restarts the game
    requestAnimationFrame(mainLoop);
  },3000);
  
 
  

}

function shield (evt)
{
  if (evt.keyCode == 32)
  {
    speddMult = speddMult * -1;
    score -= 1000;
  }
 
}