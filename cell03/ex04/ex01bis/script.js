const colors = ["red", "green", "blue"]
var colorTracker = 0;


$(document).ready(() => {
    const ballonElement = $(".ballon");

    ballonElement.on("click", () => {
        var $width = ballonElement.width();
        var $height = ballonElement.height();
        

        $(ballonElement).css({
            'width': ($width + 10) + "px",
            'height': ($height + 10) + "px"
        })

        if($(ballonElement).width() > 420){
            $(ballonElement).css({
                width: "200px",
                height: "200px"
            })
        }   

        colorTracker++;
        if(colorTracker > 2){
            colorTracker = 0
        }
        $(ballonElement).css({backgroundColor: colors[colorTracker]})
    })

        ballonElement.on("mouseout", () => {
            var $width = $(ballonElement).width();
            var $height = $(ballonElement).height();

           colorTracker--;
            
           if(colorTracker < 0){
            colorTracker = colors.length - 1;
           }

           $(ballonElement).css({
            backgroundColor: colors[colorTracker]
           })   

           if($width >= 200){
            ballonElement.css({
                width: ($width - 5) + "px",
                height: ($height - 5) + "px"
            })
           }

        })
})
