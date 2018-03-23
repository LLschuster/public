var words = ["leo","igo","ice","juan","jean","medicina"];
var rndNumber;
var wordToShow;
var myinput;
var mybutton;
var span;
const tim=5000;
var status;

 
  wordToShow = document.querySelector("#wordToShow");
  myinput = document.querySelector("#input");
  span = document.querySelector("#myspan");
  mybutton = document.querySelector("#mybutton");
  status = true; //check if game is still going
 //code to show the word


function swowWord()
{
  myinput.value = "";
  var num = Math.floor(Math.random()*words.length);
  wordToShow.innerHTML = "Write this as fast as you can: " + words[num];
}

function startTimeOut(interVal)
{
 var timeOut = setTimeout(function timeOut(){
   alert("your time is over;");
  
},interVal);
}







function check()
{
  span.innerHTML = input.value;
  if (words[rndNumber]==input.value)
  {
    alert("you won");
    clearTimeout(timeOut);
    status = false;
  }
}


mybutton.addEventListener("click",swowWord());
mybutton.addEventListener("click",startTimeOut(tim));
myinput.addEventListener("input",check());
