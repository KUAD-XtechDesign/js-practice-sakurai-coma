$(function(){

    let txt1="おはようございます！";
    let txt2="おげんきですか？";
    let num1=20;
    let num2=32;

    $("#button01").on("click",function(){
        $("#content").text("こんにちは！")
    })

    $("button02").on(click,funtion(){
        $("content").text(txt1)
    })
})