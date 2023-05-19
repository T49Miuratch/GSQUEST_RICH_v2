console.log("1まで動いた");

$(".attack").on("click", function (){
    $(".commandtext").html("プレイヤーのこうげき！");
    var sound = new Audio('se/attack.wav');sound.play();
    console.log("こうげきうごいた");
});

$(".magic").on("click", function (){
    $(".commandtext").html("プレイヤーはまほうをとなえた！");
    var sound = new Audio('se/magic.wav');sound.play();
    console.log("まほううごいた");
});

$(".guard").on("click", function (){
    $(".commandtext").html("プレイヤーはみをまもった！");
    var sound = new Audio('se/guard.wav');sound.play();
    console.log("まもるうごいた");
});


console.log("2まで動いた");


$(".button").on("click", function (){

    var random = Math.floor(Math.random() * 3+1);
    console.log(random,"バトル関数")
    if (random === 1){
        $(".result1").html("プレイヤーのこうげき！");
        var sound = new Audio('se/attack.wav');sound.play();
        console.log("1");

    }else if (random === 2){
        $(".result1").html("プレイヤーはまほうをとなえた！");
        var sound = new Audio('se/magic.wav');sound.play();
        console.log("2");
    }else if (random === 3){
        $(".result1").html("プレイヤーはみをまもった！");
        var sound = new Audio('se/guard.wav');sound.play();
        console.log("3");
    }else if (random === 4){
        $(".result1").html("モンスターがプレイヤーのこうどうをうちけした！");
        var sound = new Audio('se/gokaku.wav');sound.play();
        console.log("4");
    }
    });

    console.log("3まで動いた");

    $(function(){
	
        //class="btn"のどれかをクリックした時の処理
        $('.btn').click(function(){
    
        //0か1か2の3つをランダムで選択（0がグー、1がチョキ、2がパー）。scoreに代入。
            const score = Math.round(Math.random()*2);
        //クリックしたbtnのdata-scoreの値を取得。userに代入。
        const user = $(this).attr('.data-score');

        console.log('.data-score');
            
        //グーチョキパーの画像を表示
        $('#g_btn_str').html('<img src="https://blog.8bit.co.jp/wp-content/uploads/2016/02/'+ score + '.png" />');
            
        //score（敵の値）とuser（自分の選択した値）を調べて、条件ごとに結果のメッセージを設定。resultに代入
        const result =(function(){
            if(score == 0 && user == 0) return 'あいこ';
            if(score == 0 && user == 1) return 'あなたのかち';
            if(score == 0 && user == 2) return 'あなたのまけ';
            if(score == 1 && user == 0) return 'あなたのかち';
            if(score == 1 && user == 1) return 'あいこ';
            if(score == 1 && user == 2) return 'あなたのまけ';
            if(score == 2 && user == 0) return 'あなたのまけ';
            if(score == 2 && user == 1) return 'あなたのかち';
            return 'あいこ';
        })();
        //resultの結果を赤文字で表示
        $('#g_resultArea').html(result+'！')
            
        });
        
    });

    console.log("4まで動いた");


     //ここからJSを記述Start!!!
(function(){
    $("#gu_btn").on("click", function(){
        var humanGu = 1;
        var comp = Math.floor(Math.random()*3+1 );

    if(comp == 1 ){
        $("#pc").text("グー")
        $("#result").text("あいこです")
    }else if(comp == 2 ){
        $("#pc").text("チョキ")
        $("#result").text("勝ちです")     
    }else if(comp == 3 ){
        $("#pc").text("パー")
        $("#result").text("負けです")
    }
});

    $("#cho_btn").on("click", function(){
        var humaCho = 2;
        var comp = Math.floor(Math.random()*3+1 );

    if( comp == 1 ){
        $("#pc").text("グー")
        $("#result").text("負けです")
    }else if( comp == 2 ){
        $("#pc").text("チョキ")
        $("#result").text("あいこです")
    }else if( comp == 3 ){
        $("#pc").text("パー")
        $("#result").text("あいこです")
    }
});
    $("#par_btn").on("click", function(){
        var humaPar = 3;
        var comp = Math.floor(Math.random()*3+1 );
    if(comp==1){
        $("#pc").text("グー")
        $("#result").text("勝ちです")
    }else if(comp==2){
        $("#pc").text("チョキ")
        $("#result").text("負けです")
    }else if(comp==3){
        $("#pc").text("パー")
        $("#result").text("あいこです")
    }
 });

});

function display_points()
{
Point01.innerText = PointCom;
Point02.innerText = PointMe;
}