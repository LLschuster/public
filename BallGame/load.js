window.onload = function init() {

  //play background sound
  playBackgroundSound();
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
    sound  = document.querySelector("#audioPlayer2");
   
  
    // ready to go !
    mainLoop();
};