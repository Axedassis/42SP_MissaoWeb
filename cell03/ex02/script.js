const inputX = document.querySelector("#firstVal");
const inputY = document.querySelector("#secondVal");
const inputO = document.querySelector("#operation");

setInterval(() => {
    alert("Please, use me...")
}, 30000);

function calc(){

    if(inputX.value < 0 || inputY.value < 0){
        return alert('Error :(')
    }

    let res = eval(inputX.value + inputO.value + inputY.value);

    if(inputO.value == "/" || inputO.value == "%"){
        alert("Its over 9000!")
    }
    console.log(res);
    alert(res.toFixed(2));
}