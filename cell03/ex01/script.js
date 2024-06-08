const colors = ["red", "green", "blue"]
var colorTracker = 0;

const ballonElement = document.querySelector(".ballon");

function action(ballonElement){
    var widht = ballonElement.offsetWidth;
    var height = ballonElement.offsetHeight;

    ballonElement.style.width = (widht + 10) + "px"
    ballonElement.style.height = (height + 10) + "px"

    if(ballonElement.offsetWidth > 420){
        ballonElement.style.width = 200 + "px"
        ballonElement.style.height = 200 + "px"
    }
    
    colorTracker += 1;
    
    if(colorTracker > 2){
        colorTracker = 0;
    }
    ballonElement.style.backgroundColor = colors[colorTracker];
}

ballonElement.addEventListener('mouseout', () => {
    var widht = ballonElement.offsetWidth;
    var height = ballonElement.offsetHeight;
    
    colorTracker -= 1;
    if(colorTracker < 0){
        colorTracker = colors.length - 1;
    }

    ballonElement.style.backgroundColor = colors[colorTracker];

    if(widht >= 200){
        ballonElement.style.width = (widht - 5) + "px"
        ballonElement.style.height = (height - 5) + "px"
    }

})