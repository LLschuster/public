window.onload = init;
var box1, box2;
function init()
{
     box1 = document.querySelector("#coolBrowsers");
     box2 = document.querySelector("#badBrowsers");
    var cr = document.querySelector("#cr").addEventListener('dragstart',drag);
    var ff = document.querySelector("#ff").addEventListener('dragstart',drag);
    var ie = document.querySelector("#ie").addEventListener('dragstart',drag);
    var op = document.querySelector("#op").addEventListener('dragstart',drag);
    var sf = document.querySelector("#sf").addEventListener('dragstart',drag);
    box1.addEventListener('drop',drop);
    box1.addEventListener('dragover',allow);
    box2.addEventListener('drop',drop);
    box2.addEventListener('dragover',allow);
   
}


function drag(evt)
{
   
    evt.dataTransfer.setData("text",evt.target.id);

}
function drop(evt)
{
    var data = evt.dataTransfer.getData("text");
    evt.target.append(document.getElementById(data));
    evt.preventDefault();
}

function allow (evt)
{
    evt.preventDefault();

}