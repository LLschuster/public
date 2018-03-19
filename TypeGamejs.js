var words = ['leo','igo','ice','juan','jean','medicina'];
var rndNumber;
var wordToShow;
var myinput;
var mybutton;
var span;
var timeOut
const tim=5000;
var status;
window.onload = init;

function init(evt)
 {
    wordToShow = document.querySelector("#wordToShow");
    myinput = document.querySelector("#input");
    span = document.querySelector("#myspan");
    mybutton = document.querySelector("#mybutton");
    status = true; //check if game is still going
   //code to show the word
   mybutton.addEventListener('click',swowWord);
mybutton.addEventListener('click',startTimeOut);
myinput.addEventListener('input',check);
 }
 


function swowWord()
{
  myinput.value = "";
  rndNumber = Math.floor(Math.random() * words.length);
  wordToShow.innerHTML = "Write this as fast as you can: " + words[rndNumber];
}

function startTimeOut(evt)
{
 timeOut = setTimeout(function timeOut(){
   alert("your time is over;");
  
},tim);
}







function check(evt)
{
  span.innerHTML = input.value;
  if (words[rndNumber]===evt.target.value)
  {
      console.log("yes");
    alert("you won");
    clearTimeout(timeOut);
    
  }
}


