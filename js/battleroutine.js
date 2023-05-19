$().ready(function(){



});

$(".damage").on("click", function (){

    var random = Math.floor(Math.random() * 5+1);
    //ランダムで1から5のサイコロが振られる

    if (random === 1){
    $(".hitpoint").html(".hitpoint"-1);

}else if (random === 2){
    $(".hitpoint").html(".hitpoint"-2);

}else if (random === 3){
    $(".hitpoint").html(".hitpoint"-3);

}else if (random === 4){
    $(".hitpoint").html(".hitpoint"-4);

}else if (random === 5){
    $(".hitpoint").html(".hitpoint"-5);

}
});