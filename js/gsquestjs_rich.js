//オープニングモーダル

$(function(){
    window.onload = function(){
    $('.modal').fadeIn();
    return false;
    }

    $('.start-btn').on('click',function(){
        let audio = $("#audio").get(0);
        let isPlaying = false;
		if (isPlaying) {
			audio.pause();
		} else {
			audio.play();
		}
    $('.modal').fadeOut(
        console.log("フェードアウト動いた")
)
return false;});

    $('.start-btn-silent').on('click',function(){
    $('.modal').fadeOut(

        console.log("フェードアウトサイレント動いた")

    )});

return false;});

// 音楽を制御するフッター近くのボタン

$(function () {
	let audio = $("#audio").get(0);
	let isPlaying = false;
	$("#btnmusic-b").on("click", function () {
		if (isPlaying) {
			audio.pause();
		} else {
			audio.play();
		}
	});
	audio.onplaying = function() {
		isPlaying = true;
	};
	audio.onpause = function() {
		isPlaying = false;
	};
});

// HTML要素をjQueryオブジェクトとして変数に代入
var num1 = $("#playerhp"); // 60を表示する要素
var num2 = $("#monsterhp"); // 100を表示する要素
var btnA = $("#attack_btn"); // Aボタン
var btnB = $("#magic_btn"); // Bボタン
var btnC = $("#guard_btn"); // Cボタン
var msg1 = $("#command_t"); // メッセージを表示する要素1
var msg2 = $("#result_t"); // メッセージを表示する要素2

console.log("ここまで動いた1")

// ランダムな整数を返す関数
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("ここまで動いた2")

// 数字を減らす関数
function decreaseNum(num, array) {
    // 引数numはjQueryオブジェクト、arrayは減らす値の配列
    var value = parseInt(num.text()); // 現在の値を取得
    var delta = array[randomInt(0, array.length - 1)]; // ランダムに減らす値を選択
    value -= delta; // 値を減らす
    if (value <= 0) { // 値が0以下になったら
      value = 0; // 値を0にする
      msg1.text(num.attr("id") + "が0になりました"); // メッセージを表示する要素にテキストを挿入
    }
    num.text(value); // 値を更新
}

//「こうげき」ここから

$(".attack").on("click", function (){
    $("#command_t").html("プレイヤーは　こうげきに　でた！");
    setTimeout(function(){
        $('html').css('background-color','red')
        $('html').css('background-color','#1e2e35',500)});
        var sound = new Audio('se/miss.wav');sound.play();

        //ゆらす記述ここから
        $(this).css("animation", "attack 0.3s");
        var copied = $(this).clone(true);
        $(this).before(copied);
        $("." + $(this).attr("class") + ":last").remove();
        //ゆらす記述ここまで

//アクション記述ここから

    var comp = Math.floor(Math.random()*3+1 );
    
if(comp == 1 ){
    $("#command_t").text("モンスターが　ヒラリと　かわした！");
    var sound = new Audio('se/miss.wav');sound.play();
    $('.boss').children('img').attr('src', 'img/dotmonster_5.png');
    $("#result_t").text("ダメージを　あたえられない！");

    setTimeout(function(){
        $('.boss').children('img').attr('src', 'img/dotmonster_1.png');
    },1500);
    
}else if(comp == 2 ){
    $("#command_t").text("モンスターに　クリティカルヒット！");
    var sound = new Audio('se/attack.wav');sound.play();
    var sound = new Audio('se/nakigoe.wav');sound.play();
    $('.boss').children('img').attr('src', 'img/dotmonster_3.png');
    $("#result_t").text("だいダメージを　あたえた！");
    $("#attackimg img").show('slow');
    $("#attackimg img").hide('fast');
    var value1 = parseInt(num2.text()); // 現在の値を取得（文字列なので数値に変換）
    value1 -= 20; // 値を減らす
    num2.text(value1); // 数字要素1の値を更新する

    setTimeout(function(){
        $('.boss').children('img').attr('src', 'img/dotmonster_1.png');
    },1500);

}else if(comp == 3 ){
    $("#command_t").text("カウンター　こうげきを　くらった！");
    var sound = new Audio('se/himei.wav');sound.play();
    $('.boss').children('img').attr('src', 'img/dotmonster_6.png');
    $("#result_t").text("しょうげきで　あたまがクラクラする！");
    var value2 = parseInt(num1.text()); // 現在の値を取得（文字列なので数値に変換）
    value2 -= 15; // 値を減らす
    num1.text(value2); // 数字要素2の値を更新する

//アクション記述ここまで

    setTimeout(function(){
    $('.boss').children('img').attr('src', 'img/dotmonster_1.png');
},1500);

    console.log("こうげきうごいた");
}
});

//「こうげき」ここまで

//「まほう」ここから

$(".magic").on("click", function (){
    $("#command_t").html("プレイヤーは　まほうを　となえた");
    setTimeout(function(){
        $('html').css('background-color','red')
        $('html').css('background-color','#1e2e35',500)});
        var sound = new Audio('se/scratch.wav');sound.play();

        //ゆらす記述ここから
        $(this).css("animation", "magic 0.3s");
        var copied = $(this).clone(true);
        $(this).before(copied);
        $("." + $(this).attr("class") + ":last").remove();
        //ゆらす記述ここまで

//アクション記述ここから

    var comp = Math.floor(Math.random()*3+1 );
    
if(comp == 1 ){
    $("#command_t").text("モンスターに　まほうを　かきけされた！");
    var sound = new Audio('se/taoreru.wav');sound.play();
    $('.boss').children('img').attr('src', 'img/dotmonster_4.png');
    $("#result_t").text("ムズカシイ　まほうを　となえぞん！");

    setTimeout(function(){
        $('.boss').children('img').attr('src', 'img/dotmonster_2.png');
    },1500);
    
}else if(comp == 2 ){
    $("#command_t").text("モンスターの　ニガテなまほう　だった！");
    var sound = new Audio('se/magic.wav');sound.play();
    var sound = new Audio('se/nakigoe.wav');sound.play();
    $('.boss').children('img').attr('src', 'img/dotmonster_3.png');
    $("#result_t").text("だいダメージを　あたえた！");
    $("#magicimg img").show('slow');
    $("#magicimg img").hide('fast');
    var value3 = parseInt(num2.text()); // 現在の値を取得（文字列なので数値に変換）
    value3 -= 22; // 値を減らす
    num2.text(value3); // 数字要素1の値を更新する

    setTimeout(function(){
        $('.boss').children('img').attr('src', 'img/dotmonster_1.png');
    },1500);

}else if(comp == 3 ){
    $("#command_t").text("モンスターが　まほうを　はねかえす！");
    var sound = new Audio('se/magic.wav');sound.play();
    var sound = new Audio('se/himei.wav');sound.play();
    $('.boss').children('img').attr('src', 'img/dotmonster_6.png');
    $("#result_t").text("プレイヤーが　ほのおに　つつまれる！");
    var value4 = parseInt(num1.text()); // 現在の値を取得（文字列なので数値に変換）
    value4 -= 17; // 値を減らす
    num1.text(value4); // 数字要素2の値を更新する

//アクション記述ここまで

    setTimeout(function(){
    $('.boss').children('img').attr('src', 'img/dotmonster_1.png');
},1500);

    console.log("まほううごいた");
}
});

//「まほう」ここまで

/*
$(".magic").on("click", function (){
    $(".commandtext").html("プレイヤーは　まほうを　となえた！");
        //ゆらす記述ここから
        $(this).css("animation", "magic 0.3s");
        var copied = $(this).clone(true);
        $(this).before(copied);
        $("." + $(this).attr("class") + ":last").remove();
        //ゆらす記述ここまで

//アクション記述ここから
$(function(){
    $("#magic_btn").on("click", function(){
        var comp = Math.floor(Math.random()*3+1 );

    if(comp == 1 ){
        $("#command_t").text("モンスターに　まほうを　はねかえされた！");
        $('.boss').children('img').attr('src', 'img/dotmonster_2.png');
        $("#result_t").text("プレイヤーが　ほのおに　つつまれる！");
    }else if(comp == 2 ){
        $("#command_t").text("モンスターが　まほうを　うちけした！");
        $('.boss').children('img').attr('src', 'img/dotmonster_3.png');
        $("#result_t").text("ダメージを　あたえられない");
    }else if(comp == 3 ){
        $("#command_t").text("モンスターの　ニガテなまほうを　となえた！");
        $('.boss').children('img').attr('src', 'img/dotmonster_4.png');
        $("#result_t").text("モンスターは　ほのおに　つつまれた！");
    }
});
});
//アクション記述ここまで

    setTimeout(function(){
    var sound = new Audio('se/magic.wav');sound.play();

    $("#fireimg img").show('slow');
    $("#fireimg img").hide('fast');
    $('.boss').children('img').attr('src', 'img/dotmonster_1.png');
},0500);

    console.log("まほううごいた");
});

*/
/*
$(".guard").on("click", function (){
    $(".commandtext").html("プレイヤーは　まもりを　かためた！");
        //ゆらす記述ここから
        $(this).css("animation", "guard 0.3s");
        var copied = $(this).clone(true);
        $(this).before(copied);
        $("." + $(this).attr("class") + ":last").remove();
        //ゆらす記述ここまで

//アクション記述ここから
$(function(){
    $("#guard_btn").on("click", function(){
        var comp = Math.floor(Math.random()*3+1 );

    if(comp == 1 ){
        $("#command_t").text("モンスターは　まもりに　はじかれた！");
        $('.boss').children('img').attr('src', 'img/dotmonster_8.png');
        $("#result_t").text("すべってころんで　モンスターおおケガ！");
        var sound = new Audio('se/gokaku.wav');sound.play();
    }else if(comp == 2 ){
        $("#command_t").text("まもりのスキに　しょじきんを　スラれた！");
        $('.boss').children('img').attr('src', 'img/dotmonster_8.png');
        $("#result_t").text("プレイヤーに　せいしんてき　ダメージ！");
        var sound = new Audio('se/gokaku.wav');sound.play();
    }else if(comp == 3 ){
        $("#command_t").text("モンスターも　まもりにはいっている");
        $('.boss').children('img').attr('src', 'img/dotmonster_8.png');
        $("#result_t").text("おたがい　なんだか　にがわらい！");
        var sound = new Audio('se/gokaku.wav');sound.play();
    }
});
});
//アクション記述ここまで

    setTimeout(function(){
    var sound = new Audio('se/guard.wav');sound.play();
    $("#shieldimg img").show('slow');
    $("#shieldimg img").hide('fast');
    $('.boss').children('img').attr('src', 'img/dotmonster_1.png');
},0500);
    console.log("まもるうごいた");
});
*/

//「ガード」ここから

$(".guard").on("click", function (){
    $("#command_t").html("プレイヤーは　ガードを　かためた");
    setTimeout(function(){
        $('html').css('background-color','red')
        $('html').css('background-color','#1e2e35',500)});
        var sound = new Audio('se/gokaku.wav');sound.play();

        //ゆらす記述ここから
        $(this).css("animation", "guard 0.3s");
        var copied = $(this).clone(true);
        $(this).before(copied);
        $("." + $(this).attr("class") + ":last").remove();
        //ゆらす記述ここまで

//アクション記述ここから

    var comp = Math.floor(Math.random()*3+1 );
    
if(comp == 1 ){
    $("#command_t").text("モンスターも　まもりに　はいっている！");
    $('.boss').children('img').attr('src', 'img/dotmonster_9.png');
    $("#result_t").text("おたがい　なんだか　にがわらい！");
    var sound = new Audio('se/shine.wav');sound.play();
    setTimeout(function(){
        $('.boss').children('img').attr('src', 'img/dotmonster_1.png');
    },1500);
    
}else if(comp == 2 ){
    $("#command_t").text("モンスターは　まもりに　はじかれた！");
    var sound = new Audio('se/guard.wav');sound.play();
    var sound = new Audio('se/taoreru.wav');sound.play();
    var sound = new Audio('se/nakigoe.wav');sound.play();
    $('.boss').children('img').attr('src', 'img/dotmonster_8.png');
    $("#result_t").text("すべってころんで　モンスターおおケガ！");
    $("#guardimg img").show('slow');
    $("#guardimg img").hide('fast');
    var value5 = parseInt(num2.text()); // 現在の値を取得（文字列なので数値に変換）
    value5 -= 22; // 値を減らす
    num2.text(value5); // 数字要素1の値を更新する

    setTimeout(function(){
        $('.boss').children('img').attr('src', 'img/dotmonster_1.png');
    },1500);

}else if(comp == 3 ){
    $("#command_t").text("ガードのスキに　しょじきんを　スラれた！");
    var sound = new Audio('se/regi.wav');sound.play();
    var sound = new Audio('se/himei.wav');sound.play();
    $('.boss').children('img').attr('src', 'img/dotmonster_10.png');
    $("#result_t").text("プレイヤーの　さいふが　ひのくるま！");
    var value6 = parseInt(num1.text()); // 現在の値を取得（文字列なので数値に変換）
    value6 -= 12; // 値を減らす
    num1.text(value6); // 数字要素2の値を更新する

//アクション記述ここまで

    setTimeout(function(){
    $('.boss').children('img').attr('src', 'img/dotmonster_1.png');
},1500);

    console.log("ガードうごいた");

}
});

//「ガード」ここまで

//モンスターHP0

/*
if(num2 <= 0 ){
    $("#command_t").text("モンスターは　おとをたてて　たおれた！");
    $('.boss').children('img').attr('src', 'img/dotmonster_dead.png');
    $("#result_t").text("JavaScriptを　かんぜんにりかいした！");
    var sound = new Audio('se/congra1.wav');sound.play();
    var sound = new Audio('se/donpafu.wav');sound.play();
};
*/

//プレイヤーHP0


/*
$(function(){
    $("#btn").on("click", function(){
    $(this).css("animation", "guard 0.3s");
    
    var copied = $(this).clone(true);
    $(this).before(copied);
    $("." + $(this).attr("class") + ":last").remove();
    });
});
$('selector').attr('name');
*/
