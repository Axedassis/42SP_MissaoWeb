$(document).ready(() => {
    setInterval(() => {
        alert("Please, use me...")
    }, 30000);
    
    const $calc = $("#calc")

    $calc.on("click", () => {
        var $inputX = $("#firstVal").val()
        var $inputY = $("#secondVal").val()
        var $inputO = $("#operation").val()

        if($inputX < 0 || $inputY < 0){
            return alert('Error :(')
        }
        let $res = eval($inputX + $inputO + $inputY);

        if($inputO == "/" || $inputO == "%"){
            alert("Its over 9000!")
        }        
        console.log($res);
        alert($res.toFixed(2));
    })
})

