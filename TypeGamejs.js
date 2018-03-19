var words = ['leo','igo','ice','juan','jean','medicina'];
var rndNumber;
var wordToShow;
var myinput;
var mybutton;
var span;
var timeOut
const tim=5000;
var status;
var width=0;
var timer;
var status=true;
window.onload = init;

function init(evt)
 {
    wordToShow = document.querySelector("#wordToShow");
    myinput = document.querySelector("#input");
    span = document.querySelector("#myspan");
    mybutton = document.querySelector("#mybutton");
    progressBar = document.querySelector("#bar");
    status = true; //check if game is still going
   //code to show the word
   mybutton.addEventListener('click',swowWord);
mybutton.addEventListener('click',startTimeOut);
mybutton.addEventListener('click',progress);
myinput.addEventListener('input',check);
 }
 


function swowWord()
{
  status = true;
  myinput.value = "";
  
  rndNumber = Math.floor(Math.random() * words.length);
  wordToShow.innerHTML = "Write this as fast as you can: " + words[rndNumber];
}

function startTimeOut(evt)
{
 
 timeOut = setTimeout(function timeOut(){
  wordToShow.innerHTML = "<h1>your time is over</h1>";
  clearInterval(timer);
  progressBar.style.width = 100+'%';
  progressBar.innerHTML = 100+"%";
  status = false;
},tim);
}

function progress(evt)
{
  width = 0;
  progressBar.style.width = '0%';
  timer = setInterval(function progress(evt){
    if (width != 100)
    {
      width += 20;
      progressBar.style.width = width+'%';
      progressBar.innerHTML = width+"%";
    }
  
  },1000)
}





function check(evt)
{
  span.innerHTML = input.value;
  if (status)
  {
    if (words[rndNumber]===evt.target.value)
  {
      console.log("yes");
      wordToShow.innerHTML = "<h1>you won</h1>";
    clearTimeout(timeOut);
    clearInterval(timer);
  }
  }
  
  
}


