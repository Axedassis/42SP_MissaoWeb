
$(document).ready(() => {
   const btn = $("#btn"); //dom -> query selector
    if(btn){
        btn.on("click", () => { //on = event listener click
            changeColor()
        })
    }

    function changeColor(){
        var randomColor = Math.floor(Math.random()*16777215).toString(16); 
        $("body").css("background-color", "#" + randomColor) //"body" -> take from DOM by tag
    }

})


