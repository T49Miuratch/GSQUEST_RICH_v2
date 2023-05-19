console.log("はじめてのJavaScript");
console.log(23 + 5);
console.log(2000 - 1800);
console.log("18+5");

//変数=箱のお話

var kingaku = 100;
console.log(kingaku,"kingakuの変数");

var shingou = "あかいろ";

//条件分岐if文

var tensuu = 40/2*4;
if (tensuu >= 80) {
    console.log("素晴らしいおめでとう！");
}else{
    console.log("もっと頑張りましょう");
}

//関数=おまじないのお話

var random = Math.floor(Math.random() * 5+1);
console.log(random,"ランダムな数字の箱")
if (random === 1){
    console.log("大吉でっす！");
}else if (random === 2){
    console.log("吉です！");
}else if (random === 3){
    console.log("中吉です");
}else if (random === 4){
    console.log("小吉です…");
}else if (random === 5){
    console.log("凶！");
}

$(".aa").on("click", function (){

var random = Math.floor(Math.random() * 5+1);
console.log(random,"ランダムな数字の箱")
if (random === 1){
    console.log("大吉でっす！");
    $("h1").html("大吉でっす！");
    $("h1").css("color","red"); 
}else if (random === 2){
    console.log("吉です！");
    $("h1").html("吉です！");
}else if (random === 3){
    console.log("中吉です");
    $("h1").html("中吉です");
}else if (random === 4){
    console.log("小吉です…");
    $("h1").html("小吉です…");
}else if (random === 5){
    console.log("凶！");
    $("h1").html("凶！");}
});

console.log("追加で記載");

$(".janken").on("click", function (){

    var random = Math.floor(Math.random() * 3+1);
    if (random === 1){
        console.log("グー");
        $("h2").html("グー");
    }else if (random === 2){
        console.log("チョキ");
        $("h2").html("チョキ");
    }else if (random === 3){
        console.log("パー");
        $("h2").html("パー");}
    

});

