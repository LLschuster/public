window.onload = function init() {

    //play background sound
    playBackgroundSound();
    // called AFTER the page has been loaded
    for (let x = 0; x < 10; x++) {
        if (localStorage.getItem("score" + x.toString()) != null) {
            var score = localStorage.getItem("score" + x.toString());
            scoreList.push(parseInt(score));
            sortedScore.push(parseInt(score));
        }
    }
    nlabel = scoreList.length - 1; //to identified the scores of each playthrough
    canvas = document.querySelector("#Canvas");
    message = document.querySelector("#pa");
    tableFrame = document.querySelector("#scoreTable");
    table = document.createElement("table");


    // often useful
    w = canvas.width;
    h = canvas.height;
    ballNumber = document.querySelector("#inputBallNumber");

    // important, we will draw with this object
    ctx = canvas.getContext('2d');

    //create balls
    balls = createBalls(5);
    player.draw();
    canvas.addEventListener('mousemove', getMousePos);
    canvas.addEventListener('keypress', shield);
    window.addEventListener('keypress', shield);
    sound = document.querySelector("#audioPlayer2");


    // ready to go !
    mainLoop();
};