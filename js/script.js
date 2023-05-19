// HTML要素をjQueryオブジェクトとして変数に代入
var num1 = $("#num1"); // 100を表示する要素
var num2 = $("#num2"); // 1000を表示する要素
var btnA = $("#btnA"); // Aボタン
var btnB = $("#btnB"); // Bボタン
var btnC = $("#btnC"); // Cボタン
var msg = $("#msg"); // メッセージを表示する要素

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
  num.text(value); // 値を更新
  if (value <= 0) { // 値が0以下になったら
    value = 0; // 値を0にする
    msg.text(num.attr("id") + "が0になりました"); // メッセージを表示する要素にテキストを挿入
  }
  num.text(value); // 値を更新
}

console.log("ここまで動いた3")

// ドキュメントが準備できたら
$(document).ready(function() {
  // Aボタンがクリックされたら
  btnA.click(function() {
    // 100か1000のどちらかをランダムに選んで10, 20, 30のいずれかで減らす
    var target = randomInt(1, 2) === 1 ? num1 : num2;
    decreaseNum(target, [10, 20, 30]);
    console.log("Aボタン動作確認");
  });

  console.log("ここまで動いた4")
  
  // Bボタンがクリックされたら
  btnB.click(function() {
    // 100か1000のどちらかをランダムに選んで15, 25, 35のいずれかで減らす
    var target = randomInt(1, 2) === 1 ? num1 : num2;
    decreaseNum(target, [15, 25, 35]);
    console.log("Bボタン動作確認");
  });

  console.log("ここまで動いた5")
  
  // Cボタンがクリックされたら
  btnC.click(function() {
    // 100か1000のどちらかをランダムに選んで3, 6, 9のいずれかで減らす
    var target = randomInt(1, 2) === 1 ? num1 : num2;
    decreaseNum(target, [3, 6, 9]);
    console.log("Cボタン動作確認");
  });
});

console.log("ここまで動いた6")

// 暗転ゲームオーバーの関数
$(function() {
  if num1 ( value = 0) {
      result.text(num.attr("num1") + "表示テスト"); // メッセージを表示する要素にテキストを挿入
  }
});