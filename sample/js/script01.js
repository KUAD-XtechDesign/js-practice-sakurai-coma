$(funtion(){

    $("#button01").on("click",funtion(){
        $(".back-red").hide();
    })

$("#button02").on("click",funtion(){
    $(".back-blue").hide();
})

$("#button03").on("click",funtion(){
    $("#box03,#box07,#box08").hide();
})

$("#button04").on("click",funtion({
    $(".box").show();
})

})
