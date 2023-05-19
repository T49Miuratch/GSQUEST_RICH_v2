//戦闘アルゴリズム//

const monsterhp = 100;
const playerhp = 60;

//戦闘アルゴリズムここまで//

//音楽を制御
$(function () {
	var audio = $("#audio").get(0);
	var isPlaying = false;
	$("#btnmusic").on("click", function () {
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
//音楽を制御

$(".attack").on("click", function (){
    $(".commandtext").html("プレイヤーは　こうげきに　でた！");
    setTimeout(function(){
        $('html').css('background-color','red')
        $('html').css('background-color','#1e2e35',500)});
        //ゆらす記述ここから
        $(this).css("animation", "attack 0.3s");
        var copied = $(this).clone(true);
        $(this).before(copied);
        $("." + $(this).attr("class") + ":last").remove();
        //ゆらす記述ここまで

//アクション記述ここから
        $(function(){
            $("#attack_btn").on("click", function(){
                var humanAttack = 1;
                var comp = Math.floor(Math.random()*3+1 );
        
            if(comp == 1 ){
                $("#comand_t").text("モンスターが　ヒラリと　かわした！");
                $('.boss').children('img').attr('src', 'img/dotmonster_5.png');
                $("#result_t").text("ダメージを　あたえられない！");
            }else if(comp == 2 ){
                $("#comand_t").text("モンスターに　クリティカルヒット！");
                $('.boss').children('img').attr('src', 'img/dotmonster_7.png');
                $("#result_t").text("だいダメージを　あたえた！");
            }else if(comp == 3 ){
                $("#comand_t").text("カウンター　こうげきを　くらった！");
                $('.boss').children('img').attr('src', 'img/dotmonster_6.png');
                $("#result_t").text("しょうげきで　あたまがクラクラする！");
            }
        });
        });
//アクション記述ここまで

    setTimeout(function(){
    var sound = new Audio('se/attack.wav');sound.play();
    $("#attackimg img").show('slow');
    $("#attackimg img").hide('fast');
    $('.boss').children('img').attr('src', 'img/dotmonster_1.png');
},0500);

    console.log("こうげきうごいた");
});

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
        var humanMagic = 2;
        var comp = Math.floor(Math.random()*3+1 );

    if(comp == 1 ){
        $("#comand_t").text("モンスターに　まほうを　はねかえされた！");
        $('.boss').children('img').attr('src', 'img/dotmonster_2.png');
        $("#result_t").text("プレイヤーが　ほのおに　つつまれる！");
    }else if(comp == 2 ){
        $("#comand_t").text("モンスターが　まほうを　うちけした！");
        $('.boss').children('img').attr('src', 'img/dotmonster_3.png');
        $("#result_t").text("ダメージを　あたえられない");
    }else if(comp == 3 ){
        $("#comand_t").text("モンスターに　クリティカル　ヒット！");
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
        var humanGuard = 3;
        var comp = Math.floor(Math.random()*3+1 );

    if(comp == 1 ){
        $("#comand_t").text("モンスターは　まもりに　はじかれた！");
        $('.boss').children('img').attr('src', 'img/dotmonster_8.png');
        $("#result_t").text("すべってころんで　モンスターおおケガ！");
        var sound = new Audio('se/gokaku.wav');sound.play();
    }else if(comp == 2 ){
        $("#comand_t").text("まもりのスキに　しょじきんを　スラれた！");
        $('.boss').children('img').attr('src', 'img/dotmonster_8.png');
        $("#result_t").text("プレイヤーに　せいしんてき　ダメージ！");
        var sound = new Audio('se/gokaku.wav');sound.play();
    }else if(comp == 3 ){
        $("#comand_t").text("モンスターも　まもりにはいっている");
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
