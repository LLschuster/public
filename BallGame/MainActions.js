// useful to have them as global variables
var canvas, ctx, w, h, over=true, score=0, speddMult=1, message; 
let backSound;
var playerPosition;
var balls=[];


// Main function
function mainLoop() { 
  // 1 - clear the canvas
  ctx.clearRect(0, 0, w, h);
  
  // draw the ball and the player
  player.draw();
  drawAllBalls(balls);
  drawScore();
  score++;

  // animate the ball that is bouncing all over the walls
 moveAllBalls(balls);
 if (playerPosition !== undefined)
 {
  player.move(playerPosition.x, playerPosition.y);
 }
 
  
  // ask for a new animation frame if game is not over
  if (over===true){
    requestAnimationFrame(mainLoop);
  }
 
}

function playBackgroundSound()
{
  
  backSound  = document.querySelector("#audioPlayer");
   backSound.play();
}

function drawScore() {

  ctx.save();
  ctx.fillStyle = 'yellow';
 ctx.font = '20px arial';
 ctx.fillText(score,w-30,30);
  
  // GOOD practice: restore the context
  ctx.restore();
}
//functioncs of settings of the game
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
  speddMult = b.value;
  
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

function shield (evt)  // code for god mode
{
  if (evt.keyCode == 32)
  {
    speddMult = speddMult * -1;
    score -= 1000;
  }
 
}