



let myPicturesArray = [
    {
    "albumId": 1,
    "id": 1,
    "title": "e",
    "url": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Razer-logo.png",
    "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Razer-logo.png"
    },
    {
    "albumId": 1,
    "id": 2,
    "title": "d",
    "url": "https://www.freeiconspng.com/uploads/deadpool-icon-png-21.png",
    "thumbnailUrl": "https://www.freeiconspng.com/uploads/deadpool-icon-png-21.png"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "c",
        "url": "https://uboachan.net/og/src/1367046052022.png",
        "thumbnailUrl": "https://uboachan.net/og/src/1367046052022.png"
        },{
            "albumId": 1,
            "id": 4,
            "title": "b",
            "url": "https://tgchan.org/kusaba/questdis/src/130784452211.png",
            "thumbnailUrl": "https://tgchan.org/kusaba/questdis/src/130784452211.png"
            },{
                "albumId": 1,
                "id": 5,
                "title": "a",
                "url": "http://placehold.it/600/771796",
                "thumbnailUrl": "http://www.dcorti.com/griffin/200x200-logo.jpg"
                }]
window.onload = function init()
{
  let box = document.querySelector("box");
  let box2 = document.querySelector("box2");
  var showbtn = document.querySelector("showbtn");
  
};

showbtn.addEventListener('click',showImg);

function showImg()
{
    while (box.hasChildNodes())
    {
        
            box.removeChild(box.childNodes[0]);
       
    }
   
    myPicturesArray.forEach(function(currentImage) 
    {
        let image = document.createElement("img");
        image.src = currentImage.thumbnailUrl;
        image.alt = currentImage.title;
        image.addEventListener('click',toFocus);
        box.appendChild(image);
     });
}

function toFocus(evt)
{
    var element = evt.target.cloneNode(true);
        box2.removeChild(box2.childNodes[0]);
        
        element.classList.add("imgBig")
        box2.appendChild(element);
}