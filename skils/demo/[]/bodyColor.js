var colorArray = ['red', 'green', 'blue', 'yellow'];
var i = 0;
function chacColor() {
    document.body.style.background = colorArray[i];
    i++;
    if (i > colorArray.length - 1) { 
        i = 0;
     
    }
}

// to go Html
// <button onclick="chacColor()"></button>