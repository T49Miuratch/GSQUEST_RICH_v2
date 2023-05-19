$(function(){
	
	//class="btn"のどれかをクリックした時の処理
	$('.btn').click(function(){

	//0か1か2の3つをランダムで選択（0がグー、1がチョキ、2がパー）。scoreに代入。
        const score = Math.round(Math.random()*2);
	//クリックしたbtnのdata-scoreの値を取得。userに代入。
	const user = $(this).attr('data-score');
		
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