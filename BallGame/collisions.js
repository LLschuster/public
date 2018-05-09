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
      checkScore(score);
      sound.play();
    }
  }
  
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


function checkScore(score)
{
  if (scoreList!=[])
  {
   
        var min = minValue(scoreList);

  if ((min.value < score) && (nlabel==9))
  {
    
    localStorage.removeItem("score"+min.index.toString());
    localStorage.setItem("score"+min.index.toString(),score.toString());
    scoreList[min.index] = score;
    sortedScore[9] = score;
   } 
  } else if (nlabel != 9  )
  {
    nlabel++;
    localStorage.setItem("score"+nlabel.toString(),score.toString());
    scoreList.push(score);
  }

}

function minValue (array)
{
   
   
   for (let x=0;x<array.length;x++)
   {
     if (array[x]==sortedScore[array.length-1])
     {
      return {value:sortedScore[array.length-1],
      index:x}
     }
   }
   
}