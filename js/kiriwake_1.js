$(function() {
  var btn = $("#btn"); // ボタン要素
  var num1 = $("#num1"); // 数字要素1
  var num2 = $("#num2"); // 数字要素2
  var msg = $("#msg"); // メッセージ要素

  // jQueryでボタンにクリックイベントを設定する
btn.click(function() {
    // クリックイベントの中で、ランダムに「5」「10」「15」のいずれかを選択する
    var array = [5, 10, 15]; // 減らす数の配列
    var index = Math.floor(Math.random() * array.length); // 配列のインデックスをランダムに決める
    var delta = array[index]; // 減らす数

    // ランダムに数字要素1か数字要素2のどちらかを選択する
    var target = Math.random() < 0.5 ? num1 : num2; // 減らす対象

    // 数字を表示する要素の値からランダムに選択した数を引く
    var value = parseInt(target.text()); // 現在の値を取得（文字列なので数値に変換）
    value -= delta; // 値を減らす

    // 数字が0以下になったら、数字を0にしてボタンを無効にする
    if (value <= 0) {
      value = 0; // 値を0にする
      btn.prop("disabled", true); // ボタンを無効にする

      // メッセージ要素に結果を表示する
    if (target === num1) {
        msg.text("ざんねん"); // 数字要素1が0になった場合
    } else {
        msg.text("おめでとう"); // 数字要素2が0になった場合
    }
    }

    // 数字要素の値を更新する
    target.text(value);
});
});