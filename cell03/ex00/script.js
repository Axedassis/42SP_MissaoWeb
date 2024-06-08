const btn = document.querySelector("#btn")

if(btn){
    btn.addEventListener("click", () => {
        changeColor()
    })
}

function changeColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}
